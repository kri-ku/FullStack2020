import React, { useState } from 'react';
import CountryStats from './CountryStats';

const Country = ({ country }) => {
    return (
        <>{country.name}</>
    )
}
const ShowCountries = ({ countries }) => {
    const[country, setCountry] = useState({})
    const[clickVisible, setClickVisible] = useState(false)

    const makeCountryVisible=(c)=> {
        setCountry(c)
        setClickVisible(true)
    }


    if(!clickVisible) {
        if (countries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (countries.length > 1 && countries.length <= 10) {
                return (
                    <div>
                        {countries.map(c =>
                            <p key={c.topLevelDomain}>
                                <Country country={c} />
                                <button onClick={()=>makeCountryVisible(c)} style={{ margin: 5 }}>show</button>
                            </p>
                        )}
                    </div>
                )
        
        } else {
            const countryObj = countries[0]
            return (
                <CountryStats country={countryObj} />
            )
    
        }

    } 

    return(
        <CountryStats country={country}/>
    )
 
}

export default ShowCountries