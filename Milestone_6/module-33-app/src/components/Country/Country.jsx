import React, { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    // console.log(country.area.area);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        console.log('button clicked');
        if (visited) setVisited(false);
        else setVisited(true);

        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big country" : "Small country"}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => { handleVisitedFlags(country.flags.flags.png) }}>Add flag</button>
        </div>
    );
};

export default Country;

// inline css (style object)
// 