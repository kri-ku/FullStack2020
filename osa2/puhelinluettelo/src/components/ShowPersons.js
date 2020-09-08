import React from 'react';

const ShowPersons = ({ personsToShow, removePerson }) => {

    return (
        <div>
            {personsToShow.map(person =>
                <p key={person.id}>{person.name} {person.number}<button style={{margin:5}}onClick={()=>removePerson(person.id, person.name)}>delete</button></p>)}
                
        </div>
    )

}

export default ShowPersons