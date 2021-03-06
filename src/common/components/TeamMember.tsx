import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faTimesCircle, faLink } from '@fortawesome/free-solid-svg-icons'
import type {Member} from '@/common/types/game'
import Hero from '@/common/components/Hero'


type TeamMemberProps = {
  member : Member
  isUser : boolean
  onRemove? : () => void
  onStatusChange? : (st : object) => void
}

function TeamMember({member, isUser, onRemove, onStatusChange} : TeamMemberProps) {
  const handleImpactClick = (value) => {
    onStatusChange({impact : value})
  }
  const handleSynergyClick = () => {
    const value = member.status.synergy > 0 ? 0 : 1
    onStatusChange({synergy : value})
  }

  return (
    <StyledTeamMember isUser={isUser}>
      <Hero onRemove={onRemove} hero={member.hero}></Hero>
      <StyledButton selected={member.status.impact === 1} onClick={() => {handleImpactClick(1)}} icon={faThumbsUp} title="Good impact for his team" />
      <StyledButton color="#ff5858" selected={member.status.impact === -1} onClick={() => {handleImpactClick(-1)}} icon={faThumbsDown} title="Not really useful for his team" />
      <StyledButton color="#fde740" selected={member.status.synergy === 1} onClick={() => {handleSynergyClick()}} icon={faLink} title="Good synergy with another member of his team" />
    </StyledTeamMember>
  )
}


const StyledButton = styled(FontAwesomeIcon)`
  color: ${(props) => props.selected ? props.color || '#50ceff' : 'grey'};
  padding:4px;
  cursor:pointer;

  &:hover {
    color:${(props) => props.color || '#50ceff'};
  }
`

const StyledTeamMember = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:2px;
  margin:2px;

  ${(props) => props.isUser ? 'background: #04abff33; box-shadow: 0 0 2px 0px #ffb311;' : ''}
`

export default TeamMember
