//John Spruijt ©2020 
function setAge() {
    var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var age = year-2002;
if (month == 10) {
    if (day >= 28) {

    }
    else {
        age--
    }
}
else if (month == 11) {

}
else {
    age--
}
document.getElementById("insertAge").innerHTML = age;
}
setAge()