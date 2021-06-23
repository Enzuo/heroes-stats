import heroesList from '@/common/heroes.json'
import HeroPicker from '@/common/components/HeroPicker'
import Team from '@/common/components/Team'
import type {TeamType} from '@/common/types/game'
import {useState} from 'react'




function Game () {
  const defaultTeams : TeamType[] = [{
    label : 'Your team',
    color : 'blue',
    members : []
  },{
    label : 'Ennemy team',
    color : 'red',
    members : []
  }]
  const [teams, setTeams] = useState(defaultTeams)
  const [teamIndex, setTeamIndex] = useState(0)

  const handleHeroPick = (name) => {
    setTeams(tms => {
      return tms.map((team, index) => {
        return index === teamIndex ? addHeroToTeam(team, name) : team
      })
    })
  }

  const teamsList = teams.map((t, i) => 
    <Team key={i} team={t} isSelected={i === teamIndex} onClick={() => setTeamIndex(i)}></Team>
  )

  return (
    <div>
      {teamsList}

      Victory ? :
      <HeroPicker heroes={heroesList} onHeroPick={handleHeroPick}></HeroPicker>
    </div>
  )
}

function addHeroToTeam(team : TeamType, hero : string) : TeamType {
  if(!team.members.find( a => a.hero === hero)){
    if(team.members.length < 5){
      team.members.push({hero})
    }
  }
  return team
}

export default Game
