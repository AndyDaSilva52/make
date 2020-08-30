function getExpectContactInput(input, timezone) {
    const body = Object.assign({}, input);

    function setValue(propertyPath, value, obj) {
        
        if (!propertyPath) return;

        let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".")

        if (properties.length > 1) {

            if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") obj[properties[0]] = {}
            
            return setValue(properties.slice(1), value, obj[properties[0]])
            
        } else {

            try {
                obj[properties[0]] = JSON.parse(value);
            } catch (error) {
                obj[properties[0]] = value;
            }

            return true
        }

    }

    Object
        .keys(body)
        .forEach(key => {
            if ((key === 'identifier') || key === 'value') {
                delete body[key];
            }
            if (key === 'custom_fields') {
                var custom_fields = body[key];
                custom_fields.forEach(item => {
                    setValue(item['name'], item['value'], body);
                });
                delete body[key];
            }
        });

    return body;
}