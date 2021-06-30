import heroesList from '@/common/heroes.json'
import styled from 'styled-components'
import HeroPicker from '@/common/components/HeroPicker'
import Team from '@/modules/game/components/Team'
import type * as T from '@/common/types/game'
import {useState} from 'react'
import SaveButton from '@/modules/game/components/SaveButton'
import { isTemplateSpan } from 'typescript'




function Game () {
  const defaultTeams : T.Team[] = [{
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

  const handleHeroPick = (hero) => {
    setTeams(tms => {
      return tms.map((team, index) => {
        return index === teamIndex ? addHeroToTeam(team, hero) : team
      })
    })
  }

  const handleMemberStatus = (tmIndex, member, status) => {
    setTeams(tms => {
      return tms.map((team, index) => {
        return index === tmIndex ? changeMemberStatus(team, member, status) : team
      })
    })
  }

  const handleMemberRemove = (tmIndex, member) => {
    setTeams(tms => {
      return tms.map((team, index) => {
        return index === tmIndex ? removeTeamMember(teams[tmIndex], member) : team
      })
    })
  }

  const handleSave = async () => {
    const game : T.Game = {
      teams : teams
    }

    var res = await fetch('/api/game/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })

    console.log(res.status)
    if (res.status === 200) {
      return true
    }
    return false
  }

  const teamsList = teams.map((t, i) => 
    <Team 
      key={i} 
      team={t} 
      isSelected={i === teamIndex} 
      onClick={() => setTeamIndex(i)}
      // TODO onTeamChange to hide away team management functions
      onMemberRemove={(member) => handleMemberRemove(i, member)}
      onMemberStatusChange={(member, status) => handleMemberStatus(i, member, status)}
    ></Team>
  )

  return (
    <div>
      {teamsList}

      Victory ? :
      <SaveButton onSave={handleSave}></SaveButton>
      <HeroPicker heroes={heroesList} onHeroPick={handleHeroPick}></HeroPicker>
    </div>
  )
}




function addHeroToTeam(team : T.Team, hero : T.Hero) : T.Team {
  if(!team.members.find( a => a.hero.id === hero.id)){
    if(team.members.length < 5){
      team.members.push({hero, status : {}})
    }
  }
  return team
}

function changeMemberStatus(team: T.Team, member : T.Member, status: object) {
  var memb = team.members.find(a => a.hero === member.hero)
  memb.status = {...memb.status, ...status}
  return team
}

function removeTeamMember(team: T.Team, member) {
  var memberIndex = team.members.findIndex(a => a === member)
  if(memberIndex >= 0){
    team.members.splice(memberIndex, 1)
  }
  return team
}

export default Game
