import { v4 as uuidv4 } from 'uuid'


export function clone(obj){
  return JSON.parse(JSON.stringify(obj))
}

export function uniqueRandom(length, nb = 3){
  var res=[]
  while(res.length < nb){
    var randomNumber = Math.floor(Math.random()*length);
    if(res.indexOf(randomNumber) === -1){
      res.push(randomNumber)
    }
  }
  return res
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
  },
  get : (api, params) => { 
    var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    return fetch('/api/'+api+'?'+queryString , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}
