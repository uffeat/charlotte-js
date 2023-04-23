import {assets} from './assets.js'

function get_html(path) {
  if (!path.endsWith('.html')) {
    path = `${path}.html`
  }
  const html = assets[path]
  return html
}

export {get_html}