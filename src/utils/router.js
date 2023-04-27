import { parseLocationHash, removeHash } from "./url.js";
import { FuncReg } from "./func-reg.js";

const routes = new FuncReg();

console.log(`routes: ${routes.getKeys()}`);

const onhashchange = (event) => {
  const result = parseLocationHash();
  if (!result) return
  console.log(result)
  const { key, query: kwargs, params: args = [] } = result;

  if (key) {
    if (!routes.get(result.key)) {
      console.log(`Invalid route key: ${key}`);
      return;
    }

    routes.run(key, kwargs, ...args);

    return key;
  }
};

window.onhashchange = onhashchange;
onhashchange();

export { routes };
