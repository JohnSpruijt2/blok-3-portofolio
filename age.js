//John Spruijt ©2020 
var d = new Date();
var year = d.getFullYear()-1;
var month = d.getMonth();
var day = d.getDate();
var age = year-2002;
if (month == 10) {
    if (day >= 28) {
        age++
    }
}
else if (month > 10) {
    age++
}
document.getElementById("insertAge").innerHTML = age;