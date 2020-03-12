it('First Test', () => {
    assert.ok(
        iml.formatDate(
            linxParseDate("/Date(-70059600000-0300)/"), 'MM/DD/YYYY HH:mm:ss')
        , '10/13/1969 00:00:00'
        , 'Message - Value: ' + (linxParseDate("/Date(-70059600000-0300)/"))
    )
    /**assert.fail(
        iml.formatDate(
            linxParseDate("/Date(-70059600000-0300)/"), 'MM/DD/YYYY HH:mm:ss')
        , '10/13/1969 00:00:00'
        , 'Message - Value: ' + (linxParseDate("/Date(-70059600000-0300)/"))
    )*/
});
it('Second Test', () => {
    assert.ok(
        iml.formatDate(
            linxParseDate("/Date(1551791859127-0300)/"), 'MM/DD/YYYY HH:mm:ss')
        , '04/05/2019 10:17:39'
        , 'Message - Value: ' + (linxParseDate("/Date(1551791859127-0300)/"))
    )
    /**assert.fail(
        iml.formatDate(
            linxParseDate("/Date(1551791859127-0300)/"), 'MM/DD/YYYY HH:mm:ss')
        , '04/05/2019 10:17:39'
        , 'Message - Value: ' + (linxParseDate("/Date(1551791859127-0300)/"))
    )*/
});