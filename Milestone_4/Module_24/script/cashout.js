
document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        const agentNumber = machine("cashout-number");
        if (!isNaN(agentNumber) && agentNumber.startsWith('018')) {

        }
        else {
            alert('Invalid Agent Number');
            return;
        }
        const currentBalance = getBalance();
        const cashout = machine('cashout-amount');
        const check = Number(currentBalance) - Number(cashout);
        const pin = machine('cashout-pin');
        if (check < 0) {
            alert('Invalid Amount');
            return;
        }
        else {
            if (pin == '1234') {
                alert('Cashout Successful');
                setBalance(check);
            }
            else {
                alert('Invalid Pin');
            }
        }
    })