import heroesList from '@/common/heroes.json'
import HeroPicker from '@/common/components/HeroPicker'

function Game () { 

  console.log(heroesList)
  return (
    <HeroPicker heroes={heroesList}></HeroPicker>
  )
}

export default Game
