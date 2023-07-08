for 
while
dowhile
forof
forin


for > help to generate series of valeus as well as help to iterate over the array

for(let i= 0;i<5;i++){
    console.log(i)
}
0
1
2
3
4



var a = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']
for(i=0;i<a.length;i++){
    console.log(a[i])

    
Boston
Amsterdam
Delhi
Mumbai
London
Venice

///////////////////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

var i = 10;
do{
    console.log(i);
    i++ 
}
while(i<5)

//////////////

var city = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']

for(mycity of city){
    console.log(mycity)
}

var movie = {
    "mname":"Avengers",
    "mrating":4.3,
    "mind":"Hollywood"
}

for(key in movie){
    console.log(key)
}

mname
mrating
mind

for(key in movie){
    console.log(movie[key])
}

Avengers
4.3
Hollywood