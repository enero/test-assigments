function deepCopyObject(val) {
	if (Array.isArray(val)) {
		return val.map(deepCopyObject);
	} else if (typeof val === 'object' && val != null) {
		var obj = {};
		for (var key in val) {
			obj[key] = deepCopyObject(val[key]);
		}

		return obj;
	} else {
		return val;
	}
}