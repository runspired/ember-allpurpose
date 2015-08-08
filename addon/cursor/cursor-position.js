/**
 *
 * @param $element jQuery element
 * @returns {Number} the index of the caret in the element
 */
function getCursorPosition ($element) {

  var input;

  if (!$element || !(input = $element.get(0))) {
    return 0;
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

/**
 *
 * @param $element jQuery element
 * @param start the index at which to begin the selection
 * @param end the index after which to end the selection
 */
function setSelectionRange($element, start, end) {

  var input;

  if (!$element || !(input = $element.get(0))) {
    return;
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

/**
 *
 * @param $element jQuery element
 * @param index the index at which to place the caret
 */
function setCursorPosition ($element, index) {
  setSelectionRange($element, index, index);
}




export default getCursorPosition;

export {
  getCursorPosition,
  setCursorPosition,
  setSelectionRange
};
