import Link from 'next/link'
import { useRouter } from "next/router"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartBar, faDice, faChessKnight } from '@fortawesome/free-solid-svg-icons'


type MenuProps = {
  
}

function Menu ({} : MenuProps) {


  return (
    <MenuWrapper>
      <MenuLink href="/dashboard" icon={faUser} label="User profile"></MenuLink>
      <MenuLink href="/dashboard" icon={faChartBar} label="Global stats"></MenuLink>
      <MenuLink href="/vote" icon={faDice} label="Hero tinder"></MenuLink>
      <MenuLink href="/game" icon={faChessKnight} label="Game history"></MenuLink>
    </MenuWrapper>
  )
}

function MenuLink ({href, icon, label}) {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <MenuHyperLink>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        <span>{label}</span>
        <ActiveDot active={router.pathname == href}></ActiveDot>
      </MenuHyperLink>
    </Link>
  )
}

const ActiveDot = styled.div`
  position:absolute;
  bottom:-5px;
  width:4px;
  height:4px;
  background:#5a72d0b0;
  left:45%;
  border-radius:2px;
  display:${props => props.active ? 'block' : 'none'};
`

const MenuHyperLink = styled.a`
  position: relative;
  display:flex;
  align-items:center;
  text-decoration:none;
  color: #5a72d0b0;
  padding:10px;
  font-size: 125%;

  /* ${props => props.active ? 'border-bottom:2px solid #5a72d0b0' : ''}; */


  &:hover {
    color:#33a4f6;
    background:#33a4f620;
  }

  &:hover > span {
    width:auto;
    padding:0 10px;
  }

  & > span {
    font-size:10px;
    text-transform:uppercase;
    width:0px;
    padding:0;
    overflow:hidden;
    transition:all 0.3s;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default Menu
