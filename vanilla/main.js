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

const mainNav = X.element.create("x-nav", {
  parent: navbar1,
});

mainNav.links.add("firstLink", { text: "First link" });
mainNav.links.add("secondLink", { text: "Second link" });
mainNav.links.add("thirdLink", { text: "Third link" });
mainNav.links.disable("thirdLink");
mainNav.links.active = 'firstLink'

mainNav.addEventListener("x-active-change", (event) => {
  console.log(`New active link name: ${event.detail.name}`);
  console.log(`New active link: ${event.detail.link.text}`);
});


const auxNav = X.element.create("x-nav", {slot: 'aux',
  parent: navbar1,
});
auxNav.links.add("linkA", { text: "Link A" });
auxNav.links.add("linkB", { text: "Link B" });




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
