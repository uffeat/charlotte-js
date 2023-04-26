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
navbar1.auxNav.links.add("link_a", { text: "Link A" });
navbar1.mainNav.links.add("link_1", { text: "Link 1" });



const nav1 = X.element.create("x-nav", {
  vertical: false,
  parent: document.root,
});

nav1.links.add("first_link", { text: "First link" });
nav1.links.add("second_link", { text: "Second link" });
nav1.links.add("third_link", { text: "Third link" });

nav1.links.active = "second_link";

nav1.links.disable("third_link");
nav1.links.enable("third_link");
nav1.links.hide("third_link");
nav1.links.show("third_link");

nav1.addEventListener("x-active-change", (event) => {
  console.log(`New active link: ${event.detail.name}`);
  event.detail.received = 42
});



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
