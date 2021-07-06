import { useState } from 'react'
import styled from 'styled-components'
import type * as T from 'src/common/types/game'
import TeamMember from 'src/common/components/TeamMember'

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
      isUser={i===0 && team.isUserTeam}
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
  padding:10px;
  width:400px;
  margin:10px;
  background-color: #0a1133;
  border: 1px solid rgba(153,204,255,.2);
  box-shadow: 0 0 15px 6px rgb(0 0 0 / 40%);
  border-color: ${(props) => props.selected ? 'rgba(153,204,255,.8)' : ''} 
`

const StyledMember = styled.div`
  display:flex;
  flex-direction:horizontal;
`

export default Team
