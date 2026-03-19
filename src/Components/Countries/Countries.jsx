import React, {use, useState} from 'react';
import Country from './Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        // console.log('handle visited country clicked', country);
        const found = visitedCountries.some(c => c.cca3.cca3 === country.cca3.cca3);
        // console.log(found);
        if(!found){
            const newVisCountries = [...visitedCountries, country];
            setVisitedCountries(newVisCountries);
        }
        else{
            const newVisCountries = visitedCountries.filter(c => c.cca3.cca3 !== country.cca3.cca3);
            setVisitedCountries(newVisCountries);
        }

    }

    return (
        <div>
            <h1>Number of countries: {countries.length}</h1>
            <h3>Total visited countries: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(vis => <li key={vis.cca3.cca3}>{vis.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => 
                    <Country 
                        key={country.cca3.cca3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;