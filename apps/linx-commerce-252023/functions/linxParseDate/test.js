it('First Test 5 de Março de 2019 às 10:17:39.127', () => {
    assert.ok(linxParseDate("/Date(1551791859127-0300)/") == new Date(2019, 4, 5, 10, 17, 39, 127));
})