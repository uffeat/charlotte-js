import * as _alert from '../src/components/components/alert.js'
import {showToast} from '../src/components/components/toast.js'

const alert1 = X.element.create("x-alert", {
  content: "Some content...",
  headline: "Cool headline",
  styleName: 'primary',
  parent: document.root,
});

alert1.showAlert('New content', {headline: 'New headline', styleName: 'danger'})


showToast("Toasted again...", {headline: 'A Toast!', delay: 3000})
showToast("Short but dangerous.", {headline: 'A shorter Toast!', delay: 1000, styleName: 'danger'})
showToast("Toooooaaaaasssstttttt!!!!", {headline: 'A long dark Toast!', delay: 5000, styleName: 'dark'})
