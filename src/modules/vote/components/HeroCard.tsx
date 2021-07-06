import styled from 'styled-components'
import HeroAvatar from 'src/common/components/HeroAvatar'
import type * as T from 'src/common/types/game'

type HeroCardProps = {
  hero : T.Hero
  index : number
  onClick : Function
}

function HeroCard ({hero, index, onClick} : HeroCardProps) {

  return (
    <Card index={index} onClick={onClick}>
      <ImgWrapper className="hello">
        <HeroAvatar name={hero.name} size={125} />
      </ImgWrapper>
      <AnimatedCrownWrapper>
        <object type="image/svg+xml" data="svg/stars.svg"></object>
      </AnimatedCrownWrapper>
      <HeroName>
        {hero.name}
      </HeroName> 
    </Card>
  )
}

const AnimatedCrownWrapper = styled.div`
  display:none;
  position: absolute;
  top: -35px;
  pointer-events: none;
  width:100%;

  & > object {
    width:100%;
  }
`

const HeroName = styled.div`
margin:20px 10px;
`

const ImgWrapper = styled.div`
  height:125px;
  width:125px;
`

const Card = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  background: linear-gradient(
    180deg, 
    rgba(74,76,124,1) 0%,
    rgba(74,76,124,1) 35%,
    rgba(243,0,255,0) 100%
  );
  min-height:200px;
  width:125px;
  cursor:pointer;

  &:hover {
    z-index:10;
  }

  &:hover ${ImgWrapper} {
    transition: transform .2s;
    transform:scale(1.1);
    box-shadow: 0px 0px 5px #000;
  }

  &:hover ${AnimatedCrownWrapper} {
    display:block;
  }

  opacity:0;
  animation: pop-in .5s ease-out forwards;
  ${(props) => 'animation-delay:0.'+props.index+'s;'}

  @keyframes pop-in{
    from {
      opacity:0;
      transform:translateY(300px);
    }
    to {
      opacity:1;
      transform:translateY(0px);
    }
  }
`





export default HeroCard
