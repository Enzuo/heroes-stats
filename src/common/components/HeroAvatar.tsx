import styled from 'styled-components'
import Image from 'next/image'
import type * as T from '@/common/types/game'

type HeroAvatarProps = {
  name : string
  size? : number
}

function HeroAvatar ({name, size} : HeroAvatarProps) {

  const imgProps = {
    src : '/img/' + name.replace(/ /g, '_').replace(/'|\./g, '') + '_Hero_Portrait.png',
    alt : name,
    title : name,
    width: size ? size : 64,
    height: size ? size : 64,
  }
  size = size ? size : 64
  var className = name.replace(/ /g, '_').replace(/'|\./g, '')
  className += '_' + size

  return (
    <div title={name} className={className} />
  )
}

const Img = styled.img`
  height:${props => props.size ? props.size : '64'}px;
  width:${props => props.size ? props.size : '64'}px;
`

export default HeroAvatar
