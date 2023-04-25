import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { composeRoot } from "../compositions/root.js";

class Navbar extends mixin(HTMLElement) {
  constructor() {
    ////console.log(`Nav constructor invoked.`);
    super();
    composeRoot(this, { html: 'navbar', tag: "nav", cssClasses: ["navbar-expand-lg"] });
  }

  connectedCallback() {
    //console.log(`connectedCallback invoked for Nav.`);
    this.addRoot();
  }
}

window.customElements.define("x-navbar", Nav);

