import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { NavLinks } from "../compositions/nav-links.js";

document.addCss(`
.nav-link:hover {
  text-decoration: none;
}
`);

class Nav extends mixin(HTMLElement) {
  static #ACTIVE_CLASSES = ["active"];
  #links;
  constructor() {
    super();
    this.addShadow({
      sheets: ["bootstrap/core", "bootstrap/custom", "styles/utils"],
      html: "nav",
    });
    composeSubs(this);

    this.subs.slot.onslotchange = (event) => {
      event.target.assignedNodes().forEach((element) => {
        if (element.tagName === "A") {
          element.classes.add("nav-link");
        }
      });
    };

    this.onclick = (event) => {
      if (event.target.tagName === "A") {
        this.setActiveLink(event.target);
      }
    };
  }

  get links() {
    if (this.#links) return this.#links;
    this.#links = new NavLinks(this);
    return this.#links;
  }

  set links(_) {
    throw `'links' is read-only.`;
  }

  get collapsible() {
    throw `'collapsible' is write-only.`;
  }

  set collapsible(collapsible) {
    this.setAttr("collapsible", collapsible);
  }

  get vertical() {
    throw `'vertical' is write-only.`;
  }

  set vertical(vertical) {
    this.setAttr("vertical", vertical);
  }

  setActiveLink(link) {
    const oldActiveLink = this.get("a.active");
    if (oldActiveLink) {
      oldActiveLink.classes.remove(...Nav.#ACTIVE_CLASSES);
      oldActiveLink.setAttr("aria-current", null);
    }
    link.classes.add(...Nav.#ACTIVE_CLASSES);
    link.setAttr("aria-current", "page");
    this.sendEvent("x-active-change", { link, name: link.name });
  }
}

window.customElements.define("x-nav", Nav);
