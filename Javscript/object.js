var mname = "Avengers"
var mrating = 4.3
var mind = "Hollywood"

var mname1 = "Jab We Met"
var mrating1 = 4.5
var mind1 = "Bollywood"

var movie = {
    "mname":"Avengers",
    "mrating":4.3,
    "mind":"Hollywood"
}
undefined
movie.mname
'Avengers'
movie.mrating
4.3
movie.mrating = 4.5
4.5
movie
{mname: 'Avengers', mrating: 4.5, mind: 'Hollywood'}
movie.type="Action"
'Action'
movie
{mname: 'Avengers', mrating: 4.5, mind: 'Hollywood', type: 'Action'}
delete movie.mind
true
movie
{mname: 'Avengers', mrating: 4.5, type: 'Action'}

///JSON
var movies = [
    {
        "mname":"Avengers",
        "mrating":4.3,
        "mind":"Hollywood"
    },
    {
        "mname":"Jab We Met",
        "mrating":4.5,
        "mind":"Bollywood"
    }
];