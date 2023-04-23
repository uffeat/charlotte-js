// Import all of Bootstrap's JS (for use WITH Parcel)
//import * as bootstrap from 'bootstrap'

// Access Transcrypt transpiled stuff (Parcel):
/*
import * as main from '../../.build/main.js'
main.toast.toast("hello", true)
main.modal.modal()
*/
import * as _alert from '../components/components/alert.js'

const test_button_1 = document.element.create("button.btn.btn-primary", {
  text: "Test 1",
  parent: document.root,
});


const bry_comp = document.element.create("x-bry", {parent: document.root})

const alert_1 = document.element.create("x-alert", {parent: document.root})
alert_1.item = 42