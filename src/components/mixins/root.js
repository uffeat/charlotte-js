/** */
const RootMixin = (Parent) => {
  class Root extends Parent {
    /** */
    constructor() {
      console.log(`Root constructor invoked.`);
      super();
    }

    /** */
    addRoot() {
      if (!this.contains(this.root)) {
        this.append(this.root);
      }
    }

    /** */
    createRoot(kwargs = {}) {
      // Create shallow copy of kwargs.
      kwargs = { ...kwargs };
      // Destructure.
      const { cssClasses = [], html = null } = kwargs;

      this.root = X.element.create(`div.root`);
      cssClasses.forEach(cssClass => this.root.classList.add(cssClass));

      if (html) {
        this.root.innerHTML = X.getHtml(html)

      }

    }
  }

  return Root;
};

export { RootMixin };
