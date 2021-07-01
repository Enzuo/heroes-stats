import Hero from "@/common/components/Hero"
import { api, getUserUid } from "@/common/utils"
import { useEffect, useState } from "react"
import HEROES_LIST from '@/common/heroes.json'
import type * as T from '@/common/types/game'

type DashboardProps = {
  
}

function Dashboard ({} : DashboardProps) {


  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    const getHeroes = async () => {
      var heroesList : number[] = await (await api.get('heroes/list', {userUid : getUserUid()})).json()
      setHeroes(heroesList.map(id => HEROES_LIST.find(a => a.id === id)))
    } 
    getHeroes()
  }, [])

  return (
    <div>
      {heroes.map(h => <Hero key={h.id} hero={h}></Hero>)}

    </div>
  )
}

export default Dashboard
