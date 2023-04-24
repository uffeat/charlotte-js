/** */
const ItemMixin = (Parent) => {
  class Item extends Parent {
    /** */
    constructor() {
      console.log(`constructor invoked for Item.`);
      super();
    }

    /** */
    get item() {
      return this._item;
    }

    /** */
    set item(item) {
      this._item = item;
      this.render && this.render();
    }

  }

  return Item;
};

export { ItemMixin };
