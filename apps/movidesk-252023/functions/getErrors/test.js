it('should be deep equal for status code 400 invalid parameter Default Urgency                     ', () => {
    let result = getErrors(400, [
        {
            "errorMessage": "There is no match for the Default priority value entered",
            "propertyName": "DefaultUrgency"
        }
    ], '')
    assert.deepEqual(result, '[400]\n\n** Parameter[DefaultUrgency]\nMessage[There is no match for the Default priority value entered]' )
})
it('should be deep equal for status code 400 when invalid format of the body data                  ', () => {
    let result = getErrors(400, 'Data uploaded in an invalid format. Format the data using the specified layout','')
    assert.deepEqual(result, '[400]\n\nData uploaded in an invalid format. Format the data using the specified layout')
})