import { useState } from 'react'
import styled from 'styled-components'
import type * as T from '@/common/types/game'
import TeamMember from '@/common/components/TeamMember'

type TeamProps = {
  team : T.Team
  isSelected? : boolean
  onClick? : Function
  onTeamChange? : (t : T.Team ) => any
  onMemberRemove? : (m : T.Member) => void
  onMemberStatusChange? : (m : T.Member, status) => void
}

function Team ({team, isSelected, onClick, onTeamChange} : TeamProps) {
  
  const handleMemberRemove = (member) => {
    var memberIndex = team.members.findIndex(a => a === member)
    if(memberIndex >= 0){
      team.members.splice(memberIndex, 1)
    }
    onTeamChange && onTeamChange(team)
  }

  const handleMemberStatusChange = (member, st) => {
    var memb = team.members.find(a => a.hero === member.hero)
    memb.status = {...memb.status, ...st}
    onTeamChange && onTeamChange(team)
  }
  
  const heroList = team.members.map((member, i) => (
    <TeamMember 
      key={i} 
      member={member} 
      onRemove={() => handleMemberRemove(member)} 
      onStatusChange={(st) => handleMemberStatusChange(member, st)}
    />
  ))
  return (
    <StyledTeam selected={isSelected} onClick={() => onClick()}>
      {team.label}
      <StyledMember>
        {heroList}
      </StyledMember>
    </StyledTeam>
  )
}


const StyledTeam = styled.div`
  border: ${(props) => props.selected ? '1px red solid' : ''} 

`

const StyledMember = styled.div`
  display:flex;
  flex-direction:horizontal;
`

export default Team
