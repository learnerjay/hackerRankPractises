/**
10 DAY JS Re Practise
4th -----------------------------------------------
/**
* Implement a function named factorial that has one parameter: an integer, . It must return the value of (i.e., factorial)
**/
/*
 * Create the function factorial here
 */
//Recursive Solution
function factorial(n){
    let ans = 1;
    if(n==0 || n==1){
        return ans;
    }else{
        return n * factorial(n-1); 
    }
}
//Non-recursive Solution 
function factorial(n){
    let ans = 1;
    if(n==0 || n==1){
        return ans;
    }else{
         for(var i=n;i>=1;i--){
         ans = ans * i; 
         }
         return ans;
    }
}

