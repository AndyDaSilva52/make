it('should convert the properties specified                                                        ', () => {
    let result = getExpectInput({
        "count": 10,
        "amount": 273.8,
        "customer": {},
        "date_updated": "2020-09-07T18:22:23.331Z",
        "page": 1
    }, {
        "number": [
            "amount",
            "authorized_amount",
            "paid_amount",
            "refunded_amount"
        ],
        "date": [
            "date_updated"
        ],
        "array_key_value_to_collection": [
            "metadata"
        ]
    })
    assert.deepEqual(result, {
        "count": 10,
        "amount": 27380,
        "customer": {},
        "date_updated": "1599502943331",
        "page": 1
    })
});
it('should convert the properties specified with array to collection                               ', () => {
    let result = getExpectInput({
        "id": 235552458,
        "nsu": "235552458",
        "tid": "235552458",
        "count": 10,
        "amount": 273.80,
        "metadata": [
            {
                "key": "orderNumber",
                "value": "200633"
            }
        ],
        "card_brand": "mastercard",
        "date_created": ">=1599502943331",
        "date_updated": ">=1599502943331",
        "installments": "6",
        "capture_method": "ecommerce",
        "payment_method": "credit_card",
        "page": 1
    }, {
        "number": [
            "amount",
            "authorized_amount",
            "paid_amount",
            "refunded_amount"
        ],
        "array_key_value_to_collection": [
            "metadata"
        ]
    })
    assert.deepEqual(result, {
        "id": 235552458,
        "nsu": "235552458",
        "tid": "235552458",
        "count": 10,
        "amount": "27380",
        "metadata": {
            "orderNumber": "200633"
        },
        "card_brand": "mastercard",
        "date_created": ">=1599502943331",
        "date_updated": ">=1599502943331",
        "installments": "6",
        "capture_method": "ecommerce",
        "payment_method": "credit_card",
        "page": 1
    })
});