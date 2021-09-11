function getErrors(statusCode, body, timezone) {
    if (!body) return

    function hasPropertyObj(obj, property_name) {
        return ((obj.hasOwnProperty(property_name) && obj[property_name] !== "" && obj[property_name] !== null) ? true : false)
    }

    message = (statusCode) ? ( '[' + statusCode + ']' ) : ''

    if (Array.isArray(body) && body.length) {
        // TODO: Retornar os erros 
    } else if (typeof body == "object") {

        message += (hasPropertyObj(body, 'title')) ? ( '[' + body[`title`] + ']' ) : ''
        
        message += (hasPropertyObj(body, 'type')) ? ( '\n\n[Type](' + body[`type`] + ')' ) : ''

        message += (hasPropertyObj(body, 'traceId')) ? ( '\n\n[Trace ID][' + body[`traceId`] + ']' ) : ''
        
    }

    return message
}