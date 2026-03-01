function outerFunction() {
    function innerFunction() {
        console.log('This is the inner function');
    }
    return innerFunction;
}
const result = outerFunction();
// console.log(result);
// result();
function counter(){
    let count = 0;
    function increment(){
        console.log('value of count: ', count);
    }
    return increment;
}
const res = counter();
res();
