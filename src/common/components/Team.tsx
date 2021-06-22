import { useState } from 'react'
import Hero from '@/common/components/Hero'
import type {TeamType} from '@/common/types/game'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


function Team ({team, onClick} : TeamProps) {
  const heroList = team.heroes.map((a, i) => <TeamMember key={i} member={a}></TeamMember>)
  return (
    <div onClick={() => onClick()}>
      {team.label}
      {heroList}
    </div>
  )
}

function TeamMember({member}) {
  return (
    <div>
      <FontAwesomeIcon icon={faTimesCircle} />
      <Hero name={member}></Hero>
      <FontAwesomeIcon icon={faThumbsUp} />
      <FontAwesomeIcon icon={faThumbsDown} />
    </div>
  )
}

type TeamProps = {
  team : TeamType
  onClick? : Function
}

export default Team
