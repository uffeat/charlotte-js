class DataStore {
  #store = {};
  constructor() {}

  get(key) {
    return this.#store[key];
  }

  remove(key) {
    delete this.#store[key];
  }

  set(key, value) {
    this.#store[key] = value;
  }

  reveal() {
    const text = JSON.stringify(this.#store);
    console.log(text);
    return text;
  }
}

export { DataStore };
