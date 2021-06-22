import heroesList from '@/common/heroes.json'
import HeroPicker from '@/common/components/HeroPicker'
import Team from '@/common/components/Team'
import {useState} from 'react'

function Game () { 
  const [teams, setTeams] = useState([[],[]])
  const [teamIndex, setTeamIndex] = useState(0)

  const handleHeroPick = (name) => {
    setTeams(teamsArr => {
      return teamsArr.map((t, i) => {
        if (i === teamIndex) {
          return addHeroToTeam(t, name)
        }
        return t
      })
    })
  }

  return (
    <div>
      Your team : 
      <Team heroes={teams[0]}></Team>

      Ennemy team :
      <Team heroes={teams[1]}></Team>

      Victory ? :
      <HeroPicker heroes={heroesList} onHeroPick={handleHeroPick}></HeroPicker>
    </div>
  )
}

function addHeroToTeam(team, hero){
  if(!team.find( a => a === hero)){
    if(team.length < 5){
      return team.concat(hero)
    }
  }
  return team
}

export default Game
