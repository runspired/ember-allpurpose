//validate that a string contains only lower case characters
//numbers and symbols are ignored
export default function (str) {
    return !/[A-Z]/.test(str);
}