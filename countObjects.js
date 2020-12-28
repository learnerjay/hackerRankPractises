/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let counter = 0;
  for(let i=0;i<objects.length;i++){
      if(objects[i].x == objects[i].y){
       counter ++;   
      }
  }
  return counter;
}

//Alternate method using filter 
return objects.filter(item =>item.x===item.y).length;
