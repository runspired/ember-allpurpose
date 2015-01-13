//validate that a string contains only 0-9 chars
export default function (str) {
    return (/^[0-9]+$/).test(str);
}