export interface Member {
  hero   : Hero
  status : MemberStatus
}

export interface Hero {
  id : number
  name : string
}
 
export interface MemberStatus {
  impact? : number
  synergy? : number
}

export interface Team {
  label: string
  color: string
  members: Array<Member>
  isUserTeam?: boolean
}

export interface Game {
  teams : Team[]
  isVictory : boolean
  userUid : string
}

export interface VoteRound {
  userUid? : string
  elapsedTime? : number
  heroes : { id : number, isPicked : boolean }[]
}
