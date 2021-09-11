it('shoud be equal for status code 404 recourse not found                                                               ', () => {
    
    let result = getErrors(404, {
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.4",
        "title": "Not Found",
        "status": 404,
        "traceId": "00-e5694acbf0155941aeda8b0cf797d8ef-b075b8555b021e41-00"
    }, '')

    assert.deepEqual(result, '[404][Not Found]\n\n[Type](https://tools.ietf.org/html/rfc7231#section-6.5.4)\n\n[Trace ID][00-e5694acbf0155941aeda8b0cf797d8ef-b075b8555b021e41-00]');

}
)
/** 
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.13",
    "title": "Unsupported Media Type",
    "status": 415,
    "traceId": "00-075559ea37faa04dbc6ac1a0f85fcb20-db237d9165370741-00"
}
Happens when no Body is sent at request and it's mandatory
*/
/** 
{
    "errors": {
        "Queue": [
            "The Queue field is required."
        ]
    },
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "00-06dd9575f2da874ea300c73b39a79151-cc71e49dd1baf642-00"
}

Happens when one field is not sent at the request like in this example the Queue
*/
/** Status Code = 404
{
    "error": {
        "code": "OMS007",
        "message": "Order Not Found",
        "exception": null
    }
}
 */