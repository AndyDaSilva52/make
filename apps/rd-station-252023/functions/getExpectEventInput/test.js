it('Should be okay - first                                                     ', () => {
    let result = getExpectEventInput({
        "payload": {
            "custom_fields": [
                {
                    "name": "conversion_identifier",
                    "value": "Name of the conversion event"
                },
                {
                    "name": "name",
                    "value": "Nome"
                },
                {
                    "name": "job_title",
                    "value": "job title value"
                },
                {
                    "name": "cf_order_total_items",
                    "value": "10.00",
                    "type": "INTEGER"
                },
                {
                    "name": "cf_order_payment_amount",
                    "value": "10.00",
                    "type": "FLOAT"
                },
                {
                    "name": "email",
                    "value": "email@email.com"
                },
                {
                    "name": "state",
                    "value": "state of the contact"
                }
            ]
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    });
    assert.deepEqual(result, {
        "payload": {
            "conversion_identifier": "Name of the conversion event",
            "name": "Nome",
            "job_title": "job title value",
            "email": "email@email.com",
            "state": "state of the contact",
            "cf_order_payment_amount": 10.00,
            "cf_order_total_items": 10
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    });
});





it('Should be okay - second                                                    ', () => {
    let result = getExpectEventInput({
        "payload": {
            "custom_fields": [
                {
                    "name": "conversion_identifier",
                    "value": "Name of the conversion event"
                },
                {
                    "name": "name",
                    "value": "Nome"
                },
                {
                    "name": "job_title",
                    "value": "job title value"
                },
                {
                    "name": "email",
                    "value": "email@email.com"
                },
                {
                    "name": "state",
                    "value": "state of the contact"
                },
                {
                    "name": "legal_bases",
                    "value": [
                        {
                            "category": "data_processing",
                            "type": "pre_existent_contract"
                        },
                        {
                            "category": "communications",
                            "type": "consent",
                            "status": "granted"
                        }
                    ]
                }
            ]
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    });
    assert.deepEqual(result, {
        "payload": {
            "conversion_identifier": "Name of the conversion event",
            "name": "Nome",
            "job_title": "job title value",
            "email": "email@email.com",
            "state": "state of the contact",
            "legal_bases": [
                {
                    "category": "data_processing",
                    "type": "pre_existent_contract"
                },
                {
                    "category": "communications",
                    "type": "consent",
                    "status": "granted"
                }
            ]
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    });
});





it('Should be okay with array of objects                                       ', () => {
    let result = getExpectEventInput([{
        "payload": {
            "custom_fields": [
                {
                    "name": "conversion_identifier",
                    "value": "Name of the conversion event"
                },
                {
                    "name": "name",
                    "value": "Nome"
                },
                {
                    "name": "job_title",
                    "value": "job title value"
                },
                {
                    "name": "email",
                    "value": "email@email.com"
                },
                {
                    "name": "state",
                    "value": "state of the contact"
                },
                {
                    "name": "legal_bases",
                    "value": [
                        {
                            "category": "data_processing",
                            "type": "pre_existent_contract"
                        },
                        {
                            "category": "communications",
                            "type": "consent",
                            "status": "granted"
                        }
                    ]
                }
            ]
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    }, {
        "payload": {
            "custom_fields": [
                {
                    "name": "conversion_identifier",
                    "value": "Name of the conversion event"
                },
                {
                    "name": "name",
                    "value": "Nome"
                },
                {
                    "name": "job_title",
                    "value": "job title value"
                },
                {
                    "name": "email",
                    "value": "email@email.com"
                },
                {
                    "name": "state",
                    "value": "state of the contact"
                },
                {
                    "name": "legal_bases",
                    "value": [
                        {
                            "category": "data_processing",
                            "type": "pre_existent_contract"
                        },
                        {
                            "category": "communications",
                            "type": "consent",
                            "status": "granted"
                        }
                    ]
                }
            ]
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    },
    {
        "payload": {
            "custom_fields": [
                {
                    "name": "conversion_identifier",
                    "value": "TEST_BATCH2",
                    "type": "STRING"
                },
                {
                    "name": "email",
                    "value": "example@example.com",
                    "type": "STRING"
                },
                {
                    "name": "funnel_name",
                    "value": "default",
                    "type": "STRING"
                },
                {
                    "name": "cf_order_total_items",
                    "value": "21",
                    "type": "INTEGER"
                },
                {
                    "name": "cf_order_status",
                    "value": "Invoice",
                    "type": "STRING"
                }
                ,
                {
                    "name": "cf_order_id",
                    "value": "1234567890",
                    "type": "STRING"
                }
                ,
                {
                    "name": "cf_order_payment_amount",
                    "value": "12121",
                    "type": "FLOAT"
                }
            ]
        },
        "event_type": "ORDER_PLACED",
        "event_family": "CDP"
    }
]);
    assert.deepEqual(result, [{
        "payload": {
            "conversion_identifier": "Name of the conversion event",
            "name": "Nome",
            "job_title": "job title value",
            "email": "email@email.com",
            "state": "state of the contact",
            "legal_bases": [
                {
                    "category": "data_processing",
                    "type": "pre_existent_contract"
                },
                {
                    "category": "communications",
                    "type": "consent",
                    "status": "granted"
                }
            ]
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    }, {
        "payload": {
            "conversion_identifier": "Name of the conversion event",
            "name": "Nome",
            "job_title": "job title value",
            "email": "email@email.com",
            "state": "state of the contact",
            "legal_bases": [
                {
                    "category": "data_processing",
                    "type": "pre_existent_contract"
                },
                {
                    "category": "communications",
                    "type": "consent",
                    "status": "granted"
                }
            ]
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    },
    {
        "payload": {
            "conversion_identifier": "TEST_BATCH2",
            "email": "example@example.com",
            "funnel_name": "default",
            "cf_order_total_items": 21,
            "cf_order_status": "Invoice",
            "cf_order_id": "1234567890",
            "cf_order_payment_amount": 12121
        },
        "event_type": "ORDER_PLACED",
        "event_family": "CDP"
    }
]);
});