const maxe = Math.max(3, 5, 1, 3, 9, 10);
console.log((maxe));

const numbers = [1, 2, 3, 4, 6, 9, 10];
const max = Math.max(...numbers);
console.log(max);

const params = [45, 12, 3];
function sum(x, y, z) {
    return x + y + z;
}
const res = sum(...params); 
console.log(res);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1, arr2);
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 55];
// arr2.push(4);
console.log(arr1, arr2);

const person = {name: 'alice', age: 30};
const person2 = {...person};
person2.salary = 3600;
console.log(person); console.log(person2);

