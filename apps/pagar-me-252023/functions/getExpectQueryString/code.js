function getExpectQueryString(input) {

    let qs = ''

    function convertDate(value) {
        // ToUnixTimeStamp
        if (!value) return null

        return new Date(value).getTime()
    }

    function setQueryString(q, property, prefix, value) {
        if (!value) return q

        var qs_prop = (property + '=' + prefix + value)
        
        q = q + ( ( q.indexOf('?') ? ('?') : '&') + qs_prop)

        return q
    }

    var keysDate = input['date'] || []

    if (Array.isArray(keysDate) && keysDate.length) {
        keysDate.forEach((dateObj, idxArDate) => {
            if (convertDate(dateObj['value'])) {
                qs = setQueryString(qs, dateObj['key'], dateObj['op'], convertDate(dateObj['value']) )
                //console.log(qs)
            }
        })
    }

    return qs;
}