function getErrors(statusCode, body, timezone) {
    if (!body) return

    let errors = body

    let message = '[' + statusCode + ']'

    function hasPropertyObj(obj, property_name) {
        return ((obj.hasOwnProperty(property_name) && obj[property_name] != "" && obj[property_name] != null) ? true : false)
    }

    if (Array.isArray(errors) && errors.length) {
        errors.forEach((item, idxItem) => {
            message += ('\n\n')
            message += ('** ')
            message += (hasPropertyObj(item, 'propertyName') ? 'Parameter[' + item[`propertyName`] + ']' : '')
            
            message += (hasPropertyObj(item, 'errorMessage') ? '\nMessage[' + item[`errorMessage`] + ']' : '')
        })
    } else {
        message += ('\n\n')
        message += errors
    }

    return message
}