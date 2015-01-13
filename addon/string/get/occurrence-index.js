export default function (str, char, index) {
    var offset = 0,
        occurrence = 0;
    while( (offset = str.indexOf(char, offset)) !== index && offset <= index) {
        offset++;
        occurrence++;
    }
    return occurrence;
};