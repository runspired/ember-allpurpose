//validate that a string is only a word tokens (no spaces) \w\-
export default function (str) {
    return (/^[\w\-]+$/).test(str);
}