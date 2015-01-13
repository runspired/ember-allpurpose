import phoneNumber from './format/phone-number';
import appendUrlProtocol from './format/append-url-protocol';

export default {

    phoneNumber : phoneNumber,

    //does not necessarily return a valid url, use with isURLy
    appendUrlProtocol : appendUrlProtocol
};

export { phoneNumber, appendUrlProtocol };