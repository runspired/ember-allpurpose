export default function (str, char, occurrenceIndex) {
    var count= 0, i=0;
    while(count< occurrenceIndex && (i=str.indexOf(char,i)+1)){
        count++;
    }
    if(count == occurrenceIndex) {
        return i-1;
    }
    return null;
};