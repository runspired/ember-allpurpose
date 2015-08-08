import isJquery from '../dom/is-jquery';

/**
 *
 * @param input element or jQuery element
 * @param start the index at which to begin the selection
 * @param end the index after which to end the selection
 */
export default function setSelectionRange(input, start, end) {

  if (input && isJquery(input)) {
    input = input.get(0)
  }

  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(start, end);
  }
  else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', end);
    range.moveStart('character', start);
    range.select();
  }
}
