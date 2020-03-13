function textAgg(arrayItems, property, prefix, sufix) {
    /**
     * Aggregate into String an Array with preffix and suffix
     * Ex: 
     *     textAgg(
     *          [{"ProductID": 98152},{"ProductID": 98153}]
     *          ,'ProductID', 'ProductID = ', ' || ')
     *     Result: ProductID = 98152 || ProductID = 98153
     * @param {Array} arrayItems 
     * @param {strin} property
     * @param {string} prefix
     * @param {string} suffix
     */

    if (Array.isArray(arrayItems) && arrayItems.length) {
        // TODO: Check if this is an Array of Object or Number/String
        arrayItems = iml.map(iml.distinct(arrayItems, property), property);

        var arrayItems = arrayItems.map(el => prefix + el);
        var arrayItems = arrayItems.join(sufix);
        return arrayItems;
    } else {
        return null;
    }
}