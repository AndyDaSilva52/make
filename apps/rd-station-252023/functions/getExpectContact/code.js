function getExpectContact(fields, type) {

    function getExpect(input, typ) {
        var results = []
        
        if (typ == 'interface') {results.push({"name": "uuid","label": "UUID","type": "text"})}

        if (typ == 'expect') {}
        input
        //.filter(f => {return true})
        .sort(function (a, b) { return a.uuid < b.uuid ? -1 : a.uuid > b.uuid ? 1 : 0 })
        .forEach(f => {
            const data = { name: f.api_identifier, label: f.label.default, type: 'text'}
            switch (f.data_type) {
            case 'BOOLEAN': {
              switch (f.presentation_type) {
                case 'CHECK_BOX': {
                  data.type = 'boolean'
                  data.required = true
                  break
                }
              }
              break
            }
            case 'STRING': {
              switch (f.presentation_type) {
                case 'TEXT_INPUT': {
                  break
                }
                case 'EMAIL_INPUT': {
                  data.type = 'email'
                  break
                }
                case 'PHONE_INPUT': {
                  data.type = 'text'
                  break
                }
                case 'URL_INPUT': {
                  data.type = 'url'
                  break
                }
                case 'RADIO_BUTTON': {
                  data.type = 'select'
                  data.multiple = false
                  data.options = f.validation_rules.valid_options.map(item => ({ label: item.label.default, value: item.value }))
                  break
                }
                case 'COMBO_BOX': {
                  data.type = 'select'
                  data.dynamic = true
                  data.multiple = false
                  data.options = f.validation_rules.valid_options.map(item => ({ label: item.label.default, value: item.value }))
                  break
                }
                case 'TEXT_AREA': {
                  data.multiline = 'true'
                }
              }
              break
            }
            case 'STRING[]': {
              switch (f.presentation_type) {
                case 'MULTIPLE_CHOICE': {
                  data.type = 'select'
                  data.dynamic = true
                  data.multiple = true
                  data.options = f.validation_rules.valid_options.map(item => ({ label: item.label.default, value: item.value }))
                  break
                }
              }
              break
            }
            case 'SET': {
                switch (f.presentation_type) {
                    case 'TEXT_INPUT': {
                        data.type = 'array'
                        data.spec = {}
                        data.spec.type = 'text'
                        break
                    }
                }
                break
            }
            case 'INTEGER': {
                // presentation_type: 'NUMBER_INPUT'
                data.type = 'number'
            }
          }
          results.push(data)
        });
        results.push({"name": "extra_emails","label": "Extra Emails","type": "array","spec": {"type": "text"}});
        results.push({"name": "legal_bases","label": "Legal Bases","type": "array", "spec": {
          "type": "collection","spec": [{"name": "category","label": "Category","type": "select", "options": [{"label": "data_processing","value": "data_processing"},{"label": "communications","value": "communications"}]},
          {"name": "type","label": "Type","type": "select","options": [{"label": "pre_existent_contract","value": "pre_existent_contract"},{"label": "consent","value": "consent"},{"label": "legitimate_interest","value": "legitimate_interest"},{"label": "judicial_process","value": "judicial_process"},{"label": "vital_interest","value": "vital_interest"},{"label": "public_interest","value": "public_interest"}]},
          {"name": "status","label": "Status","type": "text","help": "Can be empty when `Category` is `data_processing` or pay attention to the fact that when `Category` is `data_processing` the only accepted value for `Status` is `granted`."}]}
        }
          )
        if (typ == 'expect') { results = results.filter(function(el) {return (el.name !== 'email')}) }
        return results
    }

    if (Array.isArray(fields) && fields.length) { return getExpect(fields, type) } else { return {} }
}