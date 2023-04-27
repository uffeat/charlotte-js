import * as _roter from '../src/utils/router.js'
import * as _navbar from "../src/components/components/navbar.js";
//import { server } from "../src/utils/server.js";
import {component as auxNav} from '../src/components/app/aux-nav.js'
import {component as mainNav} from '../src/components/app/main-nav.js'




/*
server.get("test");
*/

const navBar = document.getElementById('navbar')
navBar.append(auxNav.updateProps({slot: 'aux'}), mainNav)
