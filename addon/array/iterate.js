export default function iterate(keys, fn) {
  var key;
  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      fn(keys[key]);
    }
  }
}
