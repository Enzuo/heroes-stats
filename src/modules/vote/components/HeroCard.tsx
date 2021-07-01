import type * as T from '@/common/types/game'

type HeroCardProps = {
  hero : T.Hero
}

function HeroCard ({hero} : HeroCardProps) {

  return (
    <div>{hero.name}</div>
  )
}

export default HeroCard
