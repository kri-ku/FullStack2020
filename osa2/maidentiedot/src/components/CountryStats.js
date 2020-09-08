import React from 'react';
import ShowWeather from './ShowWeather'

const ShowCountry = ({ country }) => {
    if (country) {
        return (
            <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p><br />
                <h2>languages</h2>
                <ul>
                    {country.languages.map(language => 
                        <li key={language.iso639_1}>
                            {language.name}
                        </li>
                    )}
                </ul>
                <img src={country.flag} alt="flag" style={{width:500}}></img>
                <ShowWeather country={country.name}></ShowWeather>
                    
            </div>
        )

    }
    return <></>
}


export default ShowCountry;