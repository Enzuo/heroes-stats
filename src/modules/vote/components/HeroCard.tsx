import styled from 'styled-components'
import type * as T from '@/common/types/game'

type HeroCardProps = {
  hero : T.Hero
}

function HeroCard ({hero} : HeroCardProps) {

  const imgProps = {
    src : 'img/' + hero.name.replace(/ /g, '_') + '_Hero_Portrait.png',
    alt : hero.name,
    title : hero.name,
  }

  return (
    <Card>
      <ImgWrapper>
        <HeroImg {...imgProps} />
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

const HeroImg = styled.img`
  height:125px;
  width:125px;
  transition: transform .2s;
`

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
  cursor:pointer;

  &:hover ${HeroImg} {
    transform:scale(1.1);
  }

  &:hover ${AnimatedCrownWrapper} {
    display:block;
  }
`

const ImgWrapper = styled.div`
  height:125px;
  width:125px;
`





export default HeroCard
