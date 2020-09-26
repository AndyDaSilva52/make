function removeProperties(input, properties) {
    input = Object(input) || {}
    
    if (!properties) return input

    if (Array.isArray(properties) && properties.length) {
        properties.forEach((key, idxKey) => {
            if (input.hasOwnProperty(key)) {
                delete input[key]
            }
        })
    } else {
        if (input.hasOwnProperty(properties)) {
            delete input[properties]
        }
    }

    return input
}