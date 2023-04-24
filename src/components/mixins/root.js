/** */
const RootMixin = (Parent) => {
  class Root extends Parent {
    /** */
    constructor() {
      console.log(`constructor invoked for Root.`);
      super();
    }

    

  }

  return Root;
};

export { RootMixin };
