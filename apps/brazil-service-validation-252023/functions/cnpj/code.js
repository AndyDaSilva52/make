function cnpj(value) {

    const BLACKLIST = new Array(
        ''
    );

    function isValid(s) {
        if (!s) return false;

        let cnpj = new String(s).replace(/[^\d]+/g, '');

        if (cnpj.length !== 14) return false;

        // if all are the same char its false
        if (/^(\d)\1+$/.test(cnpj)) return false;

        if (BLACKLIST.includes(cnpj)) return false;

        // Valida DVs
        len = cnpj.length - 2
        number = cnpj.substring(0, len);
        digits = cnpj.substring(len);
        sum = 0;
        pos = len - 7;
        for (i = len; i >= 1; i--) {
            sum += number.charAt(len - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0))
            return false;

        len = len + 1;
        number = cnpj.substring(0, len);
        sum = 0;
        pos = len - 7;
        for (i = len; i >= 1; i--) {
            sum += number.charAt(len - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(1))
            return false;

        return true;
    }

    // TODO: trabalhar também com Array, onde deve retornar um Array de Objeto.
    // EX: recebe ['539673600000123', '53.967.360/000395', '53967360/000201']
    // ou [{ "value": "53967360000123" }, { "value": "53967360000395" }]
    // retorna [{ "value": "53967360000123", "isValid": true }, { "value": "53967360000395", "isValid": true }]
    if (Array.isArray(value) && value.length) {
        return false;
    } else {
        return isValid(value);
    }
    /**
    var x = '53967360000123'; console.log(cnpj(x));
    var x = 53967360000123; console.log(cnpj(x));
    
    var x = 0000000000000; console.log(cnpj(x));
    var x = 12345678901234; console.log(cnpj(x));
    var x = 5396736000012; console.log(cnpj(x));
    var x = ['539673600000123', '53.967.360/000395', '53967360/000201']; console.log(cnpj(x));
    var x = [{ "value": "53967360000123" }, { "value": "53967360000395" }]; console.log(cnpj(x));
     */
}
