export default function (s) {
    var plural = s;
    if (plural.slice(-1) === 'y') {
        plural = plural.slice(0, -1) + 'ies';
    } else if (plural.slice(-1) === 's' && plural.slice(-2) !== 'es') {
        plural = plural.slice(0, -1) + 'es';
    } else {
        plural = plural + 's';
    }

    return plural;
}