function linxParseDate(date) {

    if (!date) {
        return null
    }

    var strDate = new String(date);

    strDate = strDate.substring(
        strDate.indexOf('Date(') + 5,
        strDate.indexOf(')/') - 5
    );

    return iml.parseDate(
        strDate
        / 1000
        , 'X');

}