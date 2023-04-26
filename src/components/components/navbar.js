import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { EventHandlerMixin } from "../mixins/event-handler.js";
import * as _nav from "../components/nav.js";
import { getWidthIndex } from "../../libs/bootstrap/utils/breakpoints.js";

class Navbar extends mixin(HTMLElement, EventHandlerMixin) {
  #bsCollapse;
  constructor() {
    super();
    this.addShadow({
      sheets: ["bootstrap/core.css", "bootstrap/custom.css"],
      html: "navbar",
    });
    composeSubs(this);

    this.#bsCollapse = new bootstrap.Collapse(this.subs.navbarCollapse);
    this.#bsCollapse.show();

    this.subs.toggleButton.onclick = (event) => {
      this.#bsCollapse.toggle();
    };
    
    this.subs.mainNav.onclick = (event) => {
      if (event.target.tagName === "A") {
        this.close();
      }
    };
  }

  get auxNav() {
    return this.subs.auxNav;
  }

  set auxNav(_) {
    throw `'auxNav' is read-only.`;
  }

  get mainNav() {
    return this.subs.mainNav;
  }

  set mainNav(_) {
    throw `'mainNav' is read-only.`;
  }

  toggle() {
    if (getWidthIndex() < 3) {
      this.#bsCollapse.toggle();
    }
  }

  open() {
    if (
      getWidthIndex() < 3 &&
      !this.subs.navbarCollapse.classList.contains("show")
    ) {
      this.#bsCollapse.show();
    }
  }

  close() {
    if (
      getWidthIndex() < 3 &&
      this.subs.navbarCollapse.classList.contains("show")
    ) {
      this.#bsCollapse.hide();
    }
  }
}
window.customElements.define("x-navbar", Navbar);
