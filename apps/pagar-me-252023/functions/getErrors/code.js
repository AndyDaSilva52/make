function getErrors(statusCode, body, timezone) {
    if (!body) return

    let errors = body.errors 

    let message = '[' + statusCode + ']\n[' + body.url + ']'

    function hasPropertyObj(obj, property_name) {
        return ((obj.hasOwnProperty(property_name) && obj[property_name] != "" && obj[property_name] != null) ? true : false)
    }

    if (Array.isArray(errors) && errors.length) {
        errors.forEach((item, idxItem) => {
            message += ('\n\n')
            message += ('**')
            message += (hasPropertyObj(item, 'type') ? 'Type[' + item[`type`] + ']' : '')
            message += (hasPropertyObj(item, 'parameter_name') ? ' Parameter Name[' + item[`parameter_name`] + ']' : '')
            message += ('**')
            message += (hasPropertyObj(item, 'message') ? '\nMessage[' + item[`message`] + ']' : '')
        })
    }

    return message
}