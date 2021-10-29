// chapter 1
// ques 1
// alert("Hello World");

// ques 2
// alert("Error! Please enter a valid password.");

// ques 3
// alert("Welcome to JS Land... \nHappy Coding!");

// ques 4
// alert("Welcome to JS Land...");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

// ques 5
// alert("Hello... I can run JS through my web browser's console");




// chapter 2
// ques 1
// var username;

// ques 2
// var myName = "Muzammil Haider";

// ques 3
// var message = "Hello World";
// alert(message);

// ques 4
// var name = "Jhone Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// ques 5
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

// ques 6
// var email = "muzammilhaider@gmail.com";
// alert("My email address is " + email);

// ques 7
// var book = "A smarter way to learn JavaScript";
// alert(book);

// ques 8
// document.write("Yah! I can write HTML content through Javascript");

// ques 9
// var data = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(data);

// chapter 3
// ques 1
// var age = "15";
// alert("I am " + age + " years old");

// ques 2
// var visitor = 14;
// alert("You have visited this site " + visitor + " times");

// ques 3
// var birthYear = 1998;
// document.write("My birht year is " + birthYear + "<br><br>");
// document.write("Data type of my declared variable is number");

// ques 4
// var visitorName = "John Doe";
// var productTitle = "T-Shirt";
// var quantity = 5;
// document.write("<b>"+visitorName + "</b> ordered <b>" + quantity + " " +productTitle + "</b>" + "(s) " + " on XYZ Cloting Store");



// chapter 4
// ques 1
// var name, email, age;

// ques 2
// legal variables
// var myName, _myName, $myName, my_name, myname1;
//illegal variables
// var @email, 2email, my-email, var, my+email;

// ques 3
// a)
// b) numbers, letter, $ and _
// c) letter, $ and _
// d) keywords

// chapter 5
// ques 1
// var num1 = 3;
// var num2 = 5;
// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);

// ques 2
// var num1 = 5;
// var num2 = 3;
// var result = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + result);


// var num1 = 3;
// var num2 = 5;
// var result = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);


// var num1 = 10;
// var num2 = 5;
// var result = num1 + num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + result);

// var num1 = 10;
// var num2 = 5;
// var result = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + result);


// chapter 6-9
// ques 1
// var a = 10;
// var result;
// document.write("Result:<br><br>");
// document.write("The value of a is: " + a);
// document.write("<br><br>....................<br><br>");
// ++a;
// document.write("The value of ++a is: " + a);
// document.write("<br><br>Now the value of a is: " + a);
// result = a++;
// document.write("<br><br>The value of a++ is: " + result);
// document.write("<br><br>Now the value of a is: " + a);
// --a;
// document.write("<br><br>The value of --a is: " + a);
// document.write("<br><br>Now the value of a is: " + a);
// result = a--;
// document.write("<br><br>The value of a-- is: " + result);
// document.write("<br><br>Now the value of a is: " + a);

// ques 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//              1 - 0 + 1 + 1
// document.write(result);
// document.write("a is: " + a);
// document.write("b is: " + b);

// ques 3
// var name = prompt("Enter name");
// alert("Hello " + name);

// ques 5
// var num = +prompt("Enter number");
// var i;
// var result;
// if(num == "" || num == null){
//     num = 5;
// }
// for(i = 1; i <= 10; i++){
//     result = num * i;
//     document.write(num + " * " + i + " = " + result + "<br>");
// }

// ques 6
// var subj1 = prompt("Enter 1st Subject name");
// var subj2 = prompt("Enter 2nd Subject name");
// var subj3 = prompt("Enter 3rd Subject name");
// var subTotal1 = 100;
// var subTotal2 = 100;
// var subTotal3 = 100;
// var subTotal = subTotal1 + subTotal2 + subTotal3;
// var obtMarks1 = +prompt("Enter 1st Subject marks");
// var obtMarks2 = +prompt("Enter 2nd Subject marks");
// var obtMarks3 = +prompt("Enter 3rd Subject marks");
// var totalMarks = obtMarks1 + obtMarks2 + obtMarks3;
// var per1 = (obtMarks1 / subTotal1) * 100;
// var per2 = (obtMarks2 / subTotal2) * 100;
// var per3 = (obtMarks3 / subTotal3) * 100;
// var overAllPercentage = (totalMarks / subTotal) * 100;

// document.write("<table>");
// document.write("<thead>");
// document.write("<tr>");
// document.write("<td><b>Subject</b></td>");
// document.write("<td><b>Total Marks</b></td>");
// document.write("<td><b>Obtained Marks</b></td>");
// document.write("<td><b>Percentage</b></td>");
// document.write("</tr>");
// document.write("</thead>");
// document.write("<tr>");
// document.write("<td>" + subj1 + "</td>");
// document.write("<td>" + subTotal1 + "</td>");
// document.write("<td>" + obtMarks1 + "</td>");
// document.write("<td>" + per1 + "%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subj2 + "</td>");
// document.write("<td>" + subTotal2 + "</td>");
// document.write("<td>" + obtMarks2 + "</td>");
// document.write("<td>" + per2 + "%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subj3 + "</td>");
// document.write("<td>" + subTotal3 + "</td>");
// document.write("<td>" + obtMarks3 + "</td>");
// document.write("<td>" + per3 + "%</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td></td>");
// document.write("<td><b>" + subTotal + "</b></td>");
// document.write("<td><b>" + totalMarks + "</b></td>");
// document.write("<td><b>" + overAllPercentage + "%</b></td>");
// document.write("</tr>");
// document.write("</table>");

