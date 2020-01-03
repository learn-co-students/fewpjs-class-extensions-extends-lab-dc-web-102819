class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length 
    }

    get perimeter(){
        let a = 0
        this.array.map(x =>{
            a += x
        })
        return a
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.array[0] + this.array[1] <= this.array[2] ||
            this.array[1] + this.array[2] <= this.array[0] ||
            this.array[0] + this.array[2] <= this.array[1]){
                return false
            }
            else{
                return true
            }
    }
}

class Square extends Polygon{
    get area(){
        return this.array[0] * this.array[0]
    }
    get isValid(){
        if(this.array[0] === this.array[1] && this.array[1] === this.array[2]
            && this.array[2] === this.array[3]){
            return true
        }
        else{
            return false
        }
    }
}



