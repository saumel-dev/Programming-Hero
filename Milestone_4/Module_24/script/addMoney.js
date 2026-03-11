document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        const bankAccount = machine('add-money-bank');
        if(bankAccount == 'Select a Bank')
        {
            alert('Please Select a Bank');
            return;
        }
        const accno = machine('add-money-number');
        if(accno.length != 11)
        {
            alert('Invalid Account No');
            return;
        }
        const amount = machine('add-money-amount');
        const newBalance = getBalance() + Number(amount);
        const pin = machine('add-money-pin');
        if(pin == '1234')
        {
            alert(`Add Money Successfull
                from ${bankAccount} at ${new Date()}`);
            setBalance(newBalance);
        }
        else
        {
            alert('Invalid Pin');
            return;
        }
    })