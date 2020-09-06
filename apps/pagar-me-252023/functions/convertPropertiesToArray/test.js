it('should return the properties inside of array                                                   ', () => {
    let result = convertPropertiesToArray({
        "object": "transaction",
        "split_rules": null,
        "metadata": {
            "orderNumber": "194499"
        },
        "antifraud_metadata": {},
        "reference_key": null
    }, [
        "metadata",
        "antifraud_metadata"
    ])
    assert.deepEqual(result, {
        "object": "transaction",
        "split_rules": null,
        "metadata": [{
            "orderNumber": "194499"
        }],
        "antifraud_metadata": [{}],
        "reference_key": null
    })
});
it('should return the properties inside of array passing property that does not exist at body      ', () => {
    let result = convertPropertiesToArray({
        "object": "transaction",
        "split_rules": null,
        "metadata": {
            "orderNumber": "194499"
        },
        "antifraud_metadata": {},
        "reference_key": null
    }, [
        "metadata",
        "antifraud_metadata",
        "custom"
    ])
    assert.deepEqual(result, {
        "object": "transaction",
        "split_rules": null,
        "metadata": [{
            "orderNumber": "194499"
        }],
        "antifraud_metadata": [{}],
        "reference_key": null
    })
});