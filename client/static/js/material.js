import {MDCRipple} from '@material/ripple/index';
import {MDCFloatingLabel} from '@material/floating-label';
import {MDCLineRipple} from '@material/line-ripple';
import {MDCTextField} from '@material/textfield';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action, .mdc-card';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const textEls = Array.from(document.querySelectorAll('.mdc-text-field'));
textEls.forEach((el) => new MDCTextField(el));

const floatingLabels = Array.from(document.querySelectorAll('.mdc-floating-label'));
floatingLabels.forEach((el) => new MDCFloatingLabel(el));

const lineRipples = Array.from(document.querySelectorAll('.mdc-line-ripple'));
lineRipples.forEach((el) => new MDCLineRipple(el));