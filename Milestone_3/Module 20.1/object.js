const student = {
    name: 'sakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    frriends: ['apu', 'raz', 'salman', 'amir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting koro baba');
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
student.act();