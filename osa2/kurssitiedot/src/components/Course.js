import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>
const Content = ({ parts }) => parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p>)

const Total = ({ parts }) => {
    const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <h3>Total of {totalAmount} exercises</h3>
}


const Course = ({ course }) => {

    return (
        <>
            <Header course={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
        </>
    )

}

export default Course