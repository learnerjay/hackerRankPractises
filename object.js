\**
Task
Complete the function in the editor. It has two parameters: and . It must return an object modeling a rectangle that has the following properties:
length : This value is equal to a.
width : This value is equal to b.
perimeter : This value is equal to 2 X (a + b)
area : This value is equal to a X b
Note: The names of the object’s properties must be spelled correctly to pass this challenge.
**/
Solution

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
   this.length = a;
   this.width = b;
   this.perimeter = 2*(a+b);
   this.area = a*b;
}
