import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const ShowMostVoted =(props)=> {
  let index
  let biggestValue = props.votes[0]

  for(let i = 0; i < props.votes.length; i++) {
    if(props.votes[i] > biggestValue) {
      biggestValue = props.votes[i]
      index = i;
    }
  }

  if(index === undefined) {
    return(
      <div></div>
    )
  }

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <br/>
      <p>{props.anecdotes[index]}</p>
      <p>has {props.votes[index]} votes</p>

    </div>
    
  )
}


const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length))

  const HandleRandomAnecdote = () => {
    const rndm = Math.floor(Math.random() * props.anecdotes.length)
    setSelected(rndm)
  }

  const GiveVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={HandleRandomAnecdote} text="next anecdote"></Button>
      <Button handleClick={GiveVote} text="vote"></Button>
      <br/>
      <ShowMostVoted votes ={votes} anecdotes ={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,
  document.getElementById('root')
);


