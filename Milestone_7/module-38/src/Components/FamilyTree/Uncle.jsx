import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flexe'>
                <Cousin name='Rahi'></Cousin>
                <Cousin name='fakrul'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;