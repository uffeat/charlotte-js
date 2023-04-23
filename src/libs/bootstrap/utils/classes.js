const styles = [
  "primary",
  "secondary",
  "danger",
  "info",
  "success",
  "warning",
  "light",
  "dark",
];

const page_classes = ["container", "max-width-lg", "my-3"];

/** Returns a list of CSS 'col' classes by index. */
function get_col_classes(index = null) {
  // TODO: Expand `classes` with indices 1-5.
  const classes = { 3: ["col-md-6", "col-lg-4"] };
  if (index) {
    return classes[index];
  }
  return Object.values(classes);
}

/** Validates `style`. */
function _validate_style(style) {
  if (!styles.includes(style)) {
    throw new Error(`Invalid style: ${style}. Valid styles: ${styles.join(", ")}.`);
  }
}

/** Removes all prefixed style classes from `element`. */
function clear_styles(element, prefix) {
  styles.forEach((s) => {
    element.classList.remove(`${prefix}-${s}`);
  });
}

/** Adds a prefixed style class to `element`.
Optional default clears prefixed style classes first. */
function add_style(element, prefix, style, clear = true) {
  _validate_style(style);
  if (clear) {
    clear_styles(element, prefix);
  }
  element.classList.add(`${prefix}-${style}`);
}

export {
  page_classes,
  get_col_classes,
  clear_styles,
  add_style,
};
