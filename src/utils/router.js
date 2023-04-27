import { parseLocationHash, removeHash } from "./url.js";
import  {FuncReg} from './func-reg.js'

const routes = new FuncReg()


routes.add('home', (kwargs, ...args) => {
  console.log(`home route running with kwargs '${kwargs}' and args '${args}'.`)
})


routes.add('about', (kwargs, ...args) => {
  console.log(`about route running with kwargs '${kwargs}' and args '${args}'.`)
})


console.log(`routes: ${routes.getKeys()}`)


const XXXonhashchange = (event) => {
  if (window.location.hash.length === 0) return
  console.log(`Hash changes to: ${window.location.hash}`)

  const parts = window.location.hash.split('/')

  if (parts.length > 0) {
    //console.log(`parts: ${parts}`)
    //console.log(`parts type: ${typeof parts}`)
    const key = parts[0].slice(1);
    console.log(`key: ${key}`)
  }

  if (parts.length > 1) {
    let params = parts.slice(1)
    console.log(`params: ${params}`)
  }
}

const onhashchange = (event) => {
   const result = parseLocationHash()
   const {key, query: kwargs, params: args = []} = result

   if (key) {
    if (!(routes.get(result.key))) {
      console.log(`Invalid route key: ${key}`)
      return
    }

    routes.run(key, kwargs, ...args)

    return key
    
      
   }
}

window.onhashchange = onhashchange
onhashchange()
