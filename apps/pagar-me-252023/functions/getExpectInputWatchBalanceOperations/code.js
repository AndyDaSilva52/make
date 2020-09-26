function getExpectInputWatchBalanceOperations(input) {
    var filter = []

    if (input.status.waiting_funds) {
        filter.push({
            "term": {
                "status": "waiting_funds"
            }
        })
    }

    if (input.status.available) {
        filter.push({
            "term": {
                "status": "available"
            }
        })
    }

    if (input.status.transferred) {
        filter.push({
            "term": {
                "status": "transferred"
            }
        })
    }

    return new Object(
    {
        "type": "balance_operation",
        "query": {
            "query": {
                "filtered": {
                    "query": {
                        "match_all": {}
                    },
                    "filter": {
                        "bool": {
                            "must": filter
                        }
                    }
                }
            },
            "sort": [
                {
                    "date_created": {
                        "order": "desc"
                    }
                }
            ],
            "size": 500,
            "from": 0
        }
    })

}