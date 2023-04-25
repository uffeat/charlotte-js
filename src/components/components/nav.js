import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";

const cssText = `
.nav-link:hover {
  text-decoration: none;
}
`;

document.addCss(cssText);

/** Composition for controlling nav links by name. */
class Links {
  #component;
  constructor(component) {
    this.#component = component;
  }

  get active() {
    const activeLink = this.#component.get("a.active");
    if (!activeLink) return;
    return activeLink.name;
  }

  set active(name) {
    this.#component._setActiveLink(this.get(name));
  }

  add(name, props = {}) {
    if (this.#component.get(`a[name=${name}]`)) {
      throw `A link with name '${name}' already added.`;
    }
    const link = X.element.create("a", props);
    link.name = name;
    this.#component.append(link);
  }

  enable(name) {
    this.get(name).classList.remove("disabled");
  }

  disable(name) {
    this.get(name).classList.add("disabled");
  }

  get(name) {
    const link = this.#component.get(`a[name=${name}]`);
    if (!link) {
      throw `Invalid name: ${name}`;
    }
    return link;
  }

  hide(name) {
    this.get(name).hide();
  }

  show(name) {
    this.get(name).show();
  }
}

class Nav extends mixin(HTMLElement) {
  constructor() {
    ////console.log(`Nav constructor invoked.`);
    super();
    this.addShadow({
      sheets: ["bootstrap/core.css", "bootstrap/custom.css"],
      html: `nav`,
    });

    composeSubs(this);

    this.subs.slot.addEventListener("slotchange", (event) => {
      event.target.assignedNodes().forEach((link) => {
        link.classList.add("nav-link");

        if (!link._clickHandlerAdded) {
          link.addEventListener("click", (event) => {
            this._setActiveLink(link);
          });

          link._clickHandlerAdded = true;
        }
      });
    });

    this.links = new Links(this);
  }

  get vertical() {
    this.subs.nav.classList.contains("flex-column");
  }

  set vertical(vertical) {
    this.subs.nav.classList[vertical ? "add" : "remove"]("flex-column");
  }

  _setActiveLink(link) {
    const ACTIVE_CLASSES = ["active", "fw-semibold"];

    const oldActiveLink = this.get("a.active");
    if (oldActiveLink) {
      oldActiveLink.removeClasses(...ACTIVE_CLASSES);
    }

    link.addClasses(...ACTIVE_CLASSES);

    this.dispatchEvent(
      new CustomEvent("x-active-change", { detail: { link, name: link.name } })
    );
  }
}

window.customElements.define("x-nav", Nav);
