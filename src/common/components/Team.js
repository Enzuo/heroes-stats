import PropTypes from 'prop-types'
import { useState } from 'react'
import Hero from '@/common/components/Hero'

function Team ({heroes}) {
  const heroList = heroes.map((a, i) => <Hero key={i} name={a}></Hero>)
  return (
    <div>
      {heroList}
    </div>
  )
}

Team.propTypes = {
  
}

export default Team
