import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


type HeroProps = {
  hero : {id : number, name : string},
  onClick?: Function,
  onRemove?: Function,
}

function Hero ({hero, onClick, onRemove} : HeroProps) {
  const props = {
    src : 'img/' + hero.name.replace(/ /g, '_') + '_Hero_Portrait.png',
    alt : hero.name,
    title : hero.name,
  }
  const handleClick = () => onClick ? onClick(hero) : null

  return (
    <HeroWrapper onClick={handleClick}>
      <HeroImg {...props} />
      {onRemove && <HeroRemoveButton onClick={onRemove} icon={faTimes} title="Remove"/>}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  cursor: ${(props) => props.onClick ? 'pointer' : 'default'};
  display: inline-block;
  position:relative;
`

const HeroRemoveButton = styled(FontAwesomeIcon)`
  position:absolute;
  right:1px;
  top:1px;

  padding: 2px 4px;
  font-size: 12px;
  border-radius: 10px;
  background: black;
  color: white;
  border: white 1px solid;

  @keyframes spin {
    from {
      transform: rotate(-8deg);
    }
  
    to {
      transform: rotate(8deg);
    }
  }
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;

  &:hover {
    animation-name: spin;
  }
`


const HeroImg = styled.img`
border-radius: 32px;
height:64px;
width:64px;
border:#ffc500 1px solid;
&:hover {
  border:#416cff 1px solid;
  opacity:1;
}
`

const ClickableHeroImg = styled(HeroImg)`

`

export default Hero
