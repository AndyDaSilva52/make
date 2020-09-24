it('remove properties with array                                                                   ', () => {
    let result = removeProperties({
        "count": 100,
        "status": "paid",
        "date_created_to": "2020-09-20T03:00:00.000Z",
        "date_created_from": "2020-09-01T03:00:00.000Z",
        "page": 1
    },['date_created_to', 'date_created_from'])
    assert.deepEqual(result, {
        "count": 100,
        "status": "paid",
        "page": 1
    })
});
it('remove properties with string                                                                  ', () => {
    let result = removeProperties({
        "count": 100,
        "status": "paid",
        "date_created_to": "2020-09-20T03:00:00.000Z",
        "page": 1
    },'date_created_to')
    assert.deepEqual(result, {
        "count": 100,
        "status": "paid",
        "page": 1
    })
});
it('remove properties with undefined                                                               ', () => {
    let result = removeProperties({
        "count": 100,
        "status": "paid",
        "page": 1
    },undefined)
    assert.deepEqual(result, {
        "count": 100,
        "status": "paid",
        "page": 1
    })
});
it('remove just one property of list of four properties                                            ', () => {
    let result = removeProperties({
        "count": 100,
        "status": "paid",
        "date_created_to": "2020-09-20T03:00:00.000Z",
        "page": 1
    },['date_created_from','date_created_to','date_updated_from','date_updated_to'])
    assert.deepEqual(result, {
        "count": 100,
        "status": "paid",
        "page": 1
    })
});