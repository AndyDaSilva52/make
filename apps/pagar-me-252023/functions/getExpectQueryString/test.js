it('should convert the properties specified                                                        ', () => {
    let result = getExpectQueryString({
        "number": [
            "amount"
        ],
        "date": [
            {
                "key": "created_at",
                "value": "2020-09-07T18:22:23.331Z",
                "op": ">="
            },
            {
                "key": "created_at",
                "value": "2020-09-07T18:22:23.331Z",
                "op": "<="
            },
            {
                "key": "updated_at",
                "value": "2020-09-07T18:22:23.331Z",
                "op": ">="
            },
            {
                "key": "updated_at",
                "value": "2020-09-07T18:22:23.331Z",
                "op": "<="
            }
        ]
    })
    assert.deepEqual(result, '?created_at=>=1599502943331&created_at=<=1599502943331&updated_at=>=1599502943331&updated_at=<=1599502943331')
});
it('should convert the properties specified undefined should not get query string                  ', () => {
    let result = getExpectQueryString({
        "number": [
            "amount"
        ],
        "date": [
            {
                "key": "created_at",
                "value": undefined,
                "op": ">="
            },
            {
                "key": "created_at",
                "value": undefined,
                "op": "<="
            },
            {
                "key": "updated_at",
                "value": undefined,
                "op": ">="
            },
            {
                "key": "updated_at",
                "value": undefined,
                "op": "<="
            }
        ]
    })
    assert.deepEqual(result, '')
});
it('should convert the properties specified with partial parameters                                ', () => {
    let result = getExpectQueryString({
        "date": [
            {
                "op": ">=",
                "key": "created_at",
                "value": "2019-01-01T02:00:00.000Z"
            },
            {
                "op": "<=",
                "key": "created_at",
                "value": "2020-09-24T01:53:36.364Z"
            },
            {
                "op": ">=",
                "key": "updated_at"
            },
            {
                "op": "<=",
                "key": "updated_at"
            }
        ],
        "number": [
            "amount"
        ]
    })
    assert.deepEqual(result, '?created_at=>=1546308000000&created_at=<=1600912416364')
});