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




//test date obj
var date = {
    day:2,
    month: 11,
    year: 2020,
}

// console.log(checkPalidromeForAllFormats(date))