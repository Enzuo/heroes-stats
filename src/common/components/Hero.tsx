import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


type HeroProps = {
  hero : {id : number, name : string},
  options?: Object,
  onClick?: Function,
  onRemove?: Function,
}

function Hero ({hero, options, onClick, onRemove} : HeroProps) {
  const props = {
    src : 'img/' + hero.name.replace(/ /g, '_') + '_Hero_Portrait.png',
    alt : hero.name,
    title : hero.name,
    options : options,
  }
  const handleClick = () => onClick ? onClick(hero) : null

  return (
    <HeroWrapper onClick={handleClick}>
      <ImgWrapper options={options}>
        <HeroImg {...props} />
      </ImgWrapper>
      {onRemove && <HeroRemoveButton onClick={onRemove} icon={faTimes} title="Remove"/>}
    </HeroWrapper>
  )
}




const ImgWrapper = styled.div`
  border-radius: ${(props) => props.options?.style === 'square' ? '20%' : '50%'};
  height:64px;
  width:64px;

  box-shadow: 0 0 6px 1px rgb(0 0 0 / 60%);
  border:2px solid rgba(51,153,255,.4);
  overflow:hidden;

  &:hover {
    border-color: rgba(51,128,204,.8);
  }
  
  &:after {
    position:absolute;
    content: " ";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    display:block;
    pointer-events: none;
  }
  &:hover:after {
    background-color: rgba(0,128,255,.1);
    background-image: linear-gradient(
      0deg
      ,rgba(71,153,235,.6) 0,rgba(71,153,235,0) 40%);
  }
`

const HeroImg = styled.img`
  height:64px;
  width:64px;
  transition: transform .2s;
`

const HeroRemoveButton = styled(FontAwesomeIcon)`
  display:none;
  position:absolute;
  right:1px;
  top:1px;

  padding: 2px 4px;
  font-size: 12px;
  border-radius: 50%;
  background: black;
  color: white;
  border: white 1px solid;

  cursor:pointer;

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

const HeroWrapper = styled.div`
  height: 68px;
  width: 68px;
  cursor: ${(props) => props.onClick ? 'pointer' : 'default'};
  display: inline-block;
  margin: 2px;

  position:relative;

  &:hover ${HeroImg} {
    transform: scale(1.1) perspective(1px);
  }

  &:hover ${HeroRemoveButton} {
    display:block;
  }
  
`


export default Hero
