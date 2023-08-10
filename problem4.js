//  Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. 

function odd_even(number) {
    if (number % 2 == 0) {
        return 'This is Even Number';
    }
    else {
        return 'This is Odd Number';
    }
}

var result = odd_even(15);
console.log(result);