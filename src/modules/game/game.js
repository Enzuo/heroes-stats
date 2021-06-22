import heroesList from '@/common/heroes.json'
import HeroPicker from '@/common/components/HeroPicker'
import Team from '@/common/components/Team'
import {useState} from 'react'

function Game () { 
  const [teamA, setTeamA] = useState([])
  const [teamB, setTeamB] = useState([])

  const handleHeroPick = (name) => {
    if(!teamA.find( a => a === name)){
      setTeamA(a => a.concat([name]))
    }
  }

  return (
    <div>
      Your team : 
      <Team heroes={teamA}></Team>

      Ennemy team :

      Victory ? :
      <HeroPicker heroes={heroesList} onHeroPick={handleHeroPick}></HeroPicker>
    </div>
  )
}

export default Game
