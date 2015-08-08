import isPlural from '../test/is-plural';

export default function getSingular(str) {
  if (isPlural(str)) {
    return str.substring(0, str.length - 1);
  }
  return str;
}
