import styled from 'styled-components'
import HeroCard from '@/modules/vote/components/HeroCard'
import type * as T from '@/common/types/game'


type VoteRoundProps = {
  heroes : T.Hero[]
  onVote : (h: T.Hero) => any
}

function VoteRound ({heroes, onVote} : VoteRoundProps) {

  return (
    <RoundWrapper>
      <Legend>Pick your favorite hero ❤</Legend>
      <HeroesList>
        {heroes.map((h, i) => <HeroCard key={h.id + '' + i} index={i} hero={h} onClick={() => onVote(h)}></HeroCard>)}
      </HeroesList>
    </RoundWrapper>
  )
}

// Layout
const RoundWrapper = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  justify-content: center;
  overflow:hidden;
`

const Legend = styled.span`
  text-align:center
`

const HeroesList = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  margin:50px 0;
`


export default VoteRound
