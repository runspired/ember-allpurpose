export default function makeDate(str) {
  var arr = str.split(/[- :]/);
  var date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
  date.setTime( date.getTime() - date.getTimezoneOffset() * 60 * 1000 );
  return date;
}
