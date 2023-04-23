import { get_html } from "../assets/html.js"

Element.prototype.get = Element.prototype.querySelector
Element.prototype.get_all = Element.prototype.querySelectorAll

ShadowRoot.prototype.get = ShadowRoot.prototype.querySelector
ShadowRoot.prototype.get_all = ShadowRoot.prototype.querySelectorAll

document.get = document.querySelector
document.get_all = document.querySelectorAll

document.root = document.getElementById('appGoesHere')

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
      
      
      // Assume that `attachShadow` is available as a method on `element`.
      
      element.attachShadow({ mode: "open" }).innerHTML = html || "";
      if (sheets) {
        sheets.forEach((sheet) => {
          
          // TODO

        });
      }

    } else {
      if (html) {
        element.innerHTML = html;
      }
    }

    if (classes.length) {
      element.classList.add(...classes);
    }

    if (children.length) {
      element.append(...children);
    }

    if (parent) {
      // Assume that `parent` is available as a prop on `element`.
      element.parent = parent;
      parent.append(element);
    }

    if (Object.keys(props).length) {
      // Assume that `Object.assign` is available as a method on `element`.
      Object.assign(element, props);
    }

    return element;
  }

  create_from_html(html, parent = null, shadow = false) {
    // Creates HTML element from 'outer' HTML with options,
    // add to parent and attach shadow root.
    let element;

    if (shadow) {
      element = document.createElement("div");
      // If `shadow` is a list or a tuple, it contains stylesheet `assets` keys (strings).
      const sheets = Array.isArray(shadow) ? shadow : null;


      // Assume that `attachShadow` is available as a method on `element`.
      element.attachShadow({ mode: "open" }).innerHTML = html;
      if (sheets) {
        sheets.forEach((sheet) => {
          


        });
      }
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
      // Assume that `parent` is available as a prop on `element`.
      element.parent = parent;
      parent.append(element);
    }

    return element;
  }
}

document.element = new _Element();

// TODO: PURGE

document.create_element = function (tagArg, props, ...children) {
  const [tag, ...classes] = tagArg.split(".");
  const element = document.createElement(tag);
  classes.forEach((c) => element.classList.add(c));
  element.update_props(props);
  
  children.forEach((child) => {
    if (typeof child === "string") {
      element.insertAdjacentHTML("beforeend", child);
    } else {
      if (Array.isArray(child)) {
        element[child[0]] = child[1]
        child = child[1]
      }
      element.append(child);
    }
  });
  return element;
};



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
function attach_shadow(kwargs) {
  kwargs = { ...kwargs };
  const { delegates_focus = false, html = null, sheets = null } = kwargs;

  const shadow_root = this.attachShadow({
    mode: "open",
    delegatesFocus: delegates_focus,
  });

  // Add short-hands:
  shadow_root.get = shadow_root.querySelector;
  shadow_root.get_all = shadow_root.querySelectorAll;

  if (html) {
    shadow_root.innerHTML = html;
  }

  if (sheets) {
    // `sheets` is an array of assets keys ("paths").
    // Add stylesheets from `_assets` to shadow root:
    shadow_root.add_sheets(...sheets);
  }

  this.root = shadow_root;

  // Return `root` to respect native pattern.
  return shadow_root;
}

// Add `attach_shadow` as a method of `HTMLElement.prototype`.
HTMLElement.prototype.attach_shadow = attach_shadow;




// PROPS.

/** Updates element and element.style properties. */
HTMLElement.prototype.update_props = function (props) {
  if (props && Object.keys(props).length >= 0) {
    for (const [prop, value] of Object.entries(props)) {
      // Allow new private props.
      if (prop.startsWith('_')) {
        this[prop] = value;
      }
      else if (prop in this) {
        this[prop] = value;
      } else if (prop in this.style) {
        this.style[prop] = value;
      } 
      else {
          throw new Error(
            `Invalid property: '${prop}'.`
          );
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
function add_sheets(...paths) {
  for (const path of paths) {
    if (!path.endsWith(".css")) {
      path = `${path}.css`;
    }
    // `_assets` is an object with `path` keys and CSS text as values.
    if (!(path in _assets)) {
      throw new Error(`Invalid assets path: \`${path}\`.`);
    }
    const css_text = _assets.get(path);
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css_text);
    this.adoptedStyleSheets = [...this.adoptedStyleSheets, sheet];
    if (this === document) {
      console.log(`Added stylesheet \`${path}\` to document.`);
    }
  }
}

// Add `add_sheets` as a method of `ShadowRoot.prototype` and `document`.
ShadowRoot.prototype.add_sheets = add_sheets;
document.add_sheets = add_sheets;


// COMPOSITION

HTMLElement.prototype.compose = function (Composition, ...args) {
  this[Composition.name.toLowerCase()] = new Composition(this, ...args)
}

