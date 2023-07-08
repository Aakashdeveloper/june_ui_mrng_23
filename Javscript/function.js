//es5
var a = 10;
var b = 20;
a+b
30

function add(a,b){
    return a+b
}

add(3,8)
11
add(8,2)
10

function isEven(userInput){
    let output = 0
    if(userInput%2 == 0){
        output = `Number ${userInput} is even`
    }else{
        output = `Number ${userInput} is odd`
    }

    return output
}

isEven(2)
'Number 2 is even'
isEven(3)
'Number 3 is odd'

function add(a,b,c){
    return a+b+c
}

add(1,2,3)
6
add(1,2,3,4)
6
add(1,2)
NaN

//es6
const add = (a,b) => {
    return a+b
}

add(2,3)
5


///rest
let sum = 0
function add(...args){
    for(data of args){
        sum = sum+data
    }
   
}
add(1,4,5,6,8)

sum
24

/////////Spread////

var a = ["hii","Hello"]
var b = [1,4,6,8,9]

var c = [...a,...b]


var a = ["hii","Hello"]
var b = [1,4,6,...a,8,9]


