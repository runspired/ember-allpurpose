//validate that a string contains only 0-9 chars and a single decimal point
export default function (str) {
    return (/^[0-9]+(\.[0-9]*)?$/).test(str);
}