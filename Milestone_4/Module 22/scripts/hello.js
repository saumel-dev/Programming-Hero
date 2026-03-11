// console.log("hello from outside");
// console.log(document);
// console.log('file connected');
const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections)
{
    console.log(section);
    section.style.backgroundColor = 'lightblue';
    section.style.border = '3px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '15px';
}
// for(const section of sections)
// {
//     section.classList.add('section-card');
// }