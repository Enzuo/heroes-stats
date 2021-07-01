import {useEffect, useState} from 'react'
import HEROES_LIST from '@/common/heroes.json'
import HeroCard from '@/modules/vote/components/HeroCard'

type VoteProps = {
  
}

function Vote ({} : VoteProps) {

  const [heroes, setHeroes] = useState([])
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const indexes = uniqueRandom(HEROES_LIST.length)
    const heroes = indexes.map(i => HEROES_LIST[i])
    setHeroes(heroes)
  }, [])

  return (
    <div>
      Pick your favorite
      {heroes.map(h => <HeroCard key={h.key} hero={h}></HeroCard>)}
    </div>
  )
}

function uniqueRandom(length){
  var nb=3
  var res=[]
  while(res.length < nb){
    var randomNumber = Math.floor(Math.random()*length);
    if(res.indexOf(randomNumber) === -1){
      res.push(randomNumber)
    }
  }
  return res
}

export default Vote
