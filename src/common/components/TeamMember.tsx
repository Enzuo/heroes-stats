import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faTimesCircle, faLink } from '@fortawesome/free-solid-svg-icons'
import type {Member} from '@/common/types/game'
import Hero from '@/common/components/Hero'


type TeamMemberProps = {
  member : Member
  onRemove? : (Member) => void
  onStatusChange? : (object) => void
}

function TeamMember({member, onRemove, onStatusChange} : TeamMemberProps) {
  const handleImpactClick = (value) => {
    onStatusChange({impact : value})
  }
  const handleSynergyClick = () => {
    const value = member.status.synergy > 0 ? 0 : 1
    onStatusChange({synergy : value})
  }

  return (
    <StyledTeamMember>
      <StyledButton onClick={() => {onRemove(member)}} icon={faTimesCircle} title="Remove"/>
      <Hero name={member.hero}></Hero>
      <StyledButton selected={member.status.impact === 1} onClick={() => {handleImpactClick(1)}} icon={faThumbsUp} title="Good impact for his team" />
      <StyledButton selected={member.status.impact === -1} onClick={() => {handleImpactClick(-1)}} icon={faThumbsDown} title="Not really useful for his team" />
      <StyledButton selected={member.status.synergy === 1} onClick={() => {handleSynergyClick()}} icon={faLink} title="Good synergy with one other member of his team" />
    </StyledTeamMember>
  )
}

const StyledButton = styled(FontAwesomeIcon)`
  color: ${(props) => props.selected ? 'blue' : 'grey'};
`

const StyledTeamMember = styled.div`
  display:flex;
  flex-direction:column;
`

export default TeamMember
