import { composeSubs } from "../compositions/subs.js";
import { setStyle } from "../../libs/bootstrap/utils/classes.js";

const showToast = (content, kwargs = {}) => {
  const [headline = "", styleName = "primary", delay = 5000] = X.getArgs(
    kwargs,
    "headline",
    "styleName",
    "delay"
  );

  let container = document.get("div.toast-container");
  if (!container) {
    container = X.element.create(
      "div.toast-container.position-fixed.bottom-0.end-0.p-3",
      { parent: document.body }
    );
  }

  const component = X.element.createFromHtml("toast", { parent: container });
  composeSubs(component);
  
  setStyle(component.subs.headline, "text", styleName);
  component.subs.headline.text = headline;
  component.subs.body.text = content;

  const bsComponent = new bootstrap.Toast(component, { delay: delay });

  component.addEventListener("hidden.bs.toast", (event) => {
    event.stopPropagation();
    bsComponent.dispose();
    component.remove();
    if (!container.firstElementChild) {
      container.remove();
    }
  });

  bsComponent.show();
};

export { showToast };
