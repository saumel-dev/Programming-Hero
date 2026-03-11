const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem('number', number);
}
const setObjectsToLS = () => {
    const customer = {
        name: 'rahim khalu', 
        products: 3,
        price: 75
    }
    localStorage.setItem('customer', JSON.stringify(customer)) 
}
const getObjectsToLS = () => {
    const obj = localStorage.getItem('customer');
    console.log(JSON.parse(obj));
    
}
const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('Get from local storage ', number);
}