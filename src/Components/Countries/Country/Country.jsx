import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    // console.log(country.name);
    const [visited, setVisited] = useState(false);
    const checkVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'country-vis'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} square km  ({country.area.area > 300000 ? 'Big Country' : 'Small Country'})</p>
            <button className='btn-vis' onClick={checkVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;