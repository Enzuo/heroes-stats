export interface Member {
  hero : string
  status : MemberStatus
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
