
class NavLinks {
  #component
  constructor(component) {
    this.#component = component
  }
  get active() {
    const activeLink = this.#component.get("a.active");
    if (!activeLink) return;
    return activeLink.name;
  }

  set active(name) {
    this.#component.setActiveLink && this.#component.setActiveLink(this.get(name));
  }

  add(name, props = {}) {
    if (this.#component.get(`a[name=${name}]`)) {
      throw `Link with name '${name}' already added.`;
    }
    const link = X.element.create("a", props);
    link.name = name;
    this.#component.append(link);
  }

  enable(name) {
    this.get(name).classList.remove("disabled");
  }

  disable(name) {
    this.get(name).classList.add("disabled");
  }

  get(name) {
    const link = this.#component.get(`a[name=${name}]`);
    if (!link) {
      throw `Invalid name: ${name}`;
    }
    return link;
  }

  hide(name) {
    this.get(name).hide();
  }

  show(name) {
    this.get(name).show();
  }
}

export {NavLinks}