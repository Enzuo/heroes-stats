import { useState } from 'react'
import Hero from '@/common/components/Hero'
import type {TeamType} from '@/common/types/game'


function Team ({team, onClick} : TeamProps) {
  const heroList = team.heroes.map((a, i) => <Hero key={i} name={a}></Hero>)
  return (
    <div onClick={() => onClick()}>
      {team.label}
      {heroList}
    </div>
  )
}

type TeamProps = {
  team : TeamType
  onClick? : Function
}

export default Team
