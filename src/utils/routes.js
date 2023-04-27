import {routes} from './router'

routes.add("home", (kwargs, ...args) => {
  console.log(`home route running with kwargs '${kwargs}' and args '${args}'.`);
});

routes.add("about", (kwargs, ...args) => {
  console.log(
    `about route running with kwargs '${kwargs}' and args '${args}'.`
  );
});