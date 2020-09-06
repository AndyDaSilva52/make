it('should be deep equal for status code 400 invalid api_key                                       ', () => {
    let result = getErrors(400, {
        "errors": [
            {
                "message": "the api_key is missing",
                "parameter_name": "api_key",
                "type": "invalid_parameter"
            }
        ],
        "method": "get",
        "url": "/transactions"
    }, '')
    assert.deepEqual(result, '[400]\n[/transactions]\n\n**Type[invalid_parameter] Parameter Name[api_key]**\nMessage[the api_key is missing]')
});
it('should be deep equal for status code 400 invalid parameter query string                        ', () => {
    let result = getErrors(400, {
        "errors": [
            {
                "type": "invalid_parameter",
                "parameter_name": "",
                "message": "Formato inválido. Envie uma query string ou um JSON válidos"
            }
        ],
        "method": "POST",
        "url": "/transactions"
    }, '')
    assert.deepEqual(result, '[400]\n[/transactions]\n\n**Type[invalid_parameter]**\nMessage[Formato inválido. Envie uma query string ou um JSON válidos]')
});
it('should be deep equal for status code 404 resource not found for balance/operations             ', () => {
    let result = getErrors(404, {
        "errors": [
            {
                "type": "not_found",
                "parameter_name": null,
                "message": "BalanceOperation não encontrada"
            }
        ],
        "url": "/balance/operations/1",
        "method": "get"
    }, '')
    assert.deepEqual(result, '[404]\n[/balance/operations/1]\n\n**Type[not_found]**\nMessage[BalanceOperation não encontrada]')
});

