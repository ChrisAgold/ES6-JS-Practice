// ARRAY HELPER METHODS //

//****** forEach Helper ******//
//var colors = ['red', 'blue', 'green'];

// ES5
// for(var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// ES6
// colors.forEach(function(color){
//     console.log(color);
// })

// Steps to use forEach Helper //
// Create an array of numbers
//var numbers = [1, 2, 3 ,4 ,5];

// Create a variable to hold the sum
// var sum = 0;
// function adder(number){
//     sum += number;
// }
// Loop over the array, incrementing the sum variable
//numbers.forEach(adder);

// print the sum variable
//console.log(sum);

// Refactor to use forEach
// function handlePosts() {
//     var posts = [
//         { id: 23, title: 'Daily JS News' },
//         { id: 52, title: 'Code Refactor City' },
//         { id: 105, title: 'The Brightest Ruby' }
//     ];
//
//     for (var i = 0; i < posts.length; i++) {
//         savePost(posts[i]);
//     }
// }

// Solution
// function handlePosts() {
//     var posts = [
//         { id: 23, title: 'Daily JS News' },
//         { id: 52, title: 'Code Refactor City' },
//         { id: 105, title: 'The Brightest Ruby' }
//     ];
//
//     posts.forEach(function(post){
//         savePost(post);
//     });
// }

// Refactor to use forEach
// var images = [
//     { height: 10, width: 30 },
//     { height: 20, width: 90 },
//     { height: 54, width: 32 }
// ];
// var areas = [];

// Solution
// images.forEach(function(image){
//     areas.push(image.height * image.width);
// })

//****** MAP Helper ******//

// for loop ex:
// var numbers = [1, 2, 3];
// var doubledNumbers = [];
//
//
// for (var i = 0;i < numbers.length; i++) {
//     doubledNumbers.push(numbers[i] * 2);
// }
//
// doubledNumbers;
//
// // refactored
// var doubled = numbers.map(function(number) {
//    return number * 2;
// });
// doubled;

// EX
// var cars = [
//     {
//         model: 'Buick', price: 'CHEAP'
//     },
//     {
//         model: 'Camaro', price: 'Expensive'
//     }
// ]
// iterate through only price
// var prices = cars.map(function(car) {
//     return car.price;
// })
//console.log(prices);

// Ex return the heights
// var images = [
//     { height: '34px', width: '39px' },
//     { height: '54px', width: '19px' },
//     { height: '83px', width: '75px' },
// ];
//
// var heights;
// var heights = images.map(function(images){
//     return images.height;
// });

//****** FILTER Helper ******//

// var products = [
//     {
//         name: 'cucumber', type: 'vegetable'
//     },
//     {
//         name: 'banana', type: 'fruit'
//     },
//     {
//         name: 'celery', type: 'vegetable'
//     },
//     {
//         name: 'orange', type: 'fruit'
//     }
// ];

// filter for only fruit for loop
// var filteredProducts = [];
//
// for (var i = 0; i < products.length; i++) {
//     if (products[i].type === 'fruit') {
//         filteredProducts.push(products[i])
//     }
// }
// console.log(filteredProducts);

// filter method
// products.filter(function(product) {
//     return product.type === 'fruit';
// });

// EX Filter
// var products = [
//     {
//         name: 'cucumber', type: 'vegetable', quantity: 0, price: 1
//     },
//     {
//         name: 'banana', type: 'fruit', quantity: 10, price: 15
//     },
//     {
//         name: 'celery', type: 'vegetable', quantity: 30, price: 13
//     },
//     {
//         name: 'orange', type: 'fruit', quantity: 3, price: 5
//     }
// ];
//
// // Type is 'vegetable', quantity is greater than 0, price is less than 10
// products.filter(function(product){
//     return product.type === 'vegetable'
//         && product.quantity > 0
//         && product.price < 10
// });

// EX get comments from particular post
// var post = {
//     id: 4, title: 'New Post'
// };
// var comments = [
//     {
//         postID: 4, content: 'awesome post'
//     },
//     {
//         postID: 3, content: 'aight'
//     },
//     {
//         postID: 4, content: 'neat'
//     }
// ];
//
// function commentsForPost(post, comments) {
//     return comments.filter(function (comment) {
//         return comment.postID === post.id;
//     });
// }
//
// console.log(commentsForPost(post, comments));

//****** REDUCE Helper ******//

// sum numbers in array for loop ex
// var numbers = [10, 20, 30];
// var sum = 0;
//
// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
//
// // reduce
// numbers.reduce(function (sum, number) {
//     return sum + number;
// }, 0);

// EX Reduce
// var primaryColors = [
//     {
//         color: 'red'
//     },
//     {
//         color: 'yellow'
//     },
//     {
//         color: 'blue'
//     }
// ];
// // return array of colors
// primaryColors.reduce(function(previous, primaryColor) {
//     previous.push(primaryColor.color);
//     return previous
// }, []);
//
// // balanced parenthesis Ex
// function balancedParens(string) {
//     return !string.split("").reduce(function(previous, char) {
//         if (previous < 0) { return previous; }
//         if (char === "(") { return ++previous; }
//         if (char === ")") { return --previous; }
//         return previous;
//     }, 0);
// }
// balancedParens("((((");


