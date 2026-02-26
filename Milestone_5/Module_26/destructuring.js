// const product = {
//     name: 'iphone', 
//     price: 799,
//     description: 'A smartphone by Apple'
// }
// const newPrice = product.price + 100;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;
// const product = { name: 'iphone', price: 700, description: 'A product by Apple'};
const price = 555;
const {name, price: phonePrice, camera = '12MP'} = { name: 'iphone', price: 700, description: 'A product by Apple'};
// console.log(camera);
// destructing
const [num1, num2] = [10, 20];
console.log(num2 + num1);
const numbers = [1, 2, 3];
const [height, weight] = numbers;
console.log(height);

