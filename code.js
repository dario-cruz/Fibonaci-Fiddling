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


// Create a function that carries out the mergesort algorithm.
// step 1: start
// step 2: declare array and left, right, mid variable
// step 3: perform merge function.
//     if left > right
//         return
//     mid= (left+right)/2
//     mergesort(array, left, mid)
//     mergesort(array, mid+1, right)
//     merge(array, left, mid, right)
// step 4: Stop

const mergeArray = (leftArray, rightArray) => {
    // Create array for sortation. 
    let combinedArr = []

    while (leftArray.length && rightArray.length) {
        // Insert the smallest item into the combined Array.
        if (leftArray[0] < rightArray[0]) {
            combinedArr.push(leftArray.shift())
        } else {
            combinedArr.push(rightArray.shift())
        }
    }
    return [...combinedArr, ...leftArray, ...rightArray]
}

const mergeSort = (givenArray) => {
    if (givenArray.length <= 1) return givenArray
    // Find the mid point of the givenArray and store is as a variable.
    let midPoint = Math.floor(givenArray.length / 2)

    let leftSide = mergeSort(givenArray.slice(0, midPoint))
    let rightSide = mergeSort(givenArray.slice(midPoint))

    // Call the mergeArray function to combine and sort the leftSide and rightSide.
    return mergeArray(leftSide, rightSide)
}