it('should convert the properties specified with endpoint /balance                                 ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, [
        "waiting_funds.amount",
        "transferred.amount",
        "available.amount"
    ])
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 1263287.97},
        "transferred": {"amount": 4461000.00},
        "available": {"amount": 26814.71}
    })
});
it('should not convert when properties is null                                                     ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, null)
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    })
});
it('should not convert when properties is undefined                                                ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, undefined)
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    })
});
it('should not add property that doesn\'t exist at body                                             ', () => {
    let result = getExpectOutput({
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 446100000},
        "available": {"amount": 2681471}
    }, [
        "waiting_funds1",
        "transferred.amount",
        "available.amount"
    ])
    assert.deepEqual(result, {
        "object": "balance",
        "waiting_funds": {"amount": 126328797},
        "transferred": {"amount": 4461000.00},
        "available": {"amount": 26814.71}
    })
});
it('should skip property with null value                                                           ', () => {
    let result = getExpectOutput({
        "shipping": null
    }, [
        "shipping.fee"
    ])
    assert.deepEqual(result, {
        "shipping": null
    })
});
it('should convert from a string with comma                                                        ', () => {
    let result = getExpectOutput([
        {
          "object": "payable",
          "id": 1714903,
          "status": "waiting_funds",
          "amount": 24000,
          "fee": 6000,
          "anticipation_fee": 0,
          "installment": 1,
          "transaction_id": 1665560,
          "split_rule_id": "sr_cj4ir4qks00p8tp6ey5eoovhs",
          "bulk_anticipation_id": null,
          "recipient_id": "re_cj2wd5u2600fecw6eytgcbkd0",
          "payment_date": "2017-08-01T03:00:00.000Z",
          "original_payment_date": null,
          "type": "credit",
          "payment_method": "credit_card",
          "accrual_date": "2017-06-29T18:16:49.303Z",
          "date_created": "2017-06-29T18:16:49.411Z"
        },
        {
          "object": "payable",
          "id": 1714902,
          "status": "waiting_funds",
          "amount": 96000,
          "fee": 0,
          "anticipation_fee": 0,
          "installment": 1,
          "transaction_id": 1665560,
          "split_rule_id": "sr_cj4ir4qkr00p7tp6ehtrr3tij",
          "bulk_anticipation_id": null,
          "recipient_id": "re_cj2wd5ul500d4946do7qtjrvk",
          "payment_date": "2017-08-01T03:00:00.000Z",
          "original_payment_date": null,
          "type": "credit",
          "payment_method": "credit_card",
          "accrual_date": "2017-06-29T18:16:49.303Z",
          "date_created": "2017-06-29T18:16:49.411Z"
        }
      ], 'amount,fee,anticipation_fee,fraud_coverage_fee')
    assert.deepEqual(result, [
        {
          "object": "payable",
          "id": 1714903,
          "status": "waiting_funds",
          "amount": 240.00,
          "fee": 60.00,
          "anticipation_fee": 0,
          "installment": 1,
          "transaction_id": 1665560,
          "split_rule_id": "sr_cj4ir4qks00p8tp6ey5eoovhs",
          "bulk_anticipation_id": null,
          "recipient_id": "re_cj2wd5u2600fecw6eytgcbkd0",
          "payment_date": "2017-08-01T03:00:00.000Z",
          "original_payment_date": null,
          "type": "credit",
          "payment_method": "credit_card",
          "accrual_date": "2017-06-29T18:16:49.303Z",
          "date_created": "2017-06-29T18:16:49.411Z"
        },
        {
          "object": "payable",
          "id": 1714902,
          "status": "waiting_funds",
          "amount": 960.00,
          "fee": 0,
          "anticipation_fee": 0,
          "installment": 1,
          "transaction_id": 1665560,
          "split_rule_id": "sr_cj4ir4qkr00p7tp6ehtrr3tij",
          "bulk_anticipation_id": null,
          "recipient_id": "re_cj2wd5ul500d4946do7qtjrvk",
          "payment_date": "2017-08-01T03:00:00.000Z",
          "original_payment_date": null,
          "type": "credit",
          "payment_method": "credit_card",
          "accrual_date": "2017-06-29T18:16:49.303Z",
          "date_created": "2017-06-29T18:16:49.411Z"
        }
      ])
});
