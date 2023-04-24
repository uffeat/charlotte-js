class ItemMixin {

  get item() {
    console.log("item getter at work")
    return this._item
  }

  set item (item) {
    console.log("item setter at work")
    this._item = item
    this.render && this.render()
  }
}


class Alert extends HTMLElement {
  constructor() {
    super();
    this.root = document.element.create('div.root')
  }

  connectedCallback() {
    if (!(this.contains(this.root))) {this.append(this.root)}
  }
}


function applyMixin(baseClass, mixin) {
  return class extends baseClass {
    constructor(...args) {
      super(...args);
      Object.assign(this, new mixin());
    }
  };
}

/** applyMixins takes the base class and a variable number of mixin arguments, 
 * iteratively applying each mixin to the base class using the reduce function. 
 * In each iteration, a new anonymous class is created that extends the current 
 * mixed class (represented by the accumulator). The mixin's properties and methods 
 * are then assigned to the current class instance (this) using Object.assign. 
 * If the mixin is a class with a constructor, a new instance of the mixin class is 
 * created before assigning its properties and methods. */
function applyMixins(baseClass, ...mixins) {
  // The reduce function is used to iteratively apply mixins to the base class.
  // 'accumulator' holds the current mixed class in each iteration,
  // and 'currentMixin' is the current mixin to be applied.
  return mixins.reduce((accumulator, currentMixin) => {
    // Define a new anonymous class that extends the current 'accumulator' class.
    return class extends accumulator {
      constructor(...args) {
        // Call the parent class constructor with the provided arguments.
        super(...args);

        // Check if the current mixin is a function (class),
        // indicating it has a constructor.
        if (typeof currentMixin === 'function') {
          // Create a new instance of the mixin class, passing the arguments.
          const mixinInstance = new currentMixin(...args);
          // Assign the properties and methods of the mixin instance to 'this',
          // effectively mixing them into the current class.
          Object.assign(this, mixinInstance);
        } else {
          // If the mixin is not a class, assume it's a plain object.
          // Assign the properties and methods of the mixin object to 'this'.
          Object.assign(this, currentMixin);
        }
      }
    };
  }, baseClass); // Pass the initial
}


  



const MixedAlert = applyMixin(Alert, ItemMixin);
window.customElements.define("x-alert", MixedAlert);



//window.customElements.define('x-alert', Alert)