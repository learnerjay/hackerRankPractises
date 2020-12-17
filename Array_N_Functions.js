/**
Objective
In this challenge, we learn about Arrays. Check out the attached tutorial for more details.
Task
Complete the getSecondLargest function in the editor below. It has one parameter: an array,
, of numbers. The function must find and return the second largest number in .
**/
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var largest = 0;
    var secondLargest = 0;
    for(let i=0;i<=largest;i++){
        if (nums[i]>largest){
            var largest = nums[i];
        } 
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    
    return secondLargest; 
    }