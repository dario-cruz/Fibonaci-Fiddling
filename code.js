// Create the Fibonacci Sequence with takes a given givenNumber and adds all givenNumbers from 1 to that givenNumber together. 

// Using this numbering, the Fibonacci sequence can be defined by the following three equations:
// F0 = 0 (applies only to the first integer)
// F1 = 1 (applies only to the second integer)
// Fn = Fn-1 + Fn-2 (applies to all other integers)


const iterationFib = (givenNumber) => {
    // Create the array that will hold the end result.
    let fibArray = []

    // Iterate through the decreasing value of giveNumber
    for(let i = 0; i < givenNumber; i++) {
        // if the value is less then 1 just add it to the array.
        if (i <= 1) {
            fibArray.push(i)
        } else {
            // Else calculate the sequence using formula. 
            let num = fibArray[i - 1] + fibArray[i - 2]
            // Add the number to the array to create the sequence.
            fibArray.push(num)
        }
    }
    return fibArray    
}


const recursionFib = (givenNumber) => {
    if (givenNumber <= 0) {
        // If number is negative do nothing, ie return empty array. 
        return []
    } else if (givenNumber === 1) {
        // If number is 1 then just return array of 0.
        return [0]
    } else if (givenNumber === 2) {
        // If number is 2 then add 0,1 to array due to fib calc.
        return [0,1]
    } else {
        const fibArray = recursionFib(givenNumber - 1)
        const firstNum = fibArray[fibArray.length - 1]
        const secondNum = fibArray[fibArray.length - 2]
        const currentNum = firstNum + secondNum
        fibArray.push(currentNum)
        return fibArray
    }
}