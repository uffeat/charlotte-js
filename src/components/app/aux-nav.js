import * as _nav from "../components/nav.js";

const component = X.element.create("x-nav", { slot: "aux" });
component.links.add("linkA", { text: "Link A" });
component.links.add("linkB", { text: "Link B" });

export { component };
