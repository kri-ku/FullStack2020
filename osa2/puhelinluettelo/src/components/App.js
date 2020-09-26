import React, { useState, useEffect } from 'react';
import FilterForm from './FilterForm';
import PersonForm from './PersonForm';
import ShowPersons from './ShowPersons';
import personService from '../services/persons';
import Notification from './Notification';


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [filterable, setFilterable] = useState('')
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    const personsToShow = showAll
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filterable.toLowerCase()))

    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    })

    const personExists = (newName) => {
        const names = persons.map(person => person.name.toLowerCase().trim())
        const includes = names.includes(newName.toLowerCase().trim())
        return includes
    }

    const addPerson = (event) => {
        event.preventDefault()

        const personObj = {
            name: newName.trim(),
            number: newNumber.trim()
        }

        if (personExists(newName)) {
            if (window.confirm(`${newName} is already added to the phonebook,
            replace the old number with new one?`)) {
                const oldPersonArray = persons.filter(p => p.name.toLowerCase().trim() === personObj.name.toLowerCase().trim())
                personService
                    .update(oldPersonArray[0].id, personObj)
                    .then(response => {
                        setNewName('')
                        setNewNumber('')
                        showMessage(`Number updated for ${personObj.name}`, "completed")

                    })
                    .catch(error => {
                        showMessage(`${personObj.name} has already been removed from the server`, "rejected")
                    })

            }
            setNewName('')
            setNewNumber('')

        } else {
            personService
                .create(personObj)
                .then(response => {
                    console.log(response.body)
                    setPersons(persons.concat(response.data))
                    setNewName('')
                    setNewNumber('')
                    showMessage(`Added ${personObj.name}!`, "completed")
                })
                .catch(error => {
                    setNewName('')
                    setNewNumber('')
                    showMessage(JSON.stringify(error.response.data), "rejected")
                    console.log("error", error.response.data)
                })

        }
    }

    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    const handleFilterChange = (event) => {
        setShowAll(!showAll)
        setFilterable(event.target.value)
    }

    const removePerson = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personService
                .remove(id)
                .then(response => showMessage(`${name} removed from the list`, "completed"))
                .catch(error => {
                    console.log(error)
                })
        }
    }

    const showMessage = (mes, type) => {
        setMessage(mes)
        setMessageType(type)
        setTimeout(() => {
            setMessage('')
            setMessageType('')
        }, 5000)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} type={messageType} />
            <FilterForm personsToShow={personsToShow} handleFilterChange={handleFilterChange} />
            <h3> Add a new</h3>
            <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
            <h2>Numbers</h2>
            <ShowPersons personsToShow={personsToShow} removePerson={removePerson} />
        </div>
    )
}

export default App