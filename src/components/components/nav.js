import { mixin } from "../../utils/mixin.js";
import { composeSubs } from "../compositions/subs.js";
import { composeRoot } from "../compositions/root.js";
import { setStyle } from "../../libs/bootstrap/utils/classes.js";

import { assets } from "../../assets/_assets.js";

class Nav extends mixin(HTMLElement) {
  constructor() {
    ////console.log(`Nav constructor invoked.`);
    super();
    //this.addShadow({sheets: ["bootstrap/core.css", "bootstrap/custom.css"], html: `nav`})

    this.addShadow()
    this.shadowRoot.innerHTML = `<button class="btn">Button</button>`
    const cssText2 = `
    button.btn {
      color: pink;
    }
    `

    const cssText = assets['bootstrap/core.css']

    console.log(cssText)

    const sheet = new CSSStyleSheet();
    //sheet.replaceSync(cssText);
    sheet.replace(cssText);
    this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, sheet];


    //composeSubs(this);
    // Set defaults.
    
  }

  connectedCallback() {
    //console.log(`connectedCallback invoked for Nav.`);
    //this.addRoot();
  }


}

window.customElements.define("x-nav", Nav);
