//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

var bigA, bigB, bigC, bigD, bigE;
bigA = a > b && a > c && a > d && a > e;
bigB = b > c && b > d && b > e && b > a;
bigC = c > d && c > e && c > a && c > b;
bigD = d > e && d > a && d > b && d > c;
bigE = e > a && e > b && e > c && e > d;

if(bigA) {
    console.log('A is Larger : ', a)
} else if(bigB) {
    console.log('B is Larger : ', b)
} else if(bigC) {
    console.log('C is Larger : ', c)
} else if(bigD) {
    console.log('D is Larger : ', d)
} else if(bigE) {
    console.log('E is Larger : ', e)
}
