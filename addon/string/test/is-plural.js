import charAt from '../char-at';

export default function isPlural(name) {
  var lastChar = charAt(name, name.length - 1);
  return lastChar === 's';
}
