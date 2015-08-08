import setSelectionRange from './set-selection-range';
/**
 *
 * @param $element element or jQuery element
 * @param index the index at which to place the caret
 */
function setCursorPosition ($element, index) {
  setSelectionRange($element, index, index);
}
