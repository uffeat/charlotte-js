// Import all of Bootstrap's JS (for use WITH Parcel)
//import * as bootstrap from 'bootstrap'

// Access Transcrypt transpiled stuff (Parcel):
/*
import * as main from '../../.build/main.js'
main.toast.toast("hello", true)
main.modal.modal()
*/
import * as _alert from '../components/components/alert.js'


const bry_element = X.element.create("x-bry", {parent: document.root})

const alert_1 = X.component.create("x-alert", {item: 42, parent: document.root})
//alert_1.item = 42
