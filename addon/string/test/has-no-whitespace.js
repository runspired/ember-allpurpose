//validate that a string does not contain whitespace
export default function (str) {
    return !(/\s/).test(str);
}