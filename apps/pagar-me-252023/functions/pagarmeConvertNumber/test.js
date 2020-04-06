it('should return null when undefined                                           ', () => {
    let result = pagarmeConvertNumber(undefined);
    assert.equal(result, null);
})
it('should return 0                                                             ', () => {
    let result = pagarmeConvertNumber(0);
    assert.equal(result, 0);
});
it('should return number                                                        ', () => {
    let result = pagarmeConvertNumber('0');
    assert.equal(result, 0);
});
it('should return fixed number                                                  ', () => {
    let result = pagarmeConvertNumber(1092900.00000000001);
    assert.equal(result, 10929);
});
it('should return negative number                                               ', () => {
    let result = pagarmeConvertNumber(-1092900.00000000001);
    assert.equal(result, -10929);
});
it('should return negative number (string)                                      ', () => {
    let result = pagarmeConvertNumber('-1092900.00000000001');
    assert.equal(result, -10929);
});
it('should return positive number with two decimal places                       ', () => {
    let result = pagarmeConvertNumber(1234);
    assert.equal(result, 12.34);
});
it('should return negative number with two decimal places                       ', () => {
    let result = pagarmeConvertNumber(-1234);
    assert.equal(result, -12.34);
});
it('should return positive number with two decimal places - two positions only  ', () => {
    let result = pagarmeConvertNumber(78);
    assert.equal(result, 0.78);
});
it('should return negative number with two decimal places - two positions only  ', () => {
    let result = pagarmeConvertNumber(-78);
    assert.equal(result, -0.78);
});
it('should return negative number with two decimal places                       ', () => {
    let result = pagarmeConvertNumber(-155);
    assert.equal(result, -1.55);
});