// option 1 to handle click event
function yellow(){
    document.body.style.backgroundColor = 'yellow';
}
// option 2 to handle click event : get element by ID and then set Onclick
const btnMakeBlue = document.getElementById('blue');
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option 3 
const btnMakePurple = document.getElementById('purple');
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// option 4 : best practice
document.getElementById('green').addEventListener('click', function (){
    document.body.style.backgroundColor = 'green';
})