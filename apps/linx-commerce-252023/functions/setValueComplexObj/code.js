function setValueComplexObj(propertyPath, value, obj) {
    /**
     * 
     */

    let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".")

    // Not yet at the last property so keep digging
    if (properties.length > 1) {
        // The property doesn't exists OR is not an object (and so we overwritte it) so we create it
        if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") obj[properties[0]] = {}
        // We iterate.
        return setValue(properties.slice(1), value, obj[properties[0]])
        // This is the last property - the one where to set the value
    } else {
        // We set the value to the last property
        obj[properties[0]] = value
        return true // this is the end
    }

}