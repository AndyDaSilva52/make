function getErrors(statusCode, body) {

    let errors = body.errors;

    let message = '[' + statusCode + ']';

    function IsJsonString(value) {
        try {
            JSON.parse(value);
        } catch (e) {
            return false;
        }
        return true;
    }

    function isObjectEmpty(obj) {
        return (
            Object.prototype.toString.call(obj) === '[object Object]' &&
            JSON.stringify(obj) === '{}'
        );
    }

    if (Array.isArray(errors) && errors.length) {
        errors.forEach((item, idxItem) => {
            message += ('\n**' + ' Type[' + item[`error_type`] + '] Message[' + item[`error_message`] + ']');
            if (item.hasOwnProperty('path')) {
                message += (' Path[' + item[`path`] + ']');
            }
            if (typeof item['validation_rules'] == 'object' && item.hasOwnProperty('validation_rules') && !isObjectEmpty(item['validation_rules'])) {
                message += (' Validation Rules[' +
                    JSON.stringify(item[`validation_rules`]) +
                    ']');
            }
        });
    } else if (typeof errors == "object" && !errors.hasOwnProperty('error_type') && !errors.hasOwnProperty('error_message')) {
        Object.keys(errors).forEach(key => {
            message += ('\n*' + ' Field[' + key + ']');
            let messages = '';
            errors[key].forEach((item, idxItem) => {
                messages += ('\n**' + ' Type[' + item[`error_type`] + '] Message[' + item[`error_message`] + ']');
            });
            message += messages;
        });
    }
    else if (typeof errors == "object" && (errors.hasOwnProperty('error_type'))) {
        message += ('\n**' + ' Type[' + errors.error_type + '] Message[' + errors.error_message + ']');
    } else if (typeof body == "object" && (body.hasOwnProperty('message'))) {
        message = message + '\n**' + ' Message[' + body.message + ']'
    } else if (typeof body == "object" && IsJsonString(body)) {
        message = message + '\n**' + ' ' + JSON.stringify(body)
    } else if (typeof body == "object" && !IsJsonString(body)) {
        message = message + '\n**' + ' ' + JSON.stringify(body)
    } else {
        message = message + '\n' + body;
    }

    return (message + '\n\nFor more info: https://developers.rdstation.com/en/error-states');
   
}