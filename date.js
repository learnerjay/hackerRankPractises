// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    dayName=new Date(dateString);
    dayName=dayName.getDay();
    if(dayName=='0')
    dayName='Sunday'
    else if(dayName==1)
    dayName='Monday'
    else if(dayName==2)
    dayName='Tuesday'
    else if(dayName==3)
    dayName='Wednesday'
    else if(dayName==4)
    dayName='Thursday'
    else if(dayName==5)
    dayName='Friday'
    else if(dayName==6)
    dayName='Saturday'
/**
Alternate Solution
  let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayName = dayNames[new Date(dateString).getDay()];
}
**/
    
    return dayName;

}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}