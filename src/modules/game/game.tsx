import heroesList from '@/common/heroes.json'
import HeroPicker from '@/common/components/HeroPicker'
import Team from '@/common/components/Team'
import {useState} from 'react'


interface Team {
  label: string;
  color: string;
  heroes: Array<string>;
}


function Game () {
  const defaultTeams : Team[] = [{
    label : 'Your team',
    color : 'blue',
    heroes : []
  },{
    label : 'Ennemy team',
    color : 'red',
    heroes : []
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

  return (
    <div>
      Your team : 
      <Team team={teams[0]}></Team>

      Ennemy team :
      <Team team={teams[1]}></Team>

      Victory ? :
      <HeroPicker heroes={heroesList} onHeroPick={handleHeroPick}></HeroPicker>
    </div>
  )
}

function addHeroToTeam(team : Team, hero : string) : Team {
  if(!team.heroes.find( a => a === hero)){
    if(team.heroes.length < 5){
      team.heroes.push(hero)
    }
  }
  return team
}

export default Game
