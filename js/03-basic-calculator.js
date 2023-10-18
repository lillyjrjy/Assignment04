// ADD A FUNCTION CALLED CALCULATE
function calculate(x,y,operation){
    switch(operation){
        case '+':
        return x+y
        case '-':
        return x-y
        case '*':
        return x*y
        case '/':
        return x/y
    }
}
// COLLECT FIRST NUMBER FROM USER
let x = parseInt(prompt('enter first number'))
// COLLECT SECOND NUMBER FROM USER
let y = parseInt(prompt('enter second number'))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let n=0
let operation
    do{
       (n===0)? operation = prompt('enter operation(+,-,*,/)'): operation = prompt("Invalid operation. What's your choice?(+,-,*,/)")
       n++
        
    }while(operation!=='+'&&operation!=='-'&&operation!=='*'&&operation!=='/')

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(x,y,operation)
alert(`${result}`)