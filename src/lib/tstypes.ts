export class Vec {
	x;
	y;

	constructor(x?: number | string, y?: number | string) {
		this.x = x ?? 0;
		this.y = y ?? 0;
	}

	plus(otherVec: Vec) {
		if (
			typeof this.x == 'number' &&
			typeof this.y == 'number' &&
			typeof otherVec.x == 'number' &&
			typeof otherVec.y == 'number'
		) {
			const newX = this.x + otherVec.x;
			const newY = this.y + otherVec.y;
			return new Vec(newX, newY);
		}
	}

	minus(otherVec: Vec) {
		const newX = this.x - otherVec.x;
		const newY = this.y - otherVec.y;
		return new Vec(newX, newY);
	}
}
