import styled from 'styled-components'
import type * as T from '@/common/types/game'

type HeroAvatarProps = {
  name : string
  size : number
}

function HeroAvatar ({name, size} : HeroAvatarProps) {

  const imgProps = {
    src : 'img/' + name.replace(/ /g, '_') + '_Hero_Portrait.png',
    alt : name,
    title : name,
    size,
  }

  return (
    <Img {...imgProps}/>
  )
}

const Img = styled.img`
  height:${props => props.size ? props.size : '64'}px;
  width:${props => props.size ? props.size : '64'}px;
`

export default HeroAvatar
