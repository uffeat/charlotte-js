import * as _alert from '../src/components/components/alert.js'
import {toast} from './py/__target__/components.toast.js'

toast()

const alert1 = X.element.create("x-alert", {
  content: "Some content...",
  headline: "Cool headline",
  styleName: 'primary',
  parent: document.root,
});

alert1.showAlert('New content', {headline: 'New headline', styleName: 'danger'})


