//filter everything but 0-9 characters from a string
export default function (str) {
    return str.replace(/[^\d]/g, '');
}