export interface Member {
  hero : string
  status? : MemberStatus
}
 
export interface MemberStatus {
  impact : number
  synergy : number
}

export interface TeamType {
  label: string
  color: string
  members: Array<Member>
}

