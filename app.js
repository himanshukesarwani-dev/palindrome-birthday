// reverse string function

function reverseStr(str){
    return str.split('').reverse().join('');

}

// palindrome check function

function isPalindrome(str){
   (str === reverseStr(str));
}

var dateStr = {
date:'',
month: '',
year:''
};


function dateToStrConverter(date){

    //day conversion

    if(date.day<10){
       dateStr.date = '0' + date.day;
    }
    else {
        dateStr.date = date.day.toString();
    }

    //month conversion
    if(date.month<10){
        dateStr.month = '0' + date.month;
    }
    else {
        dateStr.month = date.month.toString();
    }

    //yeat conversion
    dateStr.year = date.year.toString();


return dateStr;

}


//test date obj
var date = {
    day:4,
    month: 10,
    year: 2022
}
console.log(date);
console.log(dateToStrConverter(date));