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
        <a><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a>
      </Link>
      <Link href="/dashboard">
        <a><FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon></a>
      </Link>
      <Link href="/vote">
        <a><FontAwesomeIcon icon={faDice}></FontAwesomeIcon></a>
      </Link>
      <Link href="/game">
        <a><FontAwesomeIcon icon={faChessKnight}></FontAwesomeIcon></a>
      </Link>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  text-align:right;

  a {
    display:inline-block;
    text-decoration:none;
    color: #5a72d0b0;
    padding:10px;
    font-size: 125%;
  }

  a:hover {
    color:#33a4f6;
    background:#33a4f620;
  }
`

export default Menu
