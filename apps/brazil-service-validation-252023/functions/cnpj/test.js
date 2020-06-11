it('FALSO para CNPJ não definido                                     ', () => {
    let result = cnpj(undefined);
    assert.equal(result, false);
})
it('FALSO para CNPJ nulo                                             ', () => {
    let result = cnpj(null);
    assert.equal(result, false);
})
it('FALSO para CNPJ que não tem 14 caracteres numéricos              ', () => {
    let result = cnpj('01234567890123456');
    assert.equal(result, false);
})
it('FALSO para CNPJ com todos caracteres iguais                      ', () => {
    let result = cnpj(00000000000000);
    assert.equal(result, false);
})
it('FALSO para CNPJ vazio                                            ', () => {
    let result = cnpj('');
    assert.equal(result, false);
})
it('VERDADEIRO para CNPJ com string formatada                        ', () => {
    let result = cnpj('54.550.752/0001-55');
    assert.equal(result, true);
})
it('VERDADEIRO para CNPJ com string não formatada                    ', () => {
    let result = cnpj('54.550.752/0001-55');
    assert.equal(result, true);
})
it('VERDADEIRO para CNPJ com string não confusa                      ', () => {
    let result = cnpj('54550[752#0001..$55');
    assert.equal(result, true);
})