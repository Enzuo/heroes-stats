import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faTimesCircle, faLink } from '@fortawesome/free-solid-svg-icons'
import type {Member} from '@/common/types/game'
import Hero from '@/common/components/Hero'


const StyledTeamMember = styled.div`
  display:flex;
  flex-direction:column;
`


function TeamMember({member} : TeamMemberProps) {
  return (
    <StyledTeamMember>
      <FontAwesomeIcon icon={faTimesCircle} title="Remove"/>
      <Hero name={member.hero}></Hero>
      <FontAwesomeIcon icon={faThumbsUp} title="Good impact for his team" />
      <FontAwesomeIcon icon={faThumbsDown} title="Not really useful for his team" />
      <FontAwesomeIcon icon={faLink} title="Good synergy with one other member of his team" />
    </StyledTeamMember>
  )
}

type TeamMemberProps = {
  member : Member
}

export default TeamMember
