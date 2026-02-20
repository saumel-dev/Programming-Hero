document.getElementById('btn-login').addEventListener('click', function(){
    const input_num = document.getElementById('input-number');
    const MobileNumer = input_num.value;
    const input_pin = document.getElementById('input-pin');
    const pin = input_pin.value;

    if(!isNaN(MobileNumer) && MobileNumer.startsWith('018'))
    {
        window.location.assign('/home.html')
    }
    else
    {
        alert('login falied');
    }
})