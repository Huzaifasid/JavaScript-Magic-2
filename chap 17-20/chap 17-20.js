// Question 1

var aRr = [[],[],[]];

// Question 2

var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<h1>"+arr[0].join(" ")+"</h1>");
document.write("<h1>"+arr[1].join(" ")+"</h1>");
document.write("<h1>"+arr[2].join(" ")+"</h1>");

// Question 3

for(var i=1 ; i<=10; i++){
   document.write(i+"<br>");
}

// Question 4

var taBle = parseInt(prompt("Enter the table number you want to print"));
var tableLength = parseInt(prompt("Enter the length of  table number"));
document.write("<br>" + "Multiplication Table of " + taBle);
document.write("<br>" + "Table Length You Entered " + tableLength + "<br><br>");
for (var i = 1; i <= tableLength; i++) {
    document.write(taBle + " x " + i + " = " + taBle * i + "<br>");
}

// Question 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(fruits[0]+"<br>");
document.write(fruits[1]+"<br>");
document.write(fruits[2]+"<br>");
document.write(fruits[3]+"<br>");
document.write(fruits[4]+"<br><br><br>");
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}



// Question 6

document.write("<h2>Counting:</h2> ");
for(i=1; i<=15; i++){
    document.write(i+",");
}

document.write("<h2>Reverse Counting:</h2> ");
for(i=10; i>=1; i--){
    document.write(i+",");
}
document.write("<h2>Even:</h2> ");
for(i=0; i<=10; i++){
    document.write(i*2+",");
}
document.write("<h2>Odd:</h2> ");
for(i=1; i<20; i++){
    document.write(i++ +",");
}
document.write("<h2>Series:</h2> ");
for(i=1; i<=10; i++){
    document.write(i*2 +"k,");
}



// Question 7

var bakItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var bakSearch = prompt("Welcome To HS Bakery.What do you want to order Sir/Maam");
var bake = true
for (var i = 0; i < bakItems.length; i++) {
    if (bakSearch === bakItems[i]) {
        document.write(bakSearch + " is <strong>Available</strong> at index " + i + " is " + bakItems[i] + "<br>");
        bake = false
    }

}
if (bake === true) {
    document.write("We are Sorry " + bakSearch + " is <strong>Not Available</strong> in our bakkery" + "<br>");
}


// Question 8

var numArr1 = [24, 53, 78, 91, 12];
document.write("<br><strong>Arrey Items:</strong> "+numArr1);
var max = Math.max(...numArr1);
document.write("<br><strong>The largest Number is :</strong> "+max);

// Question 9


var numArr2 = [24, 53, 78, 91, 12];
document.write("<br><strong>Arrey Items:</strong> "+numArr2);
var min = Math.min(...numArr2);
document.write("<br><strong>The smallest Number is :</strong> "+min+"<br><br>");


// Question 10
document.write("<br>")
for(var i=1;i<=20;i++){
    document.write(i*5+",")
}