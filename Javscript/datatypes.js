es5 > Ecma Script 5
es6 > Ecma Script 6

////////////
DataTypes

String > "Hiii"  'hey'  "10"  'true'  '10a'  `test`
Number > 10 76767 7.77   .777  
Boolean > true false


//es5
var a = 10
var b = "Hii"
var c = true

typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'
var d = "9"
undefined
typeof(d)
'string'
var e = 10.111
undefined
typeof(e)
'number'

var a = 10
var b = 20
undefined
a+b
30
a-b
-10
a*b
200
a/b
0.5
b%a
0
4%2
0
4%3
1
5%2
1
5%3
2


/////////////
var a = "Hii"
var b = "Javascript"

a+b
'HiiJavascript'
a-b
NaN (Not a number)
a*b
NaN
a/b
NaN

var a = "Hii"
var b = 1
undefined
a+b
'Hii1'
b+a
'1Hii'
a-b
NaN
b-a
NaN

string +string = string
string +number = string
number +string = string
number +number = number

10+"20"+30
10+20+"30"
"10"+20+30

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30
"1020"+30
'102030'

10+"20"+30-1
10+20+"30"-1
"10"+20+30-1

10+"20"+30-1
102029
10+20+"30"-1
3029
"10"+20+30-1
102029

"2"*3
6
"6"*2
12
"6"/2
3


var a = true
var b = false

a+b
1
true+true
2
true-true
0

true is equal to 1
false is equal to 0

10+true
11
10/false
Infinity
"hi"+true
'hitrue'

"true"-"true"
NaN