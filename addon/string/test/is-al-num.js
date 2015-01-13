//validate that a string contains only alpha numeric characters
export default function (str) {
    return (/^[a-zA-Z0-9]+$/).test(str);
}