import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { EventHandlerMixin } from "../mixins/event-handler.js";
import * as _nav from "../components/nav.js";
import { getWidthIndex } from "../../libs/bootstrap/utils/breakpoints.js";
import { NavLinks } from "../compositions/nav-links.js";

class Navbar extends mixin(HTMLElement, EventHandlerMixin) {
  #bsCollapse;
  #links;
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

    this.aux = X.element.create('div.ms-auto', {slot: 'aux'})
    this.main = X.element.create('x-nav.ps-3')
    this.main.collapsible = true

    
    this.root.get('slot:not([name=aux])').onslotchange = (event) => {
      event.target.assignedNodes().forEach((element) => {
        if (element.tagName === "A") {
          this.main.append(element)
        }
      });
    }
    
    this.root.get('slot[name=aux]').onslotchange = (event) => {
      event.target.assignedNodes().forEach((element) => {
        if (element.tagName === "A") {
          this.aux.append(element)
        }
      });
    }

    /*
    this.subs.mainNav.onclick = (event) => {
      if (event.target.tagName === "A") {
        this.close();
      }
    };
    */
  }

  connectedCallback() {
    if (!this.contains(this.aux)) {
      this.append(this.aux)
    }
    if (!this.contains(this.main)) {
      this.append(this.main)
    }
   
  }

  get links() {
    if (this.#links) return this.#links;
    this.#links = new NavLinks(this);
    return this.#links;
  }

  set links(_) {
    throw `'links' is read-only.`;
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

  setActiveLink(link) {
   
  }
}
window.customElements.define("x-navbar", Navbar);
