import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedFlags = (flag) => {
        console.log('flags need to be added', flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
        
    }
    // console.log(countries);
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total visited flag: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;