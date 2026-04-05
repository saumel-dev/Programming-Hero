import React from 'react';
import './countryCard.css'
import { Link } from 'react-router';
const CountryCard = ({ country }) => {
    const { name: { common: name }, region, population, flags: { png: img }, cca3 } = country;
    // console.log(country);

    return (
        <div className='countryCard'>
            <h1>Name: {name}</h1>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <img style={{ width: '150px' }} src={img} alt="" />
            <Link to={`/countries/${cca3}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default CountryCard;