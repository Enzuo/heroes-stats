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
}

export interface Game {
  teams : Team[]
}
