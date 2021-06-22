import {useState} from 'react'
import SortPicker from '@/common/components/SortPicker'
import Search from '@/common/components/Search'
import HeroesList from '@/common/components/HeroesList'
import { useFormInput } from '@/common/hooks/basicHooks'


function HeroPicker ({ heroes, onHeroPick}) {

  const [sortBy, setSortBy] = useState()
  const search = useFormInput()

  const handleHeroClick = (name) => {
    onHeroPick(name)
  }

  var filteredHeroes = heroes
  if(search.value){
    filteredHeroes = heroes.filter((a) => {
      const simplifiedName = a.name.toLowerCase()
      const simplifiedSearch = search.value.toLowerCase()
      return simplifiedName.indexOf(simplifiedSearch) >= 0
    })
  }

  return (
    <>
      <SortPicker onChange={setSortBy}></SortPicker>
      <input {...search}></input>
      <HeroesList heroes={filteredHeroes} sortBy={sortBy} onHeroClick={handleHeroClick}></HeroesList>
    </>
  )
}

export default HeroPicker
