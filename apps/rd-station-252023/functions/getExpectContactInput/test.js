it('Should remove the property `identifier` + `value` and do not add `email`   ', () => {
    let result = getExpectContactInput({
        "name": "example.email",
        "value": "example.email@gmail.com",
        "identifier": "email"
    }, 'America/Sao_Paulo');
    assert.deepEqual(result, {
        "name": "example.email"
    });
});
it('Should remove the property `identifier` and `value` and add `email`        ', () => {
    let result = getExpectContactInput({
        "name": "example.email",
        "value": "example.email@gmail.com",
        "identifier": "uuid"
    }, 'America/Sao_Paulo');
    assert.deepEqual(result, {
        "name": "example.email",
        "email": "example.email@gmail.com"
    });
});
it('Should convert collection of custom fields                                 ', () => {
    let result = getExpectContactInput({
        "name": "example.email",
        "custom_fields": [
            {
                "name": "cf_crn",
                "value": "teste"
            }
        ]
    }, 'America/Sao_Paulo');
    assert.deepEqual(result, {
        "name": "example.email",
        "cf_crn": "teste"
    });
});
