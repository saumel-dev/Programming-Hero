const obj = {
    name: 'Anonymous',
    age: 26,
    passion: 'Coding'
}
const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log(values);
const entries = Object.entries(obj);
console.log(entries);
Object.seal(obj);
obj.name = 'I am anonymous';
console.log(obj);
obj.dob = 2000;
console.log(obj);
