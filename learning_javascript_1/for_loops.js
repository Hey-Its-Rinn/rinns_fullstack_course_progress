/*
for (statement1; statement2; statement3){
    ;; Execute some code
}

statement1 var i = 0 
statement2 i < 5
statement3 i++
*/

for (var i = 0; i < 5; i++) {
    console.log("Number is " + i);
}

var word = "ABCDEFGHIJK"

for (var i = 0; i < word.length; i++){
    console.log(word[i]);
}

var word = "ABABABABABABAB"

for (var i = 0; i < word.length; i=i+2){
    console.log(word[i]);
    
}

