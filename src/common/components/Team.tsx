import PropTypes from 'prop-types'
import { useState } from 'react'
import Hero from '@/common/components/Hero'

function Team ({team}) {
  const heroList = team.heroes.map((a, i) => <Hero key={i} name={a}></Hero>)
  return (
    <div>
      {heroList}
    </div>
  )
}

type TeamProps = {
  team : Team
}

export default Team
