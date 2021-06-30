import { useState } from 'react'
import styled from 'styled-components'
import type * as T from '@/common/types/game'
import TeamMember from '@/common/components/TeamMember'

type TeamProps = {
  team : T.Team
  isSelected? : boolean
  onClick? : Function
  onMemberRemove? : (m : T.Member) => void
  onMemberStatusChange? : (m : T.Member, status) => void
}

function Team ({team, isSelected, onClick, onMemberRemove, onMemberStatusChange} : TeamProps) {
  const heroList = team.members.map((member, i) => (
    <TeamMember 
      key={i} 
      member={member} 
      onRemove={onMemberRemove ? () => onMemberRemove(member) : null} 
      onStatusChange={(st) => onMemberStatusChange(member, st)}
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
