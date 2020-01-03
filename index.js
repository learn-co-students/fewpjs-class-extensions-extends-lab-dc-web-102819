class Polygon {
	constructor(sides) {
		this.sides = sides
	}

	get countSides() {
		return this.sides.length
	}

	get perimeter() {
		let perimeter = 0
		return this.sides.reduce((perimeter, side) => perimeter += side)
		// return this.sides.forEach(side => perimiter += side)
	}
}

class Triangle extends Polygon {

	get isValid() {
	// isValid() {
		let valid = true
		console.log('initial valid = ' + valid)
		//invalid if more or less than 3 sides
		if (this.countSides !== 3) {
			valid = false
			console.log('does not have three sides; valid = ' + valid)
			// return valid
		} 

		//if three sideed validation passed, compare side lengths
		if (valid) {
			if ((this.sides[0] + this.sides[1] < this.sides[2]) ||
			 (this.sides[1] + this.sides[2] < this.sides[0]) ||
			 (this.sides[2] + this.sides[0] < this.sides[1])) {
				valid = false
				console.log('is not a triangle; valid is set to ' + valid)
			}
		}

		//return true/false
		console.log('valid output = ' + valid)
		return valid
	}
}

class Square extends Polygon {

	get isValid() {
		if ((this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3])) {
			return true
		} else return false
	}

	get area() {
		return this.sides[0]**2
	}
}