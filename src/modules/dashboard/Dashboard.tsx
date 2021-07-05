import styled from 'styled-components'
import Hero from "@/common/components/Hero"
import { api, getUserUid } from "@/common/utils"
import { useEffect, useState } from "react"
import HEROES_LIST from '@/common/heroes.json'
import type * as T from '@/common/types/game'

type DashboardProps = {

}

function Dashboard({ }: DashboardProps) {


  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    const getHeroes = async () => {
      var heroesList: { id: number, rating: number }[] = await (await api.get('heroes/list', { userUid: getUserUid() })).json()
      setHeroes(heroesList.map(h => HEROES_LIST.find(a => a.id === h.id)))
    }
    getHeroes()
  }, [])

  const topHeroes = heroes.slice(0, 15)
  const worstHeroes = heroes.slice(heroes.length - 10, heroes.length)

  return (
    <DashboardWrapper>
      <h1>Welcome to your stats dashboard</h1>
      <Panel>
        <h2>My favorites heroes</h2>
        <HeroesTiles>
          {topHeroes.map(h => <Hero key={h.id} hero={h} options={{ style: 'square' }}></Hero>)}
        </HeroesTiles>
      </Panel>
      <Panel>
        <h2>My least liked heroes</h2>
        <HeroesTiles>
          {worstHeroes.map(h => <Hero key={h.id} hero={h} options={{ style: 'square' }}></Hero>)}
        </HeroesTiles>
      </Panel>
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.div`
  margin:20px;

  h1 {
    font-size:1.2em;
    color:#8da5d2;
  }
`

const HeroesTiles = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  max-width:360px;
`

const Panel = styled.div`
  background:#000e27;
  width: fit-content;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0px 0px 2px #00276d;

  h2 {
    margin-bottom:15px;
    color:#3a6ab7;
  }
`


export default Dashboard
