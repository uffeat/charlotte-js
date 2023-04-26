import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { EventHandlerMixin } from "../mixins/event-handler.js";

document.addCss(`
.nav-link:hover {
  text-decoration: none;
}
`);

class Nav extends mixin(HTMLElement, EventHandlerMixin) {
  static #ACTIVE_CLASSES = ["active"];
  #links;
  constructor() {
    ////console.log(`Nav constructor invoked.`);
    super();
    this.addShadow({
      sheets: ["bootstrap/core.css", "bootstrap/custom.css"],
      html: `nav`,
    });
    composeSubs(this);

    this.addEventHandler("click", this._onclick);
    this.addEventHandler("slotchange", this._onslotchange, this.subs.slot);
  }

  get links() {
    if (this.#links) return this.#links;

    const componentThis = this;

    class Links {
      get active() {
        const activeLink = componentThis.get("a.active");
        if (!activeLink) return;
        return activeLink.name;
      }

      set active(name) {
        componentThis._setActiveLink(this.get(name));
      }

      add(name, props = {}) {
        if (componentThis.get(`a[name=${name}]`)) {
          throw `Link with name '${name}' already added.`;
        }
        const link = X.element.create("a", props);
        link.name = name;
        componentThis.append(link);
      }

      enable(name) {
        this.get(name).classList.remove("disabled");
      }

      disable(name) {
        this.get(name).classList.add("disabled");
      }

      get(name) {
        const link = componentThis.get(`a[name=${name}]`);
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
    this.#links = new Links();
    return this.#links;
  }

  get collapsible() {
    throw `'collapsible' is write-only.`
  }

  set collapsible(collapsible) {
    this.setAttr('collapsible', collapsible)
    
  }

  get vertical() {
    throw `'vertical' is write-only.`
  }

  set vertical(vertical) {
    this.setAttr('vertical', vertical)
  }

  _onclick(event) {
    if (event.target.tagName === "A") {
      this._setActiveLink(event.target);
    }
  }

  _onslotchange(event) {
    event.target.assignedNodes().forEach((element) => {
      if (element.tagName === "A") {
        element.classes.add("nav-link");
      }
    });
  }

  _setActiveLink(link) {
    const oldActiveLink = this.get("a.active");
    if (oldActiveLink) {
      oldActiveLink.classes.remove(...Nav.#ACTIVE_CLASSES);
      oldActiveLink.setAttr('aria-current', null)
    }

    link.classes.add(...Nav.#ACTIVE_CLASSES);
    link.setAttr('aria-current', 'page')
    this.sendEvent("x-active-change", { link, name: link.name })

  }
}

window.customElements.define("x-nav", Nav);

