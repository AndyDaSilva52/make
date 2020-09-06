function convertPropertiesToArray(input, properties_path) {

    function setArray(propertyPath, obj) {

        let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".")

        if (!obj.hasOwnProperty(properties[0])) return true

        if (properties.length > 1) {
            if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") return true;

            return setArray(properties.slice(1), obj[properties[0]])
        } else {
            obj[properties[0]] = [obj[properties[0]]]
            
            return true
        }
    }

    listKeys = (Array.isArray(properties_path) && properties_path.length) ? properties_path : (typeof properties_path == "string") ? keys.split(',') : [];

    if (Array.isArray(input) && input.length) {
       return input 
    } else if (input instanceof Object) {
        listKeys.forEach((key, idxKey) => {
            setArray(key, input)
        })

        return input
    } else {
        return input
    }
}