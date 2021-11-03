
// Question 1-6
// var stdArr = [];
// var stdArr = newstdArr ();
// var stringArr = [" "];
// var numberArr = [10];
// var booleanArr = [true];
// var mixedArr = [" ",10,true];

// Question 7

var qualifArr = ["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications</h2>")
document.write("<ol><li>"+qualifArr[0]);
document.write("<li>" +qualifArr[1]);
document.write("<li>" +qualifArr[2]);
document.write("<li>" +qualifArr[3]);
document.write("<li>" +qualifArr[4]);
document.write("<li>" +qualifArr[5]);
document.write("<li>" +qualifArr[6]);
document.write("<li>" +qualifArr[7]+"</ol>");

// Question 8

var stdName1 = prompt("Enter First Student Name");
var stdName2 = prompt("Enter Second Student Name");
var stdName3 = prompt("Enter Third Student Name");
var stdMarks1 = parseInt(prompt("Enter First Student Marks"));
var stdMarks2 = parseInt(prompt("Enter Second Student Marks"));
var stdMarks3 = parseInt(prompt("Enter Third Student Marks"));
var stdsNameArr = [stdName1, stdName2, stdName3];
var stdsMarksArr = [stdMarks1, stdMarks2, stdMarks3];
var totalMarks = 500;
var perStd1 = stdMarks1 / totalMarks * 100;
var perStd2 = stdMarks2 / totalMarks * 100;
var perStd3 = stdMarks3 / totalMarks * 100;
document.write("<br>Score of " + stdsNameArr[0] + " is " + stdsMarksArr[0] + ". Percentage: " + perStd1 + "%");
document.write("<br>Score of " + stdsNameArr[1] + " is " + stdsMarksArr[1] + ". Percentage: " + perStd2 + "%");
document.write("<br>Score of " + stdsNameArr[2] + " is " + stdsMarksArr[2] + ". Percentage: " + perStd3 + "%");

// Question 9

var colorArr=["Red","Blue","Green"];
document.write("<br>"+colorArr);
var color = prompt("Enter Color you want add to the beginning ");
colorArr.unshift(color);
var updArr = colorArr;
document.write("<br>" +updArr);
var color = prompt("Enter Color you want add to the ending ");
colorArr.push(color);
var upd2Arr = colorArr;
document.write("<br>" +upd2Arr);
colorArr.unshift("Pink","Yellow");
var upd3Arr = colorArr;
document.write("<br>" +upd3Arr);
colorArr.shift();
var upd4Arr = colorArr;
document.write("<br>" +upd4Arr);
colorArr.pop();
var upd5Arr = colorArr;
document.write("<br>" +upd5Arr);
var askColorindex = +prompt("Enter the index number  where you want to add color");
var askColor = prompt("Enter The Color ");
colorArr.splice(askColorindex,0,askColor);
var upd6Arr = colorArr;
document.write("<br>" +upd6Arr);
var askColorindex1 = +prompt("Enter the index number where you want to remove color");
var askColor1 = prompt("Enter The Color ");
colorArr.splice(0,askColorindex1,askColor1);
var upd7Arr = colorArr;
document.write("<br>" +upd7Arr);


// Question 10


std1Score= parseInt(prompt("Enter First student score"));
std2Score= parseInt(prompt("Enter Second student score"));
std3Score= parseInt(prompt("Enter Third student score"));
std4Score= parseInt(prompt("Enter Fourth student score"));
stdScore = [std1Score,std2Score,std3Score,std4Score];
document.write("<br><br>" + stdScore);
stdScore.sort(function(a, b){return a-b});
updScore = stdScore;
document.write("<br><br>" + updScore);

// Question 11

var citiesArr = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<h3>Cities List</h3>");
document.write(citiesArr);
citiesArr.splice(1,3);
var updcities = citiesArr;
document.write("<h3>Selected Cities List</h3>");
document.write(updcities);


// Question 12

var sPace = [" This ", " is ", " my ", " cat"];
 document.write("<h2>Array:</h2>");
 document.write(sPace);
 document.write("<h2>String</h2>");
document.write(sPace.join(" "));

// Question 13

var deviceArr = ["keyboard","mouse","printer","moniter"];
document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
document.write("Out:"+ "<br>" +deviceArr[0]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[1]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[2]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[3]+"<br>");

// Question 14
var deviceArr = ["keyboard","mouse","printer","moniter"];
document.write("<br>"+"Devices"+"<br>"+deviceArr+"<br><br>");
document.write("Out:"+ "<br>" +deviceArr[3]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[2]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[1]+"<br>");
document.write("Out:"+ "<br>" +deviceArr[0]+"<br>");


// Question 15

var manufacturers = ["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
document.write("<br><br><select><option>"+ manufacturers[0]+"</option>")
document.write("<option>"+ manufacturers[1]+"</option>")
document.write("<option>"+ manufacturers[2]+"</option>")
document.write("<option>"+ manufacturers[3]+"</option>")
document.write("<option>"+ manufacturers[4]+"</option>")
document.write("<option>"+ manufacturers[5]+"</option></select>")
