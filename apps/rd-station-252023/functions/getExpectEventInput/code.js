function getExpectEventInput(input, timezone) {

	function getExpectObj(obj_input) {
		const body = Object.assign({}, obj_input);
		var payload = body.payload;

		function setValue(propertyPath, value, obj, typ) {

			if (!propertyPath) return;

			let properties = Array.isArray(propertyPath) ? propertyPath : propertyPath.split(".");

			if (properties.length > 1) {
				if (!obj.hasOwnProperty(properties[0]) || typeof obj[properties[0]] !== "object") obj[properties[0]] = {};
				
				return setValue(properties.slice(1), value, obj[properties[0]], typ);
			} else {
				if (typ == 'JSON') {
					try {
						obj[properties[0]] = JSON.parse(value)
					} catch (e) {
						obj[properties[0]] = value.toString()
					}
				} else if(typ == 'FLOAT' || typ == 'INTEGER') {
					obj[properties[0]] = ((typ == 'FLOAT') ? parseFloat(value) : (typ == 'INTEGER') ? parseInt(value) : Number(value))
				} else { obj[properties[0]] = value }
				return true
			}
		}

		Object
			.keys(payload)
			.forEach(key => {
				if (key === 'custom_fields') {
					var custom_fields = payload[key];
					custom_fields.forEach(item => {
						setValue(('payload.' + item['name']), (item['value']), body, item['type']);
					});
					delete payload[key];
				}
			});

		return body;
	}

	function getExpect(obj) {
		if (Array.isArray(obj) && obj.length) {
			obj.forEach((item, idxItem) => {
				obj[idxItem] = getExpectObj(item);
			});
			return obj;
		} else {
			return getExpectObj(obj);
		}
	}

	if (!input) return input;

	return getExpect(input);

}