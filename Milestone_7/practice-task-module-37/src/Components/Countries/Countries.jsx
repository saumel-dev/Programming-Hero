import React from 'react';
import { useLoaderData } from 'react-router';
import CountryCard from '../CountryCard/CountryCard';
import './countries-style.css'
const Countries = () => {
    const countryData = useLoaderData();
    return (
        <div>
            Countries  Page
            <div className='countries-style'>
                {
                    countryData.map((country) => <CountryCard key={countryData.cca3} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Countries;