//validate a US phone number
export default function (str) {
    return (/^(\+?1[ \.-]?|1[ \.-]?)?(\([2-9]\d{2}\)|[2-9]\d{2})[ \.-]?\d{3}[ \.-]?\d{4}/).test(str);
}