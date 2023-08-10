var shoppingCart = {
    books: 3,
    sunglass: 5,
    keyboard: 1,
    mouse: 1,
    pen: 25,
}

// when you know the specific property name , use dot notation to get the property value
var penCount = shoppingCart.pen;

/* alternative system */
// when you know the specific property name , use dot notation to get the property value
var penCount2 = shoppingCart['pen'];



var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName];
// console.log(propertyName, propertyValues);



var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);


// set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);