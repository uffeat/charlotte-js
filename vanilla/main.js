import * as _alert from "../src/components/components/alert.js";
import * as _nav from "../src/components/components/nav.js";
import * as _navbar from "../src/components/components/navbar.js";
import { showToast } from "../src/components/components/toast.js";
import { server } from "../src/utils/server.js";


/*
server.get("test");
*/


const navbar1 = X.element.create("x-navbar", {
  parent: document.root,
});

const mainNav1 = X.element.create("x-nav", {collapsible: true,
  parent: navbar1,
});
mainNav1.subs.nav.classes.add('py-3', 'py-md-0')

mainNav1.links.add("firstLink", { text: "First link" });
mainNav1.links.add("secondLink", { text: "Second link" });
mainNav1.links.add("thirdLink", { text: "Third link" });

const auxNav1 = X.element.create("x-nav.ms-auto", {slot: 'aux',
  parent: navbar1,
});
auxNav1.links.add("linkA", { text: "Link A" });
auxNav1.links.add("linkB", { text: "Link B" });

//navbar1.links.add("linkA", { text: "Link A", slot: 'aux' });
//navbar1.links.add("linkB", { text: "Link B", slot: 'aux' });
//X.element.create('a', {text: "Link A", name: "linkA", slot: 'aux', parent: navbar1 })
//navbar1.links.add("link1", { text: "Link 1"});
//navbar1.links.add("link2", { text: "Link 2"});
//X.element.create('a', {text: "Link 1", name: "link1", parent: navbar1 })
//X.element.create('a', {text: "Link 2", name: "link2", parent: navbar1 })

//navbar1.links.disable("link2", { text: "Link 2"});
//console.log(navbar1.subs.mainNav.getAll('a'))
//console.log(navbar1.root.get('x-nav').getAll('a'))


/*
const nav1 = X.element.create("x-nav", {
  vertical: false,
  parent: document.root,
});

nav1.links.add("firstLink", { text: "First link" });
nav1.links.add("secondLink", { text: "Second link" });
nav1.links.add("thirdLink", { text: "Third link" });

nav1.links.active = "secondLink";

nav1.links.disable("thirdLink");
nav1.links.enable("thirdLink");
nav1.links.hide("thirdLink");
nav1.links.show("thirdLink");

nav1.addEventListener("x-active-change", (event) => {
  console.log(`New active link: ${event.detail.name}`);
  event.detail.received = 42
});
*/



/*
const alert1 = X.element.create("x-alert", {
  content: "Some content...",
  headline: "Cool headline",
  styleName: "primary",
  parent: document.root,
});


alert1.showAlert("New content", {
  headline: "New headline",
  styleName: "danger",
});
*/


/*
showToast("Toasted again...", { headline: "A Toast!", delay: 3000 });
showToast("Short but dangerous.", {
  headline: "A shorter Toast!",
  delay: 1000,
  styleName: "danger",
});
showToast("Toooooaaaaasssstttttt!!!!", {
  headline: "A long dark Toast!",
  delay: 5000,
  styleName: "dark",
});
*/
