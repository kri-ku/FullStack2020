import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FilterForm from './Filterform';
import ShowCountries from './ShowCountries';


const App=()=> {
  const[searchWord, setSearchWord] = useState('')
  const[allCountries, setAllCountries] = useState([])

  const handleFilterChange =(event)=>{
    setSearchWord(event.target.value)
  }

  useEffect(()=> {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setAllCountries(response.data)
    })
  }, [])

  const countriesToShow = allCountries.filter(country => country.name.toLowerCase().includes(searchWord.toLowerCase()))
  
  return (
    <div>
      <FilterForm country = {searchWord} handleFilterChange={handleFilterChange}></FilterForm>
      <ShowCountries countries ={countriesToShow}></ShowCountries>
    </div>
  )
}

export default App;
