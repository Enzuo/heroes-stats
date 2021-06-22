import PropTypes from 'prop-types'
import Hero from '@/common/components/Hero'
import {clone} from '@/common/utils'

function HeroesList ({heroes, sortBy}) {

  const handleClick = () => {

  }
  
  var sortedHeroes = heroes
  if(sortBy && sortBy !== 'default'){
    var clonedHeroes = clone(heroes)
    sortedHeroes = clonedHeroes.sort((a, b) => {
      if(sortBy === 'name'){
        return a.name < b.name ? -1 : 1
      }
      if(sortBy === 'role'){
        if(a.type === b.type){
          return a.name < b.name ? -1 : 1
        }
        return a.type < b.type ? -1 : 1
      }
    })
  }

  const heroesList = sortedHeroes.map((a, i) => <Hero key={i} name={a.name} onClick={handleClick}></Hero>)
  
  return (
    <div>{heroesList}</div>
  )
}

HeroesList.propTypes = {
  
}

export default HeroesList
