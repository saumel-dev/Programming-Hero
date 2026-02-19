document.getElementById('btn-update-title').addEventListener('click', function () {
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'Updated page title text';
})
document.getElementById('btn-h1').addEventListener('click', function () {
    const sec = document.getElementById('sec-h1');
    sec.innerText = 'paltai disi';
})
document.getElementById('btn-login').addEventListener('click', function () {
    const user = document.getElementById('user');
    user.innerText = 'user loged in successfully';
})