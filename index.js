// Your code here

class Polygon {
	constructor(sides) {
		this.sides = sides
	}

	get countSides() {
		return this.sides.length
	}

	get perimeter() {
		return this.sides.reduce( (a,b) => a + b)

	}
}

class Triangle extends Polygon {
	get isValid() {

		let side1 = this.sides[0]
		let side2 = this.sides[1]
		let side3 = this.sides[2]

		if ((side1 + side2) <= side3) {
			return false
		} else if ((side2 + side3) <= side1) {
			return false
		} else if ((side3 + side1) <= side2) {
			return false
		} else {
			return true
		}

	}
}

class Square extends Polygon {
	get isValid() {
		let sideLength = this.sides[0]

		let valid = true

		this.sides.forEach(side => {
			if (side != sideLength) {
				valid = false
			}else{
				valid = true
			}
		})
		return valid
	}

	get area() {
		return this.sides[0]**2
	}

}	