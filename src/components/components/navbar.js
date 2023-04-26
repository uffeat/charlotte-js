import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { composeRoot } from "../compositions/root.js";
import { EventHandlerMixin } from "../mixins/event-handler.js";
import * as _nav from '../components/nav.js'


class Navbar extends mixin(HTMLElement, EventHandlerMixin) {
  constructor() {
    ////console.log(`Navbar constructor.`);
    super();
    composeRoot(this, {
      html: "navbar",
    });
    composeSubs(this);

    this.addEventHandler("click", this._onclickMainNav, this.subs.mainNav);
  }

  get auxNav() {
    return this.subs.auxNav
  }

  set auxNav(_) {
      throw `'auxNav' is read-only.`
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
    this.subs.toggleButton.click()
  }

  open() {

  }

  close() {

  }

  _onclickMainNav(event) {
    if (event.target.tagName === "A") {
      this.toggle();
    }
  }
}

window.customElements.define("x-navbar", Navbar);
