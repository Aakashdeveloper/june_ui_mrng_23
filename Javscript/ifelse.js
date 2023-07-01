if(condition){
    //do something
}else{
    //do something
}

let a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

let a = 11
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 11 is odd


var a = 9
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisble by 3`)
} else{
    console.log(`Number ${a} is odd`)
}
VM399:5 

//////Ternory
condition ? if condition is true : if condition is false

var a = 10
a>10 ? a+1:a-1

9
var a = 11
a>10 ? a+1:a-1

12
var a = 11
a>10 ? "Hii":"Bie"

'Hii'
var a = 9
a>10 ? "Hii":"Bie"

'Bie'