import { mixin } from "../../utils/mixin.js";
import { ItemMixin } from "../mixins/item.js";
import { composeSubs } from "../compositions/subs.js";
import { composeRoot } from "../compositions/root.js";
import { setStyle } from "../../libs/bootstrap/utils/classes.js";

class Alert extends mixin(HTMLElement) {
  #styleName;
  constructor() {
    ////console.log(`Alert constructor invoked.`);
    super();
    composeRoot(this, { html: "alert", cssClasses: ["alert"] });
    composeSubs(this);
    // Set defaults.
    this.styleName = "info";
  }

  connectedCallback() {
    console.log(`connectedCallback invoked for Alert.`);
    this.addRoot();
  }

  get content() {
    return this.subs.content.text;
  }

  set content(content) {
    console.log(`content setter got: ${content}`)
    this.subs.content.text = content
  }



  get styleName() {
    return this.#styleName;
  }

  set styleName(styleName) {
    this.#styleName = styleName;
    setStyle(this.root, "alert", styleName);
  }
}

window.customElements.define("x-alert", Alert);
