import PropTypes from 'prop-types'
import {clone} from '@/common/utils'

function HeroesList ({heroes, sortBy}) {
  
  var sortedHeroes = heroes
  if(sortBy && sortBy !== 'default'){
    console.log('sorting by', sortBy)
    var clonedHeroes = clone(heroes)
    sortedHeroes = clonedHeroes.sort((a, b) => {
      console.log('a, b', a.name,b.name, a.name < b.name)
      return a.name < b.name ? -1 : 1
    })
  }

  const heroesList = sortedHeroes.map(a => <div>{a.name}</div>)
  
  return (
    <div>{heroesList}</div>
  )
}

HeroesList.propTypes = {
  
}

export default HeroesList
