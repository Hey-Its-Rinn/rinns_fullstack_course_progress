function helloYou(name){
    console.log("Hello " + name);
}

function addNum(num1, num2){
    console.log(num1+num2);
}

function helloSomeone(name="Frankie") {
    console.log("Hello "+name);
}

function formal(name = "Sam", title='Sir') {
    return title + " " + name;
}

function timesFive(numInput) {
    // Local scope to the function!
    var result = numInput * 5;
    return result;
}

// Global Scope
var v = "GLOBAL VARIABLE"
var stuff = "GLOBAL STUFF"

function fun(stuff) {
    console.log(v);
    stuff = "reassign stuff inside func"
    console.log(stuff);
}