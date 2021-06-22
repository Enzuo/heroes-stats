import PropTypes from 'prop-types'
import {clone} from '@/common/utils'

function HeroesList ({heroes, sortBy}) {
  
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

  const heroesList = sortedHeroes.map(a => <div>{a.name}</div>)
  
  return (
    <div>{heroesList}</div>
  )
}

HeroesList.propTypes = {
  
}

export default HeroesList
