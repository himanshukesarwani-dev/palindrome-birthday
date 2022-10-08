// reverse string function

function reverseStr(str){
    return str.split('').reverse().join('');

}

// palindrome check function

function isPalindrome(str){
  return (str === reverseStr(str));
}

var dateStr = {
date:'',
month: '',
year:''
};

// convert date obj to date str obj

function dateToStrConverter(date){

    //day conversion

    if(date.day<10){
       dateStr.day = '0' + date.day;
    }
    else {
        dateStr.day = date.day.toString();
    }

    //month conversion
    if(date.month<10){
        dateStr.month = '0' + date.month;
    }
    else {
        dateStr.month = date.month.toString();
    }

    //year conversion
    dateStr.year = date.year.toString();


return dateStr;

}


function getAllDateFormats(date){

    var dateStr = dateToStrConverter(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy =  dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year +  dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

}

function checkPalidromeForAllFormats(date){
    var listOfDates = getAllDateFormats(date);
    var flag = false;

    for(var i=0;i<6;i++){
        if(isPalindrome(listOfDates[i]))
        {
            flag = true;
            break;
            
        }

    }
return flag;
}


function isLeapYear(year){

    if(year % 400 === 0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    if(year% 4 === 0){
        return true;
    }

    return false;
}

function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31]


    //check for feb
    if(month === 2){

        // check for leap year
        if(isLeapYear(year))
        {
            if(day>29)
            {
                day = 1;
                month++;
            }
        }    
        else{
                if(day>28){
                    day = 1;
                    month++;
                }
            }
        

    }

    // if it is the last day then increasing the month
    else{
        if(day> daysInMonth[month - 1]){
            day = 1;
            month++;
        }
    }

    // inreasing month 
    if(month>12){
        month = 1;
        year++;
    }

    return {
        day: day, 
        month: month,
        year: year,
    };



}



//test date obj
var date = {
    day:28,
    month: 2,
    year: 2016,
}
console.log(getNextDate(date));


// console.log(checkPalidromeForAllFormats(date))
