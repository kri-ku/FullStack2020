import React from 'react';

const FilterForm = ({ filterable, handleFilterChange }) => {
    return (
        <div>
            filter shown with
            <input
                value={filterable}
                onChange={handleFilterChange}
                style={{ margin: 8 }} />
        </div>
    )

}

export default FilterForm