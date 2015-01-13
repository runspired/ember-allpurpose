//remove beginning and ending whitespace
export default function (str) {
    str = str || '';
    return str.replace(/^\s+|\s+$/g, '');
}