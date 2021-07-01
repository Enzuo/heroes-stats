import {useEffect, useState} from 'react'
import styled from 'styled-components'
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
      <HeroesList>
        {heroes.map((h, i) => <HeroCard key={h.key} index={i} hero={h}></HeroCard>)}
      </HeroesList>
    </div>
  )
}

const HeroesList = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  margin:50px;
`

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
