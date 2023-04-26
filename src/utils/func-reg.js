class FuncReg {
  #reg = {};
  constructor() {}

  add(key, func) {
    if (key in func) {
      throw `A function is already registered with key: ${key}.`;
    }
    this.#reg[key] = func;
  }

  remove(key) {
    delete this.#reg[key];
  }

  update(key, func) {
    this.#reg[key] = func;
  }

  get(key) {
    return this.#reg[key];
  }

  run(key, ...args) {
    if (!(key in func)) {
      throw `No function registered with key: ${key}.`;
    }
    return this.#reg[key](...args);
  }

  reveal() {
    const regText = JSON.stringify(this.#reg);
    console.log(regText);
    return regText;
  }
}

export { FuncReg };
