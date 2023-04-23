import { get_html } from "../assets/html.js"

Element.prototype.get = Element.prototype.querySelector
Element.prototype.get_all = Element.prototype.querySelectorAll

ShadowRoot.prototype.get = ShadowRoot.prototype.querySelector
ShadowRoot.prototype.get_all = ShadowRoot.prototype.querySelectorAll

document.get = document.querySelector
document.get_all = document.querySelectorAll

document.root = document.getElementById('appGoesHere')

// ELEMENT CREATION.

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

// PROPS.

/* Updates element and element.style properties. */
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

// COMPOSITION

HTMLElement.prototype.compose = function (Composition, ...args) {
  this[Composition.name.toLowerCase()] = new Composition(this, ...args)
}

