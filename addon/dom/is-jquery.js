/*global jQuery*/
export default function (o) {
    return jQuery && (o instanceof jQuery);
}