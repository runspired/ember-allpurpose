//perfect url detection is hard, this just checks that there's some semblance of a TLD
export default function (str) {
    var regex = /^(http\:\/\/)?[a-zA-Z0-9][a-zA-Z0-9\-]*\.[a-zA-Z]{2}/;
    return regex.test(str);
}