import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <>{props.course}</>
const Content = (props) => props.parts.map(part => <p key={part.name}> {part.name} {part.exercises} </p>)

const Total = (props) => {
  let sum = 0;
  props.parts.forEach(element => sum += element.exercises)
  return (
    <p>Number of excercises {sum}</p>
  )

}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))