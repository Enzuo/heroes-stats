import styled from 'styled-components'
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
      var heroesList : {id:number, rating:number}[] = await (await api.get('heroes/list', {userUid : getUserUid()})).json()
      setHeroes(heroesList.map(h => HEROES_LIST.find(a => a.id === h.id)))
    } 
    getHeroes()
  }, [])

  return (
    <div>
      <h1>Welcome</h1>
      <HeroesLadder>
        <h2>My heroes</h2>
        {heroes.map(h => <Hero key={h.id} hero={h} options={{style:'square'}}></Hero>)}
      </HeroesLadder>
    </div>
  )
}

const HeroesLadder = styled.div`
  display:flex;
  flex-direction:column;
`


export default Dashboard
