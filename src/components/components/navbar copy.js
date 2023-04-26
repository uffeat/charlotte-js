import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { composeRoot } from "../compositions/root.js";
import { EventHandlerMixin } from "../mixins/event-handler.js";
import * as _nav from '../components/nav.js'
import {getWidthIndex} from '../../libs/bootstrap/utils/breakpoints.js'
import { uid } from "../../utils/uid.js";


class Navbar extends mixin(HTMLElement, EventHandlerMixin) {
  constructor() {
    ////console.log(`Navbar constructor.`);
    super();
    composeRoot(this, {
      html: "navbar",
    });
    composeSubs(this);

    this.subs.navbarCollapse.id = uid.gen('navbarCollapse')
    this.subs.toggleButton.dataset.bsTarget = `#${this.subs.navbarCollapse.id}`

    this.addEventHandler("click", this._onclickMainNav, this.subs.mainNav);
  }

  get auxNav() {
    return this.subs.auxNav
  }

  set auxNav(_) {
      throw `'auxNav' is read-only.`
  }

  get isOpen() {
    if (getWidthIndex() < 3) {
      return this.subs.navbarCollapse.classList.contains('show')
    }
     
  }

  set isOpen(_) {
      throw `'isOpen' is read-only.`
  }

  get mainNav() {
    return this.subs.mainNav
  }

  set mainNav(_) {
      throw `'mainNav' is read-only.`
  }

  connectedCallback() {
    //console.log(`Navbar connectedCallback.`);
    this.addRoot();
  }

  toggle() {
    if (getWidthIndex() < 3) {
      this.subs.toggleButton.click()
    }
    
  }

  open() {
    if (this.isOpen === false) this.subs.toggleButton.click()
  }

  close() {
    if (this.isOpen === true) this.subs.toggleButton.click()

  }

  _onclickMainNav(event) {
    if (event.target.tagName === "A") {
      this.close()
      
    }
  }
}

window.customElements.define("x-navbar", Navbar);
