function linxParseDate(date) {
    return iml.parseDate(iml.substring(date, iml.indexOf(date, iml.decodeURL('%28')) + 1, iml.indexOf(date, iml.if(iml.contains(date, iml.decodeURL('%2D')), iml.decodeURL('%2D'), iml.decodeURL('%29')))) / 1000, 'X');
}