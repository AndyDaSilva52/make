API Pagar.me

[Documentação](https://docs.pagar.me/)

- Implementado:
* Saldo
* Histórico de Operações de Saldo

Na implementação de Get Balance Operation, quando houver o transaction_id, será apresentado os detalhes da transação no campo movement_object.transaction_details

Importante
- Get Transaction 
- Get Balance Operation
Os campos de metadata e antifraud_metadata foram alterados para serem um array de objeto e não mais somente um objeto.
Isso permite utilizar por exemplo a função
get(map(metadata; orderNumber);1) para obter o valor do campo orderNumber que pode ser uma chave do objeto.