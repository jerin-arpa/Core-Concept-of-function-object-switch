// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


var numbers = [12, 13, 14, 15, 16];
numbersSize = numbers.length;

function make_avg(numbers, numbersSize) {
    totalNumbers = 0;
    for (var i = 0; i < numbersSize; i++) {
        totalNumbers = totalNumbers + numbers[i];
    }
    averageValue = totalNumbers / numbersSize;
    return averageValue;
}

var result = make_avg(numbers, numbersSize);
console.log(result);