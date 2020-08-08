function getErrors(statusCode, body) {

    let errors = body.errors;

    let message = '[' + statusCode + ']';

    if (Array.isArray(errors) && errors.length) {
        errors.forEach((item, idxItem) => {
            message += ' Type[' + item[`error_type`] + '] Message[' + item[`error_message`] + ']'
        });
    } else if (typeof errors == "object" && !errors.hasOwnProperty('error_type') && !errors.hasOwnProperty('error_message')) {
        Object.keys(errors).forEach(key => {
            message += ' Field[' + key + ']'
            let messages = '';
            errors[key].forEach((item, idxItem) => {
                messages += ' Type[' + item[`error_type`] + '] Message[' + item[`error_message`] + ']'
            });
            message += messages;
        });
    }
    else {
        message += ' Type[' + errors.error_type + '] Message[' + errors.error_message + ']'
    }

    return message;
}