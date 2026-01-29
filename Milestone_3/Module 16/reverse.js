const sentence = 'I am learning web dev';
let reverse = '';
for(const letter of sentence)
{
    reverse = letter + reverse;
}
console.log(reverse);
