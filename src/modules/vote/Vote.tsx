import {useEffect, useState} from 'react'
import {notify} from 'react-notify-toast'
import { api, getUserUid } from 'src/common/utils'
import HEROES_LIST from 'src/common/heroes.json'
import type * as T from 'src/common/types/game'
import {uniqueRandom} from 'src/common/utils'
import VoteRound from 'src/modules/vote/components/VoteRound'


type VoteProps = {
  
}

function Vote ({} : VoteProps) {

  const [heroes, setHeroes] = useState([])
  const [roundStartDate, setRoundStartDate] = useState(Date.now())
  
  useEffect(() => {
    generateRound()
  }, [])
  
  const generateRound = () => {
    const indexes = uniqueRandom(HEROES_LIST.length)
    const heroes = indexes.map(i => HEROES_LIST[i])
    setHeroes(heroes)
    setRoundStartDate(Date.now())
  }

  const handleVote = async (hero : T.Hero) => {
    // save
    const voteRound : T.VoteRound = {
      userUid: getUserUid(),
      elapsedTime: Date.now() - roundStartDate,
      heroes : heroes.map((h,i) => { return { 
        id : h.id, 
        isPicked: h.id === hero.id
      }})
    }

    const result = await api.post('vote/', voteRound)
    if(result.status !== 200){
      return notify.show('Server error', 'error', 2000)
    }

    generateRound()
  }

  return (
    <VoteRound heroes={heroes} onVote={handleVote}></VoteRound>
  )
}


export default Vote
