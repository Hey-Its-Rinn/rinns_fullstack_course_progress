/*
if (condition){
    // Execute some Code
}else if(condition two){
    // Execute other Code
}else{
    // Execute some other Code
}
*/




var hot = false
var temp = 60000

if (true) {
    console.log("I ran");
}

if (temp > 80){
    console.log("Temp is hot outside!");
}else if (temp <= 80 && temp > 50){
    console.log("Temp is mild outside!");
}else if (temp <= 50 && temp > 32){
    console.log("Temp is cool outside!");
}else{
    console.log("Temp is cold outside!");
}

console.log(hot)