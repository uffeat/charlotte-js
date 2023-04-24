import { assets } from "../assets/_assets.js";

window.X = {};

/** */
function getHtml(arg) {
  if (arg.trim().startsWith("<")) {
    // `arg` is already HTML
    return arg;
  }
  if (!arg.endsWith(".html")) {
    arg = `${arg}.html`;
  }
  if (!(arg in assets)) {
    throw new TypeError(`Invalid assets path: ${arg}.`);
  }
  return assets[arg];
}

window.X.getHtml = getHtml;

Element.prototype.get = Element.prototype.querySelector;
Element.prototype.getAll = Element.prototype.querySelectorAll;

ShadowRoot.prototype.get = ShadowRoot.prototype.querySelector;
ShadowRoot.prototype.getAll = ShadowRoot.prototype.querySelectorAll;

document.get = document.querySelector;
document.getAll = document.querySelectorAll;

document.root = document.getElementById("appGoesHere");

// ELEMENT CREATION.

class _Element {
  create(...args) {
    // Creates HTML element with options to set CSS classes, add children,
    // add to parent, set inner HTML and attach shadow.

    const [arg, ...children] = args;
    const [tag, ...classes] = arg.split(".");

    const element = document.createElement(tag);

    /*
    This line uses destructuring assignment and the spread operator to extract certain 
    properties from the last item in the children array, which is assumed to be an object 
    containing optional properties for the new element.
    children.pop(): This removes and returns the last item in the children array. 
    If the children array is empty, this returns undefined.
    || {}: If children.pop() returns undefined, this provides a fallback value of an empty object ({}).
    { html, parent, shadow, ...props }: This uses destructuring assignment to extract the html, 
    parent, and shadow properties from the last item in the children array, if they exist. 
    The ...props syntax assigns any remaining properties from the last item to the props variable, 
    which will be an object containing all remaining properties.
    Putting it all together, this line of code essentially creates variables html, parent, 
    and shadow containing the values of those properties from the last item in the children array, 
    if they exist. It also creates an object props containing all remaining properties from the last item. 
    If the children array is empty, all variables and props are assigned the value of an empty object ({}).
    This technique is often used to extract certain properties from an object while ignoring others, 
    and is commonly used with function arguments to provide default values for missing parameters.
    */
    const { html, parent, shadow, ...props } = children.pop() || {};

    if (shadow) {
      // If `shadow` is a list or a tuple, it contains stylesheet `assets` keys (strings).
      const sheets = Array.isArray(shadow) ? shadow : null;

      element.addShadow({ html, sheets });
    } else {
      if (html) {
        element.innerHTML = getHtml(html);
      }
    }

    if (classes.length) {
      element.classList.add(...classes);
    }

    if (children.length) {
      element.append(...children);
    }

    if (parent) {
      element.parent = parent;
    }

    if (Object.keys(props).length) {
      
      //
      Object.assign(element, props);


    }

    return element;
  }

  createFromHtml(html, parent = null, shadow = false) {
    // Creates HTML element from 'outer' HTML with options,
    // add to parent and attach shadow root.
    html = getHtml(html);
    let element;

    if (shadow) {
      element = document.createElement("div");
      // If `shadow` is a list or a tuple, it contains stylesheet `assets` keys (strings).
      const sheets = Array.isArray(shadow) ? shadow : null;
      element.addShadow({ html, sheets });
    } else {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      if (temp.children.length > 1) {
        // No single top-level element; add such.
        element = temp;
      } else {
        element = temp.firstElementChild;
      }
    }

    if (parent) {
      element.parent = parent;
    }

    return element;
  }
}

window.X["element"] = new _Element();

// COMPONENT CREATION

/**
 * Creation and caching of components (web components, i.e., custom elements).
 */
class _Component {
  constructor() {
    class Cache {
      constructor() {
        // `this._registry` informs intent to cache/use cache and holds cache key func.
        this._registry = {}; // {tag: keyFunc, tag: keyFunc, ...}

        // `this._storage` is actual cache.
        this._storage = {}; // {key: component, key: component, ...}
      }

      /**
       * Registers component (by tag) for caching along with key function.
       * @param {string} tag - The tag name of the component.
       * @param {Function} keyFunc - The function that generates a component identifier from `item`.
       */
      register(tag, keyFunc) {
        // Checks.
        if (!tag.startsWith("x-")) {
          tag = `x-${tag}`;
        }
        if (typeof keyFunc !== "function") {
          throw new TypeError("Second arg in `register` must be a function.");
        }

        // Store "tag: keyFunc" in registry.
        this._registry[tag] = keyFunc;
        console.log(`Component \`${tag}\` registered for caching.`);
      }

      /**
       * Returns `True` if the component with `tag` is registered for caching.
       * @param {string} tag - The tag name of the component.
       * @returns {boolean}
       */
      _registered(tag) {
        return this._registry.hasOwnProperty(tag);
      }

      /**
       * Stores component in cache.
       * @param {Element} component - The component to store in cache.
       */
      _storeComponent(component) {
        // Normalize tag.
        const tag = component.tagName.toLowerCase();

        const item = component.item;
        const key = this._genKey(tag, item);
        this._storage[key] = component;
        console.log(
          `Stored \`${tag}\` component in cache with key \`${key}\`.`
        );
      }

      /**
       * Returns cached component (`null` if not in cache).
       * @param {string} tag - The tag name of the component.
       * @param {*} item - The item used to generate the cache key.
       * @returns {Element|null}
       */
      _getComponent(tag, item) {
        const key = this._genKey(tag, item);
        return this._storage.hasOwnProperty(key) ? this._storage[key] : null;
      }

      /**
       * Returns cache key generated from tag and key func stored in `this._registry`.
       * @param {string} tag - The tag name of the component.
       * @param {*} item - The item used to generate the cache key.
       * @returns {string}
       */
      _genKey(tag, item) {
        const keyFunc = this._registry[tag];
        const key = `${tag}_${keyFunc(item)}`;
        return key;
      }
    }
    this.cache = new Cache();
  }

  /**
   * Returns (possibly cached) component (and possibly caches component).
   * @param {string} tag - The tag name of the component.
   * @param {*} item - The item used to generate the cache key.
   * @param {*} parent - The parent element for the component.
   * @returns {Element}
   */
  create(tag, kwargs = {}) {
    if (!tag.startsWith("x-")) {
      tag = `x-${tag}`;
    }

    kwargs = { ...kwargs };
    // Destructure.
    const { item = null, parent = null } = kwargs;

    console.log(`Creating component with item: ${item}`);

    if (!window.customElements.get(tag)) {
      throw new Error(`No component registered with tag \`${tag}\`.`);
    }

    if (this.cache._registered(tag)) {
      // Component is cache-registered.
      if (!item) {
        throw new Error(
          `Cache-registered component \`${tag}\` must be created with \`item\`.`
        );
      }
      const component = this.cache._getComponent(tag, item);
      if (component) {
        // Component found in cache store.
        console.log(`Using cached component \`${tag}\`.`);
        if (parent) {
          component.parent = parent;
        }
        return component;
      }
    }

    const component = document.createElement(tag);

    if (item) {
      if (!("item" in component)) {
        throw new Error(`Component \`${tag}\` does not have an \`item\` prop.`);
      }
      component.item = item;
    }

    if (this.cache._registered(tag)) {
      // Component is cache-registered but not yet stored.
      if (!item) {
        throw new Error(
          `Cannot store component \`${tag}\` in cache without \`item\` set.`
        );
      }
      this.cache._storeComponent(component);
    }

    if (parent) {
      component.parent = parent;
    }
    return component;
  }
}

window.X["component"] = new _Component();

// STRUCTURE.

Object.defineProperty(HTMLElement.prototype, "parent", {
  get: function () {
    return this.parentElement;
  },
  set: function (parent) {
    parent.append(this);
  },
  configurable: true,
});

Object.defineProperty(HTMLElement.prototype, "html", {
  get: function () {
    return this.innerHTML;
  },
  set: function (html) {
    this.innerHTML = html;
  },
  configurable: true,
});

HTMLElement.prototype.clear = function (slot) {
  if (slot === undefined) {
    while (this.firstChild) {
      this.firstChild.remove();
    }
  } else {
    [...this.children].forEach((child) => {
      if ((slot === "" && !child.slot) || child.slot === slot) {
        child.remove();
      }
    });
  }
  return this; // Allows chaining.
};

// SHADOW

/**
 * Attaches a shadow root to an HTML element.
 * @param {object} kwargs - An object containing optional arguments.
 * @param {boolean} [kwargs.delegates_focus=false] - Whether the shadow root delegates focus.
 * @param {string} [kwargs.html=null] - The HTML string to add to the shadow root.
 * @param {Array} [kwargs.sheets=null] - An array of asset keys to add as stylesheets to the shadow root.
 * @returns {ShadowRoot} The newly created shadow root.
 */
function addShadow(kwargs = {}) {
  // Create shallow copy kwargs object. Ensures that original object passed as a parameter remains unchanged;
  // useful in preventing unintended side effects.
  kwargs = { ...kwargs };
  // Destructure.
  const { delegates_focus = false, html = null, sheets = null } = kwargs;

  const shadow_root = this.attachShadow({
    mode: "open",
    delegatesFocus: delegates_focus,
  });

  if (html) {
    shadow_root.innerHTML = html;
  }

  if (sheets) {
    // `sheets` is an array of assets keys ("paths").
    // Add stylesheets from `_assets` to shadow root:
    shadow_root.addSheets(...sheets);
  }

  this.root = shadow_root;

  // Return `root` to respect native pattern.
  return shadow_root;
}

// Add `addShadow` as a method of `HTMLElement.prototype`.
HTMLElement.prototype.addShadow = addShadow;

// PROPS.

/** Updates element and element.style properties. */
HTMLElement.prototype.updateProps = function (props) {
  if (props && Object.keys(props).length >= 0) {
    for (const [prop, value] of Object.entries(props)) {
      // Allow new private prop.
      if (prop.startsWith("_")) {
        this[prop] = value;
      } else if (prop in this) {
        this[prop] = value;
      } else if (prop in this.style) {
        this.style[prop] = value;
      } else {
        throw new Error(`Invalid property: '${prop}'.`);
      }
    }
  }
  return this; // Allows chaining.
};

Object.defineProperty(Node.prototype, "text", {
  get: function () {
    return this.textContent;
  },
  set: function (text) {
    this.textContent = text;
  },
  configurable: true,
});

// STYLE

/**
 * Adds "stylesheets" to document or a shadow root.
 * @param {...string} paths - The paths of the stylesheets to add.
 * @throws {KeyError} If an invalid assets path is provided.
 */
function addSheets(...paths) {
  for (const path of paths) {
    if (!path.endsWith(".css")) {
      path = `${path}.css`;
    }
    // `_assets` is an object with `path` keys and CSS text as values.
    if (!(path in assets)) {
      throw new Error(`Invalid assets path: \`${path}\`.`);
    }
    const css_text = assets[path];
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css_text);
    this.adoptedStyleSheets = [...this.adoptedStyleSheets, sheet];
    if (this === document) {
      console.log(`Added stylesheet \`${path}\` to document.`);
    }
  }
}

// Add `addSheets` as a method of `ShadowRoot.prototype` and `document`.
ShadowRoot.prototype.addSheets = addSheets;
document.addSheets = addSheets;

// COMPOSITION

HTMLElement.prototype.compose = function (Composition, ...args) {
  this[Composition.name.toLowerCase()] = new Composition(this, ...args);
};
