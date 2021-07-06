import {useState} from 'react'
import styled from 'styled-components'
import Team from 'src/modules/game/components/Team'
import SaveButton from 'src/modules/game/components/SaveButton'
import { getUserUid } from 'src/common/utils'
import HEROES_LIST from 'src/common/heroes.json'
import HeroPicker from 'src/common/components/HeroPicker'
import Toggle from 'src/common/components/Toggle'
import type * as T from 'src/common/types/game'




function Game () {
  const defaultTeams : T.Team[] = [{
    label : 'Your team',
    isUserTeam : true,
    color : 'blue',
    members : []
  },{
    label : 'Ennemy team',
    color : 'red',
    members : []
  }]
  const [teams, setTeams] = useState(defaultTeams)
  const [isVictory, setVictory] = useState(false)
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0)

  const handleHeroPick = (hero) => {
    setTeams(tms => {
      return tms.map((team, index) => {
        return index === selectedTeamIndex ? addHeroToTeam(team, hero) : team
      })
    })
  }

  const handleTeamChange = (teamIndex, changedTeam) => {
    setTeams(tms => {
      return tms.map((team, index) => {
        return index === teamIndex ? changedTeam : team
      })
    })
  }

  const handleSave = async () => {
    const game : T.Game = {
      teams : teams,
      userUid : getUserUid(),
      isVictory : isVictory,
    }

    var res = await fetch('/api/game/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })

    if (res.status === 200) {
      setTeams(defaultTeams) // reset
      setVictory(false)
      return true
    }
    return false
  }

  const teamsList = teams.map((t, i) => 
    <Team 
      key={i} 
      team={t} 
      isSelected={i === selectedTeamIndex} 
      onClick={() => setSelectedTeamIndex(i)}
      onTeamChange={(team) => handleTeamChange(i, team)}
    ></Team>
  )

  return (
    <GameWrapper>
      <Teams>
      {teamsList}
      </Teams>

      <Toggle name="Victory" value={isVictory} onChange={(val) => setVictory(val)}></Toggle>
      {hasMembers(teams) && <SaveButton onSave={handleSave}></SaveButton>}
      <HeroPicker heroes={HEROES_LIST} onHeroPick={handleHeroPick}></HeroPicker>
    </GameWrapper>
  )
}

const Teams = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
`

const GameWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`



function hasMembers(teams : T.Team[]) {
  return !!(teams[0].members.length && teams[1].members.length)
}

function addHeroToTeam(team : T.Team, hero : T.Hero) : T.Team {
  if(!team.members.find( a => a.hero.id === hero.id)){
    if(team.members.length < 5){
      team.members.push({hero, status : {}})
    }
  }
  return team
}


export default Game
