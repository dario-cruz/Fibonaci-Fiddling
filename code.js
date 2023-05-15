// Create the Fibonacci Sequence with takes a given givenNumber and adds all givenNumbers from 1 to that givenNumber together. 

// Using this numbering, the Fibonacci sequence can be defined by the following three equations:
// F0 = 0 (applies only to the first integer)
// F1 = 1 (applies only to the second integer)
// Fn = Fn-1 + Fn-2 (applies to all other integers)


const iterationFib = (givenNumber) => {
    let numA = 0, numB = 1, nextNum
    // Console.log the first number in the Fibonacci Sequence.
    console.log(numA)

    while (numB <= givenNumber) {
        // Log the current number.
        console.log(numB)

        // Add the values to get the next number in the sequence
        nextNum = numA + numB
        numA = numB
        numB = nextNum
    }
}


const recursionFib = (givenNumber) => {
    if (givenNumber == 0) {
        return givenNumber
    } else {
        return recursionFib(givenNumber + givenNumber)
    }
}