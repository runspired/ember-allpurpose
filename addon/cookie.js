function get(name) {
    var cookies = document.cookie.split(";"),
        index = cookies.length,
        cookieName,
        cookieBody;

    while (index--) {
        cookieName = cookies[index].substr(0, cookies[index].indexOf("="));
        cookieBody = cookies[index].substr(cookies[index].indexOf("=") + 1);
        cookieName = cookieName.replace(/^\s+|\s+$/g, "");
        if (cookieName === name) {
            return decodeURI(cookieBody);
        }
    }

    return false;
}

function set(name, value, expires) {
    var date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie = name + "=" + encodeURI(value) + ((expires === null) ? "" : "; expires=" + date.toUTCString());
}

function del(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var cookie = {
    get : get,
    set : set,
    del : del
};

export default cookie;
export {
    get,
    set,
    del
};
