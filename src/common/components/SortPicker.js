import PropTypes from 'prop-types'

import { HERO_SORT } from '@/common/constants'

function SortPicker ({onChange}) {
  const handleClick = (sortName) => {
    onChange(sortName)
  }

  const choices = HERO_SORT.map(
    (a, index) => <SortChoice key={index} sort={a} onClick={handleClick}></SortChoice>
  )
  return (
    <div>{choices}</div>
  )
}

function SortChoice ({sort, onClick}) {
  return (
    <div onClick={() => onClick(sort)}>
      {sort}
    </div>
  )
}

SortPicker.propTypes = {
  
}

export default SortPicker
