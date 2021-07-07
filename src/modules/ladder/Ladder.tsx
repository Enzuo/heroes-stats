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
      setHeroes(heroesList.map(h => { 
        return { hero : HEROES_LIST.find(a => a.id === h.id), ...h }
      }))
    }
    getHeroes()
  }, [])

  return (
    <LadderWrapper>
      <h1>Favorite heroes ladder</h1>
      <Panel>
        <HeroesTiles>
          {heroes.map(h => (
            <HeroTile key={h.id}>
              <Hero hero={h.hero} options={{ style: 'square' }}></Hero>
              <HeroPickRate r={h.pickRate}>{Math.floor(h.pickRate * 1000) / 10} %</HeroPickRate>
            </HeroTile>
          ))}
        </HeroesTiles>
      </Panel>
    </LadderWrapper>
  )
}

const LadderWrapper = styled.div`
  margin:20px;

  display:flex;
  flex-direction: column;
  align-items:center;

  h1 {
    font-size:1.2em;
    color:#8da5d2;
  }
`

const HeroesTiles = styled.div`
  display:flex;
  flex-direction:column;
  max-width:360px;
`

const HeroTile = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
`

const HeroPickRate = styled.div`
  padding:0 20px;
  color: ${props => 'hsl(205deg '+(91 * props.r)+'% 58% / '+(100*props.r)+'%)' };
  font-weight: bold;
  font-size: 18px;
`




export default Ladder
