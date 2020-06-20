function cnpj(value) {

    const BLACKLIST = new Array(
        ''
    );

    function isValid(s) {
        if (!s) return false;

        let cnpj = new String(s).replace(/[^\d]+/g, '');

        if (cnpj.length !== 14) return false;

        // se todos caracteres são o mesmo retorna falso
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
        var newArray = new Array();

        value.forEach((item, idx) => {

            var cnpj = new String(item);

            var valid = isValid(cnpj);

            newArray[idx] = { "cnpj": item, "isValid": valid };
        });

        return newArray;

    } else {
        return isValid(value);
    }
}
