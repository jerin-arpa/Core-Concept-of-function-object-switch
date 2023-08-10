/* declare a function rules

function functionName(parameter) {
    function body ;
    return;
}
var returnValues = functionName(parameters value) */


function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Mark = 58;
const assignment2Mark = 60;
const assignment3Mark = 59;

var myAverage = getAverage(assignment1Mark, assignment2Mark, assignment3Mark);
console.log('My average so far:', myAverage);