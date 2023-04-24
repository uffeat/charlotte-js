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
    //console.log(`connectedCallback invoked for Alert.`);
    this.addRoot();
  }

  get content() {
    return this.subs.content.text;
  }

  set content(content) {
    this.subs.content.text = content;
  }

  get headline() {
    return this.subs.headline.text;
  }

  set headline(headline) {
    this.subs.headline.text = headline;
  }

  get styleName() {
    return this.#styleName;
  }

  set styleName(styleName) {
    this.#styleName = styleName;
    setStyle(this.root, "alert", styleName);
  }

  showAlert(content, kwargs = {}) {
    const [headline, styleName] = X.getArgs(kwargs, "headline", "styleName");
    this.content = content;
    if (headline) this.headline = headline;
    if (styleName) this.styleName = styleName;
    this.show();
  }
}

window.customElements.define("x-alert", Alert);
