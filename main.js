nameOfTheStudentArray = [];
function submit() {var name1 = document.getElementById("name1").value;
var name2 = document.getElementById("name2").value;
var name3 = document.getElementById("name3").value;
var name4 = document.getElementById("name4").value;
var name5 = document.getElementById("name5").value;
var name6 = document.getElementById("name6").value;
nameOfTheStudentArray.push (name1);
nameOfTheStudentArray.push (name2);
nameOfTheStudentArray.push (name3);
nameOfTheStudentArray.push (name4);
nameOfTheStudentArray.push (name5);
nameOfTheStudentArray.push (name6);
console.log (nameOfTheStudentArray);
document.getElementById ("displayname").innerHTML=nameOfTheStudentArray;
document.getElementById ("button").style.display="none";
document.getElementById ("sortbutton").style.display="inline-block";}
function sorting() {nameOfTheStudentArray.sort();
console.log(nameOfTheStudentArray);
document.getElementById("displayname").innerHTML = nameOfTheStudentArray;}
