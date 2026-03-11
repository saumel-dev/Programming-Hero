function machine(id) {
    const element = document.getElementById(id);
    const value = element.value;
    return value;
}
function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}
function showOnly(id) {
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    // console.log(`Add Money- ${addmoney}, Cashout- ${cashout}`);
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}