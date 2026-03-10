const students = [
    {name: 'rahi', age: 24},
    {name: 'shihab', age: 25},
    {name: 'sazzad', age: 25},
    {name: 'fakrul', age: 24}
];
const student = students.find(student => student.age === 25);
console.log(student);
 