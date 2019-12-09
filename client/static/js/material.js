import {MDCRipple} from '@material/ripple/index';

const buttonEls = Array.from(document.querySelectorAll('.mdc-button'));
buttonEls.forEach((el) => new MDCRipple(el));