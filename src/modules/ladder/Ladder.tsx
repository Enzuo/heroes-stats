import styled from 'styled-components'
import Hero from "@/common/components/Hero"
import Panel from '@/common/components/Panel'
import { api, getUserUid } from "@/common/utils"
import { useEffect, useState } from "react"
import HEROES_LIST from '@/common/heroes.json'
import type * as T from '@/common/types/game'

type LadderProps = {

}

function Ladder({ }: LadderProps) {


  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    const getHeroes = async () => {
      var heroesList: { id: number, pickRate: number }[] = await (await api.get('heroes/ladder')).json()
      console.log(heroesList)
      setHeroes(heroesList.map(h => HEROES_LIST.find(a => a.id === h.id)))
    }
    getHeroes()
  }, [])

  return (
    <LadderWrapper>
      <h1>Favorite heroes ladder</h1>
      <Panel>
        <HeroesTiles>
          {heroes.map(h => <Hero key={h.id} hero={h} options={{ style: 'square' }}></Hero>)}
        </HeroesTiles>
      </Panel>
    </LadderWrapper>
  )
}

const LadderWrapper = styled.div`
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




export default Ladder
