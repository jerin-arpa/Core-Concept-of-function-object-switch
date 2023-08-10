//  Write a function called make_avg() which will take an three integer and return the average of those values.


function make_avg(num1, num2, num3) {
    averageValues = (num1 + num2 + num3) / 3;
    return averageValues;
}

var answer = make_avg(10, 20, 30);
console.log(answer);