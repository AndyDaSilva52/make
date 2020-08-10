function getExpectEventInput(input) {

    function getExpectObj(obj) {
        const body = Object.assign({}, obj);
        var payload = body.payload;

        function setValue(propertyPath, value, obj) {
            /**
             * 
             */
            if (!propertyPath) return;

            let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".");

            // Not yet at the last property so keep digging
            if (properties.length > 1) {
                // The property doesn't exists OR is not an object (and so we overwritten it) so we create it
                if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") obj[properties[0]] = {};
                // We iterate.
                return setValue(properties.slice(1), value, obj[properties[0]]);
                // This is the last property - the one where to set the value
            } else {
                // We set the value to the last property
                try {
                    obj[properties[0]] = JSON.parse(value);
                } catch (e) {
                    obj[properties[0]] = value;
                }
                return true;
            }
        }

        Object
            .keys(payload)
            .forEach(key => {
                if (key === 'custom_fields') {
                    var custom_fields = payload[key];
                    custom_fields.forEach(item => {
                        setValue(('payload.' + item['name']), item['value'], body);
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

