import {useState} from 'react'
import SortPicker from '@/common/components/SortPicker'
import Search from '@/common/components/Search'
import HeroesList from '@/common/components/HeroesList'


function HeroPicker ({ heroes }) {

  const [sortBy, setSortBy] = useState()

  return (
    <>
      <SortPicker onChange={setSortBy}></SortPicker>
      <Search></Search>
      <HeroesList heroes={heroes} sortBy={sortBy}></HeroesList>
    </>
  )
}

export default HeroPicker
