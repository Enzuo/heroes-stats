import {useState} from 'react'
import styled from 'styled-components'
import { HERO_SORT } from 'src/common/constants'

const sortChoices = Object.values(HERO_SORT)

function SortPicker ({onChange}) {
  const handleClick = () => {
    var newIndex = selectedSort + 1
    if(newIndex >= sortChoices.length){
      newIndex = 0
    }
    setSelectedSort(newIndex)
    onChange(sortChoices[newIndex].key)
  }

  const [selectedSort, setSelectedSort] = useState(0)

  return (
    <Sort index={selectedSort} onClick={handleClick}>{sortChoices[selectedSort].shortlbl}</Sort>
  )
}

const Sort = styled.div`
  cursor:pointer;
  border: 1px solid #39f;
  color: #39f;
  background-color: rgba(0,26,51,.9);
  ${(props) => !props.index ? 'border-color: #666; color:#666;' : '' }

  display: block;
  padding: 10px 0;
  width: 5em;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7em;

  &:hover {
    background-color: #036;
    color: #fff;
  }
`


export default SortPicker
