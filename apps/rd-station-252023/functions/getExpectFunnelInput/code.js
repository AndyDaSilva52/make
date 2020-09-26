function getExpectFunnelInput(input) {
    const body = Object.assign({}, input);

    Object
        .keys(body)
        .forEach(key => {
            if ((key === 'identifier') || key === 'value' || key === 'funnel_name') {
                delete body[key];
            }
        });

    return body;
}