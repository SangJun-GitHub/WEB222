/********************************************************************************* 
* WEB222 – Assignment 01 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of  
* this assignment has been copied manually or electronically from any other source (including web sites)  
* or distributed to other students. 
* 
* Name: Sang Jun, Park  Student ID: 112293170  Date: 2018.Jan.28
* 
********************************************************************************/ 

/*****************************
 * Task 1
 *****************************/
/*
var studentName = 'Sang Jun', numOfCourses = 5, program = 'CPA', partTime = false;
if (partTime){
    if(numOfCourses == 1){
        console.log('My name is ' + studentName + ' and I’m in ' + program + ' program. I’m taking '+ numOfCourses + ' course in this semester and I have a part-tme job now.');
    }else{
        console.log('My name is ' + studentName + ' and I’m in ' + program + ' program. I’m taking '+ numOfCourses + ' courses in this semester and I have a part-tme job now.');
    }
} else { 
    if(numOfCourses == 1){
        console.log('My name is ' + studentName + ' and I’m in ' + program + ' program. I’m taking '+ numOfCourses + " course in this semester and I don't have a part-tme job now.");
    }else{
        console.log('My name is ' + studentName + ' and I’m in ' + program + ' program. I’m taking '+ numOfCourses + " courses in this semester and I don't have a part-tme job now.");
    }
}
*/

/*****************************
 * Task 2
 *****************************/
/*
var year = 2018
var age = prompt("Please enter your age:");
console.log('You were born in the year of ' + (year - age));
var yearInCollege = prompt('Enter the number of years you expect to study in the college: ');
console.log('You will graduate from Seneca college in the year of ' + (+ year + + yearInCollege));
*/

/*****************************
 * Task 3
 *****************************/ 
 /*
var c = 10;
var f = 77;
console.log(+ c + "°C is " + (c * 9 / 5 + 32) + " °F.");
console.log(+ f + "°F is " + ((f - 32) * 5 / 9) + " °C.");
*/

/*****************************
 * Task 4
 *****************************/ 
/* 
for (var i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i + ' is even')
    }
    else if (i % 2 != 0) {
        console.log(i + ' is odd')
    }
} 
*/

/*****************************
 * Task 5
 *****************************/
/* 
function largerNum(a, b) {
    if (a > b){
        return a;
    } else {
      return b;
    }
}
var greaterNum  = function(a, b) {
    if (a > b){
        return a;
    } else {
      return b;
    }
} 
console.log('The larger number of 5 and 12 is ' + largerNum(5,12))
console.log('The larger number of 13 and 5 is ' + largerNum(13,5))
console.log('The greater number of 5 and 12 is ' + greaterNum(5,12))
console.log('The greater number of 13 and 5 is ' + greaterNum(13,5))
*/

/*****************************
 * Task 6
 *****************************/
/* 
function Evaluator() {
  var sum = 0, average = 0;
  for (var i = 0; i < arguments.length; i ++) {
    sum += arguments[i];
  }
  average = sum / arguments.length;
  if (average >= 50) {
    return true;
  } else {
    return false;
  }
}
console.log('Average grater than or equal to 50: ' + Evaluator(50, 60, 70));
console.log('Average grater than or equal to 50: ' + Evaluator(1, 2, 3));
console.log('Average grater than or equal to 50: ' + Evaluator(10, 20, 30));
*/

/*****************************
 * Task 7
 *****************************/
/* 
var Grader = function(a) {
    if (a <= 100 && a >= 80) {
        return 'A'
    } else if (a <= 79 && a >= 70) {
        return 'B'
    } else if (a <= 69 && a >= 60) {
        return 'C'
    } else if (a <= 59 && a >= 50) {
        return 'D'
    } else if (a <= 49 && a >= 0) {
        return 'F'
    } else if (a > 100 || a < 0) {
        console.log('your range of argument is wrong.')
    }
}
console.log(Grader(100));
console.log(Grader(72));
console.log(Grader(49));
*/

/*****************************
 * Task 8
 *****************************/
/* 
function showMultples(num, numMultples) {
    for (var i = 1; i <= numMultples; i ++) {
        console.log(+ num + ' x ' + i + ' = ' + num * i);
    }
}
showMultples(5, 4)
showMultples(1, 5)
showMultples(7, 2) 
*/