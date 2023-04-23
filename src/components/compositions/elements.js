class Elements {
  #component
  constructor(component) {
    this.#component = component
  }

  get(name) {
    let source;
    if (this.#component.root) {
      source = this.#component.root
    } else {
      source = this.#component
    }
    return source.querySelector(`*[data-x=${name}]`)
  }
}
    
