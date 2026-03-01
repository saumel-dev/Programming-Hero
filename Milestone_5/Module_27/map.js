const numer = [1, 2, 3, 4, 5];
// const doubleIt = num => num * 2;
// const doubled = numer.map(doubleIt);
// console.log(doubled);

const doubled = numer.map(num => num * 2);
const square = numer.map(num => num * num);
console.log(doubled);
console.log(square);

const friends = ['rahi', 'fakrul', 'shihab', 'sazzad'];
const firstLetters = friends.map(frd => frd[0]);
console.log(firstLetters);

const products = [
    {name: 'laptop', price: 540000},
    {name: 'phone', price: 20000},
    {name: 'tablet', price: 2000}
];
// const prices = products.map(pd => pd.price * 2);
// console.log(prices);

// const names = products.map((pd, index, productsArray ) => {
//     const upperCase = pd.name.toUpperCase();
//     console.log(index, upperCase, productsArray);
    
//     return upperCase;
// })
// console.log(names);

const res = products.forEach(pd => console.log(products.name));
console.log(res);



