//STEP 1

function halfNumber(number){
    let result= number/2
    console.log(`Half of ${number} is ${result}`)

}

halfNumber(5)
//STEP 2
function squareNumber(number){
    let result= number*number
    console.log(`The result of squaring the ${number} is ${result}`)

}

squareNumber(5)
//STEP 3
function percentOf(numberO, numberT){
    let result = (numberO/numberT)*100
    console.log(`${numberO} is ${result}% of ${numberT}`)
}

percentOf(2,4)
//STEP 4
function findModulus(one, two){
    let result
    (one>two)? result=one%two:result=two%one
    
    console.log(`${result} is the modulus of ${one} and ${two}`)
}

findModulus(4,10)
//STEP 5