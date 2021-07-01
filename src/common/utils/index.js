import { v4 as uuidv4 } from 'uuid'


export function clone(obj){
  return JSON.parse(JSON.stringify(obj))
}

export function getUserUid() {
  var userId = window.localStorage.getItem('userId')
  if(!userId){
    userId = uuidv4()
    window.localStorage.setItem('userId', userId)
  }
  return userId
}

export const api = {
  post : (api, data) => { 
    return fetch('/api/'+api , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}
