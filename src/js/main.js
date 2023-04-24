// Import all of Bootstrap's JS (for use WITH Parcel)
import * as bootstrap from 'bootstrap'

// Access Transcrypt transpiled stuff (Parcel).
import * as main from '../../.build/main.js'

// Init regular web components.
import * as _alert from "../components/components/alert.js";

// Test Transcrypt stuff.
main.toast.toast("hello", true)
//main.modal.modal()


const alert1 = X.element.create("x-alert", {
  content: "Some content...",
  headline: "Cool headline",
  styleName: 'primary',
  parent: document.root,
});

alert1.showAlert('New content', {headline: 'New headline', styleName: 'danger'})


