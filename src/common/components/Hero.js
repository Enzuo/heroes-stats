import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeroImg = styled.img`
border-radius: 32px;
height:64px;
width:64px;
border:#ffc500 1px solid;
opacity:0.8;
cursor:pointer;
&:hover {
  border:#416cff 1px solid;
  opacity:1;
}
`


function Hero ({name}) {
  return (
    <HeroImg 
      src={'img/' + name.replace(/ /g, '_') + '_Hero_Portrait.png'}
      alt={name}
      title={name}
    />
  )
}

Hero.propTypes = {
  
}

export default Hero
