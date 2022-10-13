var dateInput = document.querySelector("#input-date");
var showBtn = document.querySelector("#show-btn");
var resultBox = document.querySelector("#result-box");


showBtn.addEventListener('click', clickEventHandler);


function clickEventHandler(){
   
    if(dateInput.value !== ''){
        var dateInArray = dateInput.value.split('-');
        var date = {
            day: Number(dateInArray[2]),
            month: Number(dateInArray[1]),
            year: Number(dateInArray[0])
        };

        if(checkPalidromeForAllFormats(date)){
            resultBox.innerText = "It is a Palindrome Date! 🤩"
        }
        else {
            [cP, pD] = getPreviousPalindromeDate(date);
            [cN, nD] = getNextPalindromeDate(date);
            resultBox.innerText = `The last Palindrome Date was ${pD.day}-${pD.month}-${pD.year} and you missed it by ${cP} days. The next Palindrome Date is ${nD.day}-${nD.month}-${nD.year} and you missed it by ${cN} days`

            

        }
   }
}






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

// next palindrome date
function getNextPalindromeDate(date){
   var ctrN = 0;
   var nextdate = getNextDate(date);

   while(1){
    ctrN++;
    
    if(checkPalidromeForAllFormats(nextdate)){
        break;
    }
    nextdate = getNextDate(nextdate);
   }
   return [ctrN, nextdate]
}
  

// previous palindrome date
function getPreviousPalindromeDate(date){

    var ctrP = 0;
    var previousDate = getPreviousDate(date);

    while(1){
        ctrP++;
        if(checkPalidromeForAllFormats(previousDate)){
            break;
        }
        previousDate = getPreviousDate(previousDate);
    }
    return [ctrP, previousDate];

}


// get Previous Date
function getPreviousDate(date){ //12 12 2022
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;
 

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31]
 
// 1 1 2020

    if(day <1){
        month -=1; 
        if(month < 1){
            year -=1;
            month = 12;
            day = daysInMonth[month - 1] 

        }
        else {
            day = daysInMonth[month - 1] 
        }
       
    }

    return {
        day: day,
        month:month,
        year:year
    }

    
}


//test date obj

