import isLuhn from "./test/is-luhn";
import isEmail from "./test/is-email";
import isURLy from "./test/is-urly";
import isPhoneNumber from "./test/is-phone-number";
import isCreditCard from "./test/is-credit-card";
import isAlNum from "./test/is-al-num";
import isLowercase from "./test/is-lowercase";
import isInteger from "./test/is-integer";
import isFloat from "./test/is-float";
import isWordy from "./test/is-wordy";
import hasNoWhitespace from "./test/has-no-whitespace";

//various type tests
export default {
    isLuhn :  isLuhn,
    isEmail : isEmail,
    isURLy : isURLy,
    isPhoneNumber : isPhoneNumber,
    isCreditCard: isCreditCard,
    isAlNum : isAlNum,
    isLowercase : isLowercase,
    isInteger : isInteger,
    isFloat : isFloat,
    isWordy : isWordy,
    hasNoWhitespace : hasNoWhitespace
};

export {
    isLuhn,
    isEmail,
    isURLy,
    isPhoneNumber,
    isCreditCard,
    isAlNum,
    isLowercase,
    isInteger,
    isFloat,
    isWordy,
    hasNoWhitespace
};