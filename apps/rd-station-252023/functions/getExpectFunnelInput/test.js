it('Should remove the property `identifier` + `value` and `funnel_name`   ', () => {
    let result = getExpectFunnelInput({
        "identifier": "uuid",
        "value": "c4e0068b-e589-449d-8be2-7b5481376d63",
        "funnel_name": "default"
    });
    assert.deepEqual(result, {});
});