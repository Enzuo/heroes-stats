import {useState} from 'react'
import styled from 'styled-components'
import { HERO_SORT } from '@/common/constants'

function SortPicker ({onChange}) {
  const handleClick = () => {
    var newIndex = selectedSort + 1
    if(newIndex >= HERO_SORT.length){
      newIndex = 0
    }
    setSelectedSort(newIndex)
    onChange(HERO_SORT[newIndex])
  }

  const [selectedSort, setSelectedSort] = useState(0)

  return (
    <Sort onClick={handleClick}>{HERO_SORT[selectedSort]}</Sort>
  )
}

const Sort = styled.div`
  border: 1px solid #39f;
  color: #39f;
  background-color: rgba(0,26,51,.9);

  display: block;
  padding: 10px 0;
  width: 5em;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7em;
`


export default SortPicker
