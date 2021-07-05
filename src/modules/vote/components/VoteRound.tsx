import styled from 'styled-components'
import HeroCard from '@/modules/vote/components/HeroCard'
import type * as T from '@/common/types/game'


type VoteRoundProps = {
  heroes : T.Hero[]
  onVote : (h: T.Hero) => any
}

function VoteRound ({heroes, onVote} : VoteRoundProps) {

  return (
    <div>
      Pick your favorite hero ❤️
      <HeroesList>
        {heroes.map((h, i) => <HeroCard key={h.id} index={i} hero={h} onClick={() => onVote(h)}></HeroCard>)}
      </HeroesList>
    </div>
  )
}

// Layout
const HeroesList = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  margin:50px;
`


export default VoteRound
