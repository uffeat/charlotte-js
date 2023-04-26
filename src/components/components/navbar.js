import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import * as _nav from "../components/nav.js";
import { getWidthIndex } from "../../libs/bootstrap/utils/breakpoints.js";

class Navbar extends mixin(HTMLElement) {
  #bsCollapse;
  constructor() {
    super();
    this.addShadow({
      sheets: ["bootstrap/core", "bootstrap/custom", "styles/utils"],
      html: "navbar",
    });
    composeSubs(this);

    this.#bsCollapse = new bootstrap.Collapse(this.subs.navbarCollapse);
    this.#bsCollapse.show();

    this.subs.toggleButton.onclick = (event) => {
      this.#bsCollapse.toggle();
    };

    this.onclick = (event) => {
      if (event.target.tagName === "A") {
        this.close();
      }
    };

    this.root.get(`slot:not([name=aux])`).onslotchange = (event) => {
      event.target.assignedNodes().forEach((element) => {
        if (element.tagName === "X-NAV") {
          element.collapsible = true;
          element.subs.nav.classes.add("py-3", "py-md-0");
        }
      });
    };

    this.root.get(`slot[name=aux]`).onslotchange = (event) => {
      event.target.assignedNodes().forEach((element) => {
        if (element.tagName === "X-NAV") {
          element.classes.add("ms-auto");
        }
      });
    };
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


/* EXAMPLE USE OF NAV AND NAVBAR FROM JS

const navbar = X.element.create("x-navbar", {
  parent: document.root,
});

const mainNav = X.element.create("x-nav", {
  parent: navbar,
});

mainNav.links.add("firstLink", { text: "First link" });
mainNav.links.add("secondLink", { text: "Second link" });
mainNav.links.add("thirdLink", { text: "Third link" });
mainNav.links.disable("thirdLink");
mainNav.links.active = 'firstLink'

mainNav.addEventListener("x-active-change", (event) => {
  console.log(`New active link name: ${event.detail.name}`);
  console.log(`New active link: ${event.detail.link.text}`);
});


const auxNav = X.element.create("x-nav", {slot: 'aux',
  parent: navbar,
});
auxNav.links.add("linkA", { text: "Link A" });
auxNav.links.add("linkB", { text: "Link B" });
*/

/* EXAMPLE USE OF NAV AND NAVBAR FROM HTML

const container = X.element.create('div', {parent: document.root, html: `
<x-navbar>
  <x-nav slot="aux">
    <a name="linkA" href="#">Link A</a>
    <a name="linkB" href="#">Link B</a>
  </x-nav>
  <x-nav>
    <a name="link1" href="#">Link 1</a>
    <a name="link2" href="#">Link 2</a>
    <a name="link3" href="#">Link 3</a>
  </x-nav>
</x-navbar>
`})
*/