// Write a function called foo() which print "foo" and a function bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.


function foo() {
    console.log('foo');
    bar();
}

function bar() {
    console.log('bar');
}

foo();

