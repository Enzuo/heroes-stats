import PropTypes from 'prop-types'
import styled from 'styled-components'


const HeroImg = styled.img`
border-radius: 32px;
height:64px;
width:64px;
border:#ffc500 1px solid;
`

const ClickableHeroImg = styled(HeroImg)`
opacity:0.8;
cursor:pointer;
&:hover {
  border:#416cff 1px solid;
  opacity:1;
}
`


function Hero ({name, onClick} : HeroProps) {
  const props = {
    onClick : () => onClick ? onClick(name) : null,
    src : 'img/' + name.replace(/ /g, '_') + '_Hero_Portrait.png',
    alt : name,
    title : name,
  }
  if(onClick){
    return <ClickableHeroImg {...props} />
  }
  return <HeroImg {...props} />
}

type HeroProps = {
  name : string,
  onClick?: Function,
}

export default Hero