it('status Code 401 with array of collection about the error                   ', () => {
    let result = getErrors(401, {
        "errors": [
            {
                "error_type": "UNAUTHORIZED",
                "error_message": "Invalid token."
            },
            {
                "error_type": "ACCESS_DENIED",
                "error_message": "Wrong credentials provided."
            },
            {
                "error_type": "EXPIRED_CODE_GRANT",
                "error_message": "The authorization code grant has expired."
            }
        ]
    });

    assert.deepEqual(result, '[401]\n** Type[UNAUTHORIZED] Message[Invalid token.]\n** Type[ACCESS_DENIED] Message[Wrong credentials provided.]\n** Type[EXPIRED_CODE_GRANT] Message[The authorization code grant has expired.]\n\nFor more info: https://developers.rdstation.com/en/error-states');
});

it('status code 404 not found with only one collection                         ', () => {
    let result = getErrors(404, {
        "errors": {
            "error_type": "RESOURCE_NOT_FOUND",
            "error_message": "Lead not found."
        }
    });
    assert.deepEqual(result, '[404]\n** Type[RESOURCE_NOT_FOUND] Message[Lead not found.]\n\nFor more info: https://developers.rdstation.com/en/error-states')
});

it('status code 400 Bad Request with collection of key fields                  ', () => {
    let result = getErrors(400, {
        "errors": {
            "email": [
                {
                    "error_type": "CANNOT_BE_NULL",
                    "error_message": "email cannot be null."
                }
            ],
            "linkedin": [
                {
                    "error_type": "INVALID_FORMAT",
                    "error_message": "linkedin must use only letters, numbers, '.', '-' and '_'"
                }
            ],
            "name": [
                { "error_type": "CANNOT_BE_BLANK", "error_message": "Can not be blank" }
            ]
        }
    }
    );
    assert.deepEqual(result, '[400]\n* Field[email]\n** Type[CANNOT_BE_NULL] Message[email cannot be null.]\n* Field[linkedin]\n** Type[INVALID_FORMAT] Message[linkedin must use only letters, numbers, \'.\', \'-\' and \'_\']\n* Field[name]\n** Type[CANNOT_BE_BLANK] Message[Can not be blank]\n\nFor more info: https://developers.rdstation.com/en/error-states')
});

it('status code 422 Unprocessable Entity                                       ', () => {
    let result = getErrors(422, {
        "errors": {
            "name": [
                {
                    "error_type": "MUST_BE_STRING",
                    "error_message": "Name must be string."
                }
            ]
        }
    });
    assert.deepEqual(result, '[422]\n* Field[name]\n** Type[MUST_BE_STRING] Message[Name must be string.]\n\nFor more info: https://developers.rdstation.com/en/error-states')
});

it('status code 404 no Route matched with those values                         ', () => {
    let result = getErrors(404, {
        "message": "no Route matched with those values"
    });
    assert.deepEqual(result, '[404]\n** Message[no Route matched with those values]\n\nFor more info: https://developers.rdstation.com/en/error-states')
});

it('status code 400 field legal_bases.type Must be provided                    ', () => {
    let result = getErrors(400, {
        "errors": [
            {
                "error_type": "MISSING",
                "error_message": "Must be provided.",
                "validation_rules": {},
                "path": "$.legal_bases[0].type"
            },
            {
                "error_type": "MISSING",
                "error_message": "Must be provided.",
                "validation_rules": {},
                "path": "$.legal_bases[0].category"
            }
        ]
    });
    assert.deepEqual(result, '[400]\n** Type[MISSING] Message[Must be provided.] Path[$.legal_bases[0].type]\n** Type[MISSING] Message[Must be provided.] Path[$.legal_bases[0].category]\n\nFor more info: https://developers.rdstation.com/en/error-states');
});


it('status code 400 validation rules                                           ', () => {
    let result = getErrors(400, {
        "errors": [
            {
                "error_type": "INVALID_OPTION",
                "error_message": "Must be one of the valid options.",
                "validation_rules": {
                    "valid_options": [
                        "CONVERSION",
                        "OPPORTUNITY",
                        "OPPORTUNITY_LOST",
                        "SALE",
                        "ORDER_PLACED",
                        "ORDER_PLACED_ITEM",
                        /* ... */
                    ]
                },
                "path": "$.body.event_type"
            }
        ]
    });
    assert.deepEqual(result, '[400]\n** Type[INVALID_OPTION] Message[Must be one of the valid options.] Path[$.body.event_type] Validation Rules[{"valid_options":["CONVERSION","OPPORTUNITY","OPPORTUNITY_LOST","SALE","ORDER_PLACED","ORDER_PLACED_ITEM"]}]\n\nFor more info: https://developers.rdstation.com/en/error-states');
});