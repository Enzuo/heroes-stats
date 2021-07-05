import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartBar, faDice, faChessKnight } from '@fortawesome/free-solid-svg-icons'


type MenuProps = {
  
}

function Menu ({} : MenuProps) {

  return (
    <MenuWrapper>
      <Link href="/dashboard">
        <a><FontAwesomeIcon icon={faUser}></FontAwesomeIcon><span>User profile</span></a>
      </Link>
      <Link href="/dashboard">
        <a><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon><span>Global stats</span></a>
      </Link>
      <Link href="/vote">
        <a><FontAwesomeIcon icon={faDice}></FontAwesomeIcon><span>Hero tinder</span></a>
      </Link>
      <Link href="/game">
        <a><FontAwesomeIcon icon={faChessKnight}></FontAwesomeIcon><span>Game history</span></a>
      </Link>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    display:flex;
    align-items:center;
    text-decoration:none;
    color: #5a72d0b0;
    padding:10px;
    font-size: 125%;
  }

  a:hover {
    color:#33a4f6;
    background:#33a4f620;
  }

  a:hover > span {
    width:auto;
    padding:0 10px;
  }

  a > span {
    font-size:10px;
    text-transform:uppercase;
    width:0px;
    padding:0;
    overflow:hidden;
    transition:all 0.3s;
  }
`

export default Menu
