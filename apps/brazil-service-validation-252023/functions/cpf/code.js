function cpf(cpfNumber) {
    const BLACKLIST = new Array(
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    );

    // TODO: receber array com CPF ou CNPJ e retornar Array de Complex Object com Campo de Validação
    if (Array.isArray(cpfNumber) && cpfNumber.length) {
        return false;
    } else {
        return false;
    }

    //var x; x = cpf('000.000.000-00'); console.log(x);
    //var x; x = cpf([{ "key": "cpf", "value": "x000" }]); console.log(x);
}
