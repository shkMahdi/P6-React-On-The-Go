import React from 'react';
import './country.css'
const Country = ({country}) => {
    // console.log(country.name);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} square km  ({country.area.area > 300000 ? 'Big Country' : 'Small Country'})</p>
        </div>
    );
};

export default Country;