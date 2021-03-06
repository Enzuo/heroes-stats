import {useEffect, useState} from 'react'
import {notify} from 'react-notify-toast'
import { api, getUserUid } from '@/common/utils'
import HEROES_LIST from '@/common/heroes.json'
import type * as T from '@/common/types/game'
import {uniqueRandom} from '@/common/utils'
import VoteRound from '@/modules/vote/components/VoteRound'


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

  const handleVote = (hero : T.Hero) => {
    // save
    const voteRound : T.VoteRound = {
      userUid: getUserUid(),
      elapsedTime: Date.now() - roundStartDate,
      heroes : heroes.map((h,i) => { return { 
        id : h.id, 
        isPicked: h.id === hero.id
      }})
    }

    save(voteRound)
    generateRound()
  }

  const save = async (voteRound) => {
    const result = await api.post('vote/', voteRound)
    if(result.status !== 200){
      return notify.show('Server error', 'error', 2000)
    }
  }

  return (
    <VoteRound heroes={heroes} onVote={handleVote}></VoteRound>
  )
}


export default Vote
