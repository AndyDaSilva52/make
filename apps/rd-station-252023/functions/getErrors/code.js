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

    if (Array.isArray(errors) && errors.length) {
        errors.forEach((item, idxItem) => {
            message = message + '\n**' + ' Type[' + item[`error_type`] + '] Message[' + item[`error_message`] + ']'
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
    else if (typeof errors == "object" && errors.hasOwnProperty('error_type')) {
        message = message + '\n**' + ' Type[' + errors.error_type + '] Message[' + errors.error_message + ']'
    } else {
        message = message + '\n' + body;
    }

    return message;
}