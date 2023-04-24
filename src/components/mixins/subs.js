/** */
const SubsMixin = (Parent) => {
  class Subs extends Parent {
    /** */
    constructor() {
      console.log(`Subs constructor invoked.`);
      super();
      this.subs = {};
    }

    buildSubs() {
      let source;

      if (this.root) {
        source = this.root;
      } else {
        source = this;
      }

      const subs = {};

      const xElements = source.querySelectorAll(`*[data-x]`);

      xElements.forEach((element) => {
        subs[element.dataset.x] = element;
      });

      this.subs = subs;
    }
  }

  return Subs;
};

export { SubsMixin };
