import { useState } from 'react'
import styled from 'styled-components'
import type {TeamType} from '@/common/types/game'
import TeamMember from '@/common/components/TeamMember'

type TeamProps = {
  team : TeamType
  onClick? : Function
  isSelected? : boolean
}

function Team ({team, onClick, isSelected} : TeamProps) {
  const heroList = team.members.map((a, i) => <TeamMember key={i} member={a}></TeamMember>)
  return (
    <StyledTeam selected={isSelected} onClick={() => onClick()}>
      {team.label}
      <MemberRow className="members">
        {heroList}
      </MemberRow>
    </StyledTeam>
  )
}


const StyledTeam = styled.div`
  border: ${(props) => props.selected ? '1px red solid' : ''} 

`

const MemberRow = styled.div`
  display:flex;
  flex-direction:horizontal;
`

export default Team
