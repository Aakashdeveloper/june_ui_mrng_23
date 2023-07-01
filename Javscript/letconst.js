var   > we can redeclared and reassign
let   > we cannot redeclared but can reassign
const > we cannot redeclared nor reassign


> var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 30
30
> 

> let b = 10
undefined
> b
10
> let b = 12
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 20
20
> b
20
> const c = 10
undefined
> c
10
> c = 1
Uncaught TypeError: Assignment to constant variable.
> const c = 5
Uncaught SyntaxError: Identifier 'c' has already been declared
> 
