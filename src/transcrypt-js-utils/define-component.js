// Helper for creating Python-based web components.
import { assets } from "../assets/assets.js";

const define_component = (tag, PyComponent, htmlPath) => {
  const trojan = (element) => {
    const descriptors = Object.getOwnPropertyDescriptors(PyComponent);
    //console.log(descriptors);
  
    for (const [key, value] of Object.entries(descriptors)) {
      //console.log(`${key}: ${value}`);
      if (
        !key.startsWith("__") &&
        key !== "name" &&
        key !== "length" &&
        key !== "prototype"
      ) {
        //console.log(key);
        if (!value.set) {
          //console.log(`${key} is a method`)
          element[key] = (...args) => PyComponent[key](element, ...args);
          
        } else if (value.get && value.set) {
          //console.log(`${key} is a prop`)
  
          Object.defineProperty(element, key, {
            get: () => {
              return element[`get_${key}`]()
            },
            set: (value) => {
              element[`set_${key}`](value)
            },
            configurable: true,
          });
        }
      }
    }
    element.__init__ = () => PyComponent.__init__(element);
  };

  const Component = class extends HTMLElement {
    #item;
    constructor() {
      super();
      this.root = document.createElement('div');
      this.root.classList.add('root')
      if (htmlPath) {
        const html = assets[htmlPath]
        this.root.innerHTML = html
      }
      trojan(this);
      this.__init__();
    }

    get item() {
      return this.#item;
    }

    set item(item) {
      this.#item = item;
      this.render && this.render();
    }

    connectedCallback() {
      if (!this.contains(this.root)) {
        this.append(this.root)
      }
      this.connected_callback && this.connected_callback();
    }

    disconnectedCallback() {
      this.disconnected_callback && this.disconnected_callback();
    }
  }

  window.customElements.define(tag, Component);
}

export {define_component};