function getExpectOutput(body, properties_path) {

    function convertToNumber(value) {
        let isNegative = (String(value).indexOf('-') == -1) ? false : true;

        if (!value && value != 0) { return null; }

        if (String(value).indexOf('.') != -1) {
            let fixedNumber = Math.abs(Number(value).toFixed());
            value = String(fixedNumber);
        }

        var strNumber = '';
        strNumber = strNumber + String(value).replace('-', '').substring(0, String(value).replace('-', '').length - 2);
        strNumber = strNumber + '.';
        strNumber = strNumber + String(value).replace('-', '').substring(String(value).replace('-', '').length - 2);

        value = +strNumber;

        return isNegative ? (Math.abs(value) * -1) : Math.abs(value);
    }

    
    function setValue(propertyPath, obj) {
        let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".")
        
        if (!obj || !obj.hasOwnProperty(properties[0])) return true
        
        if (properties.length > 1) {
            if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") return true;

            return setValue(properties.slice(1), obj[properties[0]])
        } else {
            var value = new Number(obj[properties[0]]);
            value = +value ? value : 0;
            value = convertToNumber(value);

            obj[properties[0]] = value
            return true
        }
    }

    listKeys = (Array.isArray(properties_path) && properties_path.length) ? properties_path : (typeof properties_path == "string") ? properties_path.split(',') : [];

    if (Array.isArray(body) && body.length) {
        listKeys.forEach((key, idxKey) => {
            body.forEach((itemObj, idxObj) => {
                setValue(key, body[idxObj]);
            });
        });
    } else if (body instanceof Object) {
        listKeys.forEach((key, idxKey) => {
            setValue(key, body);
        });
    } else if (typeof body == 'number') {
        return convertToNumber(body);
    } else {
        //return (body instanceof String);
        //return (body instanceof Number);
        return body;
    }

    return body;

}