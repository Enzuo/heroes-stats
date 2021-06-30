import PropTypes from 'prop-types'
import Hero from '@/common/components/Hero'
import {clone} from '@/common/utils'
import { HERO_SORT } from '../constants'

function HeroesList ({heroes, sortBy, onHeroClick}) {

  var sortedHeroes = heroes
  if(sortBy && sortBy !== HERO_SORT.DEFAULT.key){
    var clonedHeroes = clone(heroes)
    sortedHeroes = clonedHeroes.sort((a, b) => {
      if(sortBy === HERO_SORT.ROLE.key && a.type !== b.type){
        return a.type < b.type ? -1 : 1
      }
      if(sortBy === HERO_SORT.UNIVERSE.key && a.universe !== b.universe){
        return a.universe < b.universe ? -1 : 1
      }
      return a.name < b.name ? -1 : 1
    })
  }

  const heroesList = sortedHeroes.map((a, i) => <Hero key={i} hero={a} onClick={onHeroClick}></Hero>)
  
  return (
    <div>{heroesList}</div>
  )
}

HeroesList.propTypes = {
  
}

export default HeroesList
