import { useState } from 'react'
import Hero from '@/common/components/Hero'
import type {TeamType, Member} from '@/common/types/game'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faTimesCircle, faLink } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'



const TeamView = styled.div`
  border: ${(props) => props.selected ? '1px red solid' : ''} 
`

function Team ({team, onClick, isSelected} : TeamProps) {
  const heroList = team.members.map((a, i) => <TeamMember key={i} member={a}></TeamMember>)
  return (
    <TeamView selected={isSelected} onClick={() => onClick()}>
      {team.label}
      {heroList}
    </TeamView>
  )
}

type TeamProps = {
  team : TeamType
  onClick? : Function
  isSelected? : boolean
}

function TeamMember({member} : TeamMemberProps) {
  return (
    <div>
      <FontAwesomeIcon icon={faTimesCircle} title="Remove"/>
      <Hero name={member.hero}></Hero>
      <FontAwesomeIcon icon={faThumbsUp} title="Good impact for his team" />
      <FontAwesomeIcon icon={faThumbsDown} title="Not really useful for his team" />
      <FontAwesomeIcon icon={faLink} title="Good synergy with one other member of his team" />
    </div>
  )
}

type TeamMemberProps = {
  member : Member
}



export default Team
