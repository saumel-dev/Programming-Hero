import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flexe'>
                <Cousin name='jojo'></Cousin>
                <Cousin name='gojo'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;