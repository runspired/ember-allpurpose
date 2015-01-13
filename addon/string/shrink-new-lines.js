//only allow n consecutive newline characters
export default function (str, n) {
    str = str || '';
    var re = new RegExp('\n{' + (n + 1) + '}', "g");
    return str.replace(re, '');
}