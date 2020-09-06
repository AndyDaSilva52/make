it('should convert the properties specified with endpoint /balance                                 ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, [
        "waiting_funds.amount",
        "transferred.amount",
        "available.amount"
    ])
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 1263287.97},
        "transferred": {"amount": 4461000.00},
        "available": {"amount": 26814.71}
    })
});
it('should not convert when properties is null                                                     ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, null)
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    })
});
it('should not convert when properties is undefined                                                ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, undefined)
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    })
});
it('should not add property that doesn\'t exist at body                                             ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, [
        "waiting_funds1",
        "transferred.amount",
        "available.amount"
    ])
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 4461000.00},
        "available": {"amount": 26814.71}
    })
});
it('should skip property with null value                                                           ', () => {
    let result = getExpectOutput({
        "shipping": null
    }, [
        "shipping.fee"
    ])
    assert.deepEqual(result, {
        "shipping": null
    })
});
