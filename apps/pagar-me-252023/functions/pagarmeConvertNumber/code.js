function pagarmeConvertNumber(value) {
    let isNegative = (String(value).indexOf('-') == -1) ? false : true;

    if (!value && value != 0) {
        return null;
    }

    if (String(value).indexOf('.') != -1) {
        let fixedNumber = Math.abs(Number(value).toFixed());
        value = String(fixedNumber);
    }

    var strNumber = '';
    strNumber = strNumber + String(value).replace('-', '').substring(0, String(value).replace('-', '').length - 2);
    strNumber = strNumber + '.';
    strNumber = strNumber + String(value).replace('-', '').substring(String(value).replace('-', '').length - 2);

    value = +strNumber;

    return isNegative ? (Math.abs(value) * -1) : Math.abs(value);
}