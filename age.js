var year = date(year);
var month = date(month);
var day = date(day);
var age = year - 2002;
if (month == 11) {
    if (day >= 28) {
        age++
    }
}
else if (month > 11) {
    age++
}
document.getElementById("insertAge").innerHTML = age;