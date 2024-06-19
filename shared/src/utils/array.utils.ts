export class ArrayUtils {
	static groupByProperty(list, keyGetter) {
		const map = new Map();
		list.forEach((item) => {
			const key = keyGetter(item);
			const collection = map.get(key);
			if (!collection) {
				map.set(key, [item]);
			} else {
				collection.push(item);
			}
		});
		return map;
	}

	static getUniques(specs: [], comparator) {
		return specs.reduce((accumulator, current) => {
			const entity = accumulator.find((item) => comparator(item, current));
			if (!entity) {
				return accumulator.concat([current]);
			} else {
				return accumulator;
			}
		}, []);
	}

	static isEmptyOrNull(array) {
		return !array || !array.length;
	}
}
