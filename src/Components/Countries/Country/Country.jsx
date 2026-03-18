import React from 'react';

const Country = ({country}) => {
    // console.log(country.name);
    return (
        <div>
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        </div>
    );
};

export default Country;