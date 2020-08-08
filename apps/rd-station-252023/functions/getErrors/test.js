it('status Code 404 with array of collection about the error            ', () => {
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

    assert.deepEqual(result, '[401] Type[UNAUTHORIZED] Message[Invalid token.] Type[ACCESS_DENIED] Message[Wrong credentials provided.] Type[EXPIRED_CODE_GRANT] Message[The authorization code grant has expired.]');
});

it('status code 404 not found with only one collection                  ', () => {
    let result = getErrors(404, {
        "errors": {
            "error_type": "RESOURCE_NOT_FOUND",
            "error_message": "Lead not found."
        }
    });
    assert.deepEqual(result, '[404] Type[RESOURCE_NOT_FOUND] Message[Lead not found.]')
});

it('status code 400 Bad Request with collection of key fields           ', () => {
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
    assert.deepEqual(result, '[400] Field[email] Type[CANNOT_BE_NULL] Message[email cannot be null.] Field[linkedin] Type[INVALID_FORMAT] Message[linkedin must use only letters, numbers, \'.\', \'-\' and \'_\'] Field[name] Type[CANNOT_BE_BLANK] Message[Can not be blank]')
});

it('status code 422 Unprocessable Entity                                ', () => {
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
    assert.deepEqual(result, '[422] Field[name] Type[MUST_BE_STRING] Message[Name must be string.]')
});