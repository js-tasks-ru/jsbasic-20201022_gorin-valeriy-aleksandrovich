/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    str = str.toLowerCase();
    if ( str.indexOf("1xbet")!=-1 || str.indexOf("xxx")!=-1 ) {
        return true;
    } else return false;
}
