const employee = {
    name: 'Jhon doe',
    position: 'SE',
    // person: {
    //     name: 'holla',
    //     age: 30
    // }

}
console.log(employee.name);
console.log( employee['name']);
console.log( employee[1]);

// optional chaning
const zip = employee.person?.age
console.log(zip);



