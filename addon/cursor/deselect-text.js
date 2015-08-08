export default function () {
  if (document.selection) {
    document.selection.empty();
  } else {
    window.getSelection().removeAllRanges();
  }
}
