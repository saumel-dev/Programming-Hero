const numbers = [14, 75, 28, 38, 28];

// for of loop
// for(let num of numbers)
// {
//     console.log(num);
// }

const products = [
    {id: 1, name: 'walton phone', price: 190000},
    {id: 2, name: 'xiaomi phone', price: 190000},
    {id: 3, name: 'iphone', price: 190000},
    {id: 4, name: 'samsung phone', price: 190000},
    {id: 5, name: 'lg laptop', price: 190000},
    {id: 6, name: 'realme phone', price: 190000},
];
// for(const product of products)
// {
//     console.log(product);
// }
function matchedProduct (products, search){
    const matched = [];
    for(const product of products)
    {
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProduct(products, 'phone');
console.log(result);