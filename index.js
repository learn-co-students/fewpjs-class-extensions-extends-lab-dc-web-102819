class Polygon {
  constructor(array) {
    this.array = array
  }

  get countSides(){
    return this.array.length
  }
  get perimeter(){
    let perimeter = 0
    this.array.forEach(function(lado) {
      perimeter += lado
    })
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid(){
    if (this.array.length === 3) {
      let valid = new Set(this.array).size === 1
      return valid
    } else {
      return false
    }
  }
}

class Square extends Polygon{
  get isValid(){
    if(this.array.length === 4){
      let valid = new Set(this.array).size === 1
      return valid
    }
    else {
      return false
    }
  }
  get area(){
    return this.array[0] **2
  }
}
