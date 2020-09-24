function getExpectInput(input, expect_input) {

    function convertNumber(value) {
        return (value != null) ? new String(value.toFixed(2)).replace('.', '') : value;
    }

    function convertDate(value) {
        // ToUnixTimeStamp
        return new Date(value).getTime()
    }

    function setValue(propertyPath, obj, typ) {
        let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".")

        if (!obj || !obj.hasOwnProperty(properties[0])) return true

        if (properties.length > 1) {
            if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") return true;

            return setValue(properties.slice(1), obj[properties[0]])
        } else {
            var value = ((typ == 'number') ? convertNumber(obj[properties[0]]) : (typ == 'date') ? convertDate(obj[properties[0]]) : obj[properties[0]])

            obj[properties[0]] = value
            return true
        }
    }

    function setInput(obj, k, type) {
        if (Array.isArray(obj) && obj.length) {
            input.forEach((itemObj, idxObj) => {
                setValue(k, obj[idxObj], type)
            })
        } else {
            setValue(k, obj, type)
        }
    }

    var keysNumber = expect_input['number'] || []
    var keysDate = expect_input['date'] || []
    var keysArray = expect_input['array_key_value_to_collection'] || []

    if (Array.isArray(keysNumber) && keysNumber.length) {
        keysNumber.forEach((key, idxKey) => {
            if (input.hasOwnProperty(key)) {
                setInput(input, key, 'number')
            }
        })
    }

    if (Array.isArray(keysDate) && keysDate.length) {
        keysDate.forEach((key, idxKey) => {
            if (input.hasOwnProperty(key)) {
                setInput(input, key, 'date')
            }
        })
    }
    
    if (Array.isArray(keysArray) && keysArray.length) {
        keysArray.forEach((key, idxKey) => {
            if (input.hasOwnProperty(key)) {
                input[key] = input[key].reduce(function (map, obj) {
                    map[obj['key']] = obj['value']
                    return map
                }, {})
            }
        })
    }

    // TODO: remove any empty property like `customer: {}`
    return input

}