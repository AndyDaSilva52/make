it('Should be okay                                                   ', () => {
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
            "state": "state of the contact"
        },
        "event_type": "CONVERSION",
        "event_family": "CDP"
    });
});





it('Should be okay                                                   ', () => {
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





it('Should be okay with array of objects                             ', () => {
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
    }]);
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
    }]);
});

/**
 "conversion_identifier": "Name of the conversion event",
    "name": "Nome",
    "email": "email@email.com",
    "job_title": "job title value",
    "state": "state of the contact",
    "city": "city of the contact",
    "country": "country of the contact",
    "personal_phone": "phone of the contact",
    "mobile_phone": "mobile_phone of the contact",
    "twitter": "twitter handler of the contact",
    "facebook": "facebook name of the contact",
    "linkedin": "linkedin user name of the contact",
    "website": "website of the contact",
    "cf_custom_field_api_identifier": "custom field value",
    "company_name": "company name",
    "company_site": "company website",
    "company_address": "company address",
    "client_tracking_id": "lead tracking client_id",
    "traffic_source": "Google",
    "traffic_medium": "cpc",
    "traffic_campaign": "easter-50-off",
    "traffic_value": "easter eggs",
    "tags": ["mql", "2019"],
    "available_for_mailing": true,
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
 */