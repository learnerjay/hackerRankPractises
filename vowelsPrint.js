/**
10 DAY JS Re Practise
4th -----------------------------------------------
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   const vowels = 'aeiou';
   var consonant = ' ';
   for (var i=0; i <s.length ; i++){
       if(vowels.includes(s[i])){
           console.log(s[i]);
       }else{
           consonant += s[i]+ '\n';
       }
   } 
   console.log(consonant.trim());
}
