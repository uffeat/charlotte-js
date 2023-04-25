
import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { composeRoot } from "../compositions/root.js";

class Nav extends mixin(HTMLElement) {
  constructor() {
    ////console.log(`Nav constructor invoked.`);
    super();
    composeRoot(this, { tag: "nav", cssClasses: ["nav", 'flex-column', 'nav-pills'] });
  }

  connectedCallback() {
    //console.log(`connectedCallback invoked for Nav.`);
    this.addRoot();
  }
}

window.customElements.define("x-nav", Nav);

