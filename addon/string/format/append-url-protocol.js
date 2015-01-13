export default function (str, protocol) {
    protocol = protocol || 'http://';

    function getProtocol(str) {
        var firstSlash = str.indexOf('/'),
            secondSlash = str.indexOf('/', firstSlash + 1);
        if (firstSlash !== -1) {
            if (secondSlash !== -1 && secondSlash - firstSlash === 1) {
                return str.substr(0, secondSlash + 1);
            }
            if (firstSlash === 0) {
                return '/';
            }
            return '';
        }
        return '';
    }

    var protocol_existing = getProtocol(str);

    //check for existing protocol
    if (!protocol_existing) {
        return protocol + str;
    }
    if (protocol_existing !== 'https://' && protocol_existing !== 'http://') {
        return str.replace(protocol_existing, protocol);
    }
    return str;

}