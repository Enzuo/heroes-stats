import PropTypes from 'prop-types'

function Hero ({name}) {
  return (
    <img src={'img/' + name + '_Hero_Portrait.png'}/>
  )
}

Hero.propTypes = {
  
}

export default Hero
