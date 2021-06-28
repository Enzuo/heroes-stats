import PropTypes from 'prop-types'
import styled from 'styled-components'


type HeroProps = {
  hero : {id : number, name : string},
  onClick?: Function,
}

function Hero ({hero, onClick} : HeroProps) {
  const props = {
    onClick : () => onClick ? onClick(hero) : null,
    src : 'img/' + hero.name.replace(/ /g, '_') + '_Hero_Portrait.png',
    alt : hero.name,
    title : hero.name,
  }
  if(onClick){
    return <ClickableHeroImg {...props} />
  }
  return <HeroImg {...props} />
}


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

export default Hero
