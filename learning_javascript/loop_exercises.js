/*
1:
print (console.log()) out the word "hello" 5 times.
do this with a for loop and then with a while loop.

2:
Use Loops to console.log() (print out) all the odd numbers from 1 to 25
*/

console.log("Hello from while loop");
var x = 5
while (x > 0) {
    console.log("hello");
    x -= 1
}

console.log("Hello from for loop");
for (var x = 5; x > 0; x -= 1) {
    console.log("hello");
}

console.log("Odd numbers using a while loop")
var x = 1
while (x <= 25) {
    if (x % 2 === 1) {
        console.log(x);
    }
    x += 1
}

console.log("odd numbers using a for loop")
for (var x = 1; x <= 25; x +=1) {
    if (x % 2 === 1) {
        console.log(x);
    }
}