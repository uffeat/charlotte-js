import * as _alert from '../src/components/components/alert.js'


const bry_element = X.element.create("x-bry", {parent: document.root})

const alert1 = X.element.create("x-alert", {
  content: "Some content...",
  headline: "Cool headline",
  styleName: 'primary',
  parent: document.root,
});

alert1.showAlert('New content', {headline: 'New headline', styleName: 'danger'})


