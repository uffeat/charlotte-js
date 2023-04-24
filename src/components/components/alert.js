import {mixin} from '../../utils/mixin.js'
import { ItemMixin } from "../mixins/item.js";


class Alert extends mixin(HTMLElement, ItemMixin) {
  constructor() {
    console.log(`constructor invoked for Alert.`);
    super();
    this.root = X.element.create('div.root')
  }

  connectedCallback() {
    console.log(`connectedCallback invoked for Alert.`);
    if (!(this.contains(this.root))) {this.append(this.root)}
  }

  render() {
    console.log(`render invoked with item: ${this.item}.`);
  }
}






window.customElements.define('x-alert', Alert)