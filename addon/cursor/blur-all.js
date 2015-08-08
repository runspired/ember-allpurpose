export default function () {
  if ("activeElement" in document && document.activeElement !== document.body) {
    document.activeElement.blur();
  }
  if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    window.cordova.plugins.Keyboard.close();
  }
}
