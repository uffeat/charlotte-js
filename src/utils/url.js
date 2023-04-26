/** Returns decoded search object from encoded search params string. */
function genSearchObj(encodedSearchParams) {
  const searchObj = {};
  // Remove leading '?' if present
  if (encodedSearchParams.startsWith('?')) {
    encodedSearchParams = encodedSearchParams.slice(1);
  }
  const urlParams = new URLSearchParams(encodedSearchParams);
  // NOTE: For many cases, 'urlParams' could have been returned directly.
  // However, conversion to plain object is easier to, e.g., serialize.
  for (const [key, value] of urlParams.entries()) {
    searchObj[key] = value;
  }
  return searchObj;
}


/** Returns encoded search params string form search object. */
function genSearchParams(searchObj) {
  const urlParams = new URLSearchParams();
  for (const [key, value] of Object.entries(searchObj)) {
    urlParams.set(key, value);
  }
  return "?" + urlParams.toString();
}

/**  Removes hash from `window.location` */
function removeHash() {
  const url = window.location.toString().split("#")[0];
  window.history.replaceState({}, "", url);
}



export {genSearchObj, genSearchParams}