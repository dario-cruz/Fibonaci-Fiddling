// Create the Fibonacci Sequence with takes a given givenNumber and adds all givenNumbers from 1 to that givenNumber together. 

const iterationFib = (givenNumber) => {
    let currentNum = 0
    do {
        currentNum += currentNum + 1
        console.log(currentNum)
    } while (currentNum < givenNumber)
}


const recursionFib = (givenNumber) => {
    if (givenNumber == 0) {
        return givenNumber
    } else {
        return recursionFib(givenNumber) + givenNumber++
    }
}