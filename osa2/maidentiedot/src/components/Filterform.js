import React from 'react';

const FilterForm =({country, handleFilterChange})=> {
    return(
      <div>
        Find countries
        <input
        value={country}
        onChange={handleFilterChange}
        style={{margin:15}}/>
      </div>
    )
  }
  export default FilterForm;
