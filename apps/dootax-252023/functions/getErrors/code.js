function getErrors(statusCode, body, timezone) {
    if (!body) return

    function hasPropertyObj(obj, property_name) {
        return ((obj.hasOwnProperty(property_name) && obj[property_name] != "" && obj[property_name] != null) ? true : false)
    }

    let message = '[' + statusCode + ']'
    message += (hasPropertyObj(body, 'path') ? '\n[' + body.path + ']' : '' )

    function getMessage(input, msg) {
            msg += ('\n')
            msg += (hasPropertyObj(input, 'error') ? '\nErro['+ input['error'] +']' : '')
            msg += (hasPropertyObj(input, 'message') ? '\n**Mensagem['+ input['message'] +']' : '')
            msg += (hasPropertyObj(input, 'exception') ? '\n**Exception[' + input[`exception`] + ']' : '')
            return msg
    }

    if (Array.isArray(body) && body.length) {
        body.forEach((item, idxItem) => {
            message = getMessage(item, message)
        })
    } else {
            message = getMessage(body, message)
    }

    return message
}