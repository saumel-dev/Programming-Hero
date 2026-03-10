const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
const friends = ['rahi', 'shihab', 'fakrul', 'sazzad'];
const Nfriends = friends.filter(friend => friend[0] === 'r');
console.log(Nfriends);

console.log(evenNumbers, numbers);

const students = [
    {name: 'rahi', age: 24},
    {name: 'shihab', age: 25},
    {name: 'sazzad', age: 25},
    {name: 'fakrul', age: 24}
]
const olderStudent = students.filter(student => student.age >= 25);
console.log(olderStudent);

