/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
//Without Es5/Es6Js
class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    perimeter(){
        let sum = 0;
       for(var i=0;i<this.sides.length;i++){
            sum =  sum + this.sides[i];  
       }
       return sum
    }     
}
