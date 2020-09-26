it('should be equal                                                            ', () => {
    let result = getErrors(500, {
        "timestamp": "2020-09-16T10:34:10.583+0000",
        "status": 500,
        "error": "Internal Server Error",
        "exception": "fluxit.dootax.framework.exception.ApplicationException",
        "message": "Ao menos um campo deve ser informado.",
        "path": "/api/v2/doodoc/pagtrib/payment/detail"
    }, '')
    assert.deepEqual(result, '[500]\n[/api/v2/doodoc/pagtrib/payment/detail]\n\nErro[Internal Server Error]\n**Mensagem[Ao menos um campo deve ser informado.]\n**Exception[fluxit.dootax.framework.exception.ApplicationException]')
})
it('should be equal without exception                                          ', () => {
    let result = getErrors(404, {
        "timestamp": "2020-09-16T21:58:28.285+0000",
        "status": 404,
        "error": "Not Found",
        "message": "No message available",
        "path": "/api/v2/doodoc/pagtrib/upload/payment/result/"
    }, '')
    assert.deepEqual(result, '[404]\n[/api/v2/doodoc/pagtrib/upload/payment/result/]\n\nErro[Not Found]\n**Mensagem[No message available]')
})