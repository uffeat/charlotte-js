import {mixin} from '../../utils/mixin.js'
import { ItemMixin } from "../mixins/item.js";
import { RootMixin } from '../mixins/root.js';
import { SubsMixin } from '../mixins/subs.js';


class Alert extends mixin(HTMLElement, RootMixin, SubsMixin, ItemMixin) {
  constructor() {
    console.log(`constructor invoked for Alert.`);
    super();
    this.createRoot({html: 'alert'})
    this.buildSubs()
    this.subs.headline.text = "Awesome"
  }

  connectedCallback() {
    console.log(`connectedCallback invoked for Alert.`);
    this.addRoot()
  }

  render() {
    console.log(`render invoked with item: ${this.item}.`);
  }
}






window.customElements.define('x-alert', Alert)