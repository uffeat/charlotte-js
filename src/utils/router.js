import { genSearchObj } from "./url.js";
import  {FuncReg} from './func-reg.js'

const routes = new FuncReg()

const onhashchange = (event) => {
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

window.onhashchange = onhashchange
onhashchange()