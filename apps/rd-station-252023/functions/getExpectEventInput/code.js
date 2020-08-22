function getExpectEventInput(input) {

    function getExpectObj(obj) {
        const body = Object.assign({}, obj);
        var payload = body.payload;

        function setValue(propertyPath, value, obj, typ) {
            /**
             * 
             */
            if (!propertyPath) return;

            let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".");

            // Not yet at the last property so keep digging
            if (properties.length > 1) {
                // The property doesn't exists OR is not an object (and so we overwritten it) so we create it
                if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") obj[properties[0]] = {};
                
                return setValue(properties.slice(1), value, obj[properties[0]]);
            } else {
                // We set the value to the last property
                if (typ != 'FLOAT' && typ != 'INTEGER') {
                    value = JSON.stringify(value)
                    try {
                        obj[properties[0]] = JSON.parse(value)
                    } catch (e) {
                        obj[properties[0]] = value.toString()
                    }
                } else { obj[properties[0]] = ((typ == 'FLOAT') ? parseFloat(value) : (typ == 'INTEGER') ? parseInt(value) : Number(value)) }
                return true
            }
        }

        Object
            .keys(payload)
            .forEach(key => {
                if (key === 'custom_fields') {
                    var custom_fields = payload[key];
                    custom_fields.forEach(item => {
                        setValue(('payload.' + item['name']), (item['value']), body, item['type']);
                    });
                    delete payload[key];
                }
            });

        return body;
    }

    function getExpect(obj) {
        if (Array.isArray(obj) && obj.length) {
            obj.forEach((item, idxItem) => {
                obj[idxItem] = getExpectObj(item);
            });
            return obj;
        } else {
            return getExpectObj(obj);
        }
    }

    if (!input) return input;

    return getExpect(input);

}