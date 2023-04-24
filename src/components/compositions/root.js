/** */
function composeRoot(component, kwargs = {}) {
  // Create shallow copy of kwargs.
  kwargs = { ...kwargs };
  // Destructure.
  const { cssClasses = [], html = null } = kwargs;

  component.root = X.element.create(`div.root`);
  cssClasses.forEach(cssClass => component.root.classList.add(cssClass));

  if (html) {
    component.root.innerHTML = X.getHtml(html)
  }

  component.addRoot = function() {
    if (!this.contains(this.root)) {
      this.append(this.root);
    }
  }


  

  
}


export { composeRoot };