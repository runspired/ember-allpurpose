//checksum for credit cards and bank routing numbers
export default function (cc) {
    var sum = 0,
        i;
    for (i = cc.length - 2; i >= 0; i -= 2) {
        sum += [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][parseInt(Utils.string.charAt(cc, i), 10)];
    }
    for (i = cc.length - 1; i >= 0; i -= 2) {
        sum += parseInt(Utils.string.charAt(cc, i), 10);
    }
    return (sum % 10) == 0;
}