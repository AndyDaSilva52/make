function pagarmeConvertNumberObjKey(obj, keys) {
    /**
     * keys is separeted with comma (,)
     */
    function pagarmeConvertNumber(value) {
        let isNegative = (String(value).indexOf('-') == -1) ? false : true;

        if (!value && value != 0) {
            return null;
        }

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

    function convertValue(propertyPath, obj) {

        let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".")

        // Not yet at the last property so keep digging
        if (properties.length > 1) {
            // The property doesn't exists OR is not an object (and so we overwritte it) so we create it
            if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") return true;//obj[properties[0]] = {}
            // We iterate.
            return convertValue(properties.slice(1), obj[properties[0]])
            // This is the last property - the one where to set the value
        } else {
            // We set the value to the last property
            var value = new Number(obj[properties[0]]);
            value = +value ? value : 0;
            value = pagarmeConvertNumber(value);

            obj[properties[0]] = value
            return true // this is the end
        }

    }

    keys = keys || "";

    if (Array.isArray(obj) && obj.length) {
        listKeys = keys.split(',');

        listKeys.forEach((key, idxKey) => {
            obj.forEach((itemObj, idxObj) => {
                convertValue(key, obj[idxObj]);
            });
        });
    } else if (obj instanceof Object) {
        listKeys = keys.split(',');

        listKeys.forEach((key, idxKey) => {
            convertValue(key, obj);
        });
    } else if (typeof obj == 'number') {
        return pagarmeConvertNumber(obj);
    } else {
        //return (obj instanceof String);
        //return (obj instanceof Number);
        return obj;
    }

    return obj;
}