import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import './countryDetails.css'
const CountryDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { name: { common: name }, region, population, flags: { png: img }, capital } = data[0];
    return (
        <div>
            Country Details Page
            <div className='countryDetails'>
                <h1>Name: {name}</h1>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <h3>Capital: {capital} </h3>
                <img style={{ width: '150px' }} src={img} alt="" />
                <br />
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>
    );
};

export default CountryDetails;