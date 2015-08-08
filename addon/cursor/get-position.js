import isJquery from '../dom/is-jquery';

/**
 *
 * @param input element or jQuery element
 * @return Number the index of the caret in the element
 */
export default function getCursorPosition(input) {

  if (input && isJquery(input)) {
    input = input.get(0)
  }

  // Standard-compliant browsers
  if ('selectionStart' in input) {
    return input.selectionStart;

    // IE
  } else if (document.selection) {
    input.focus();
    var sel = document.selection.createRange();
    var selLen = document.selection.createRange().text.length;
    sel.moveStart('character', -input.value.length);
    return sel.text.length - selLen;
  }
}
