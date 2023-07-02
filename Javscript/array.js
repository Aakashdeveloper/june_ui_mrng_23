Collection of homogenious as well as hetrogenious data types

var a = [1,4,7,2,9,22]; //array of number
var b = ["Hii","Test","Code","Hey"] //array of string
var c = [1,"hui",true,false,"tyes",5,99] 

var city = ["Delhi","Mumbai","London","Venice"]
undefined
city.length
4
city[0]
'Delhi'
city[3]
'Venice'
city.push("Hongkong")
5
city
(5) ['Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong']
city.push("Venice")
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Venice']

var city = ["Delhi","Mumbai","London","Venice"]
city.unshift('Amsterdam')
5
city
(5) ['Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']
city.push("Paris")
6
city
(6) ['Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice', 'Paris']
city.unshift("Boston")
7
city
(7) ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice', 'Paris']

var city = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice', 'Paris']
undefined
city.pop()
'Paris'
city
(6) ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']

city.pop(2)

var city = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice', 'Paris']
undefined
city.pop()
'Paris'
city
(6) ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']
city.pop(2)
'Venice'
city.shift()
'Boston'

push > Add in the end
unshift > Add in begining
pop > Remove last always
shift > Remove first always

var city = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']
undefined
city.slice(2,6)
(4) ['Delhi', 'Mumbai', 'London', 'Venice']
city.slice(1)
(5) ['Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']
city.slice(-1)
['Venice']
city.slice(0,-1)
(5) ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London']
city
(6) ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']


splice(startIndex,deleteCount,value)
var a = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']

// all value on index number 2 without removing
a.splice(2,0,'Innsburg')

// remove value from particular index
a.splice(4,1)

// remove value from particular index and add also
a.splice(3,1,'Pune','Milan')

var a = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']
a.splice(2,0,'Innsburg')
[]
a
(7) ['Boston', 'Amsterdam', 'Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice']
a.splice(4,1)
['Mumbai']
a
(6) ['Boston', 'Amsterdam', 'Innsburg', 'Delhi', 'London', 'Venice']
a.splice(3,1,'Pune','Milan')
['Delhi']
a
(7) ['Boston', 'Amsterdam', 'Innsburg', 'Pune', 'Milan', 'London', 'Venice']


var a = ['Boston', 'Amsterdam', 'Delhi', 'Mumbai', 'London', 'Venice']
undefined
a.indexOf('Delhi')
2
a.indexOf('Boston')
0
a.indexOf('Pune')
-1
a.indexOf('Innsburg')
-1

var a = "Hii"
var b = ["Hii"]