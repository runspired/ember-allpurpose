export default function () {
  if ("activeElement" in document && document.activeElement !== document.body) {
    document.activeElement.blur();
  }
}
