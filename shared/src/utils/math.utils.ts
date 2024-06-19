export class MathUtils {
	static minMax(items) {
		return [Math.min.apply(null, items), Math.max.apply(null, items)];
	}
}
