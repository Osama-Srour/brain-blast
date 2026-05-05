import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Question from './Question';
import useQuestion from './useQuestion';

function App() {

const { state } = useQuestion()

 
  

  //////////////////////////////////////////////////////////
  // useEffect(() => {
  //     // fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  //     // .then(res => res.json())
  //     // .then(data => {
  //     //     setState({...state, questions: data.results})
  //     // })

  // }, [])
  //////////////////////////////////////////////////////////



  return (
    <>
    <nav>
      <h1>Question Namber :{state.currentquestionNum}</h1>
      <h1>Score: {state.score}</h1>
      <button onClick={()=>{alert(state.score)}}> here</button>
    </nav>

    <Question state={state} ></Question>
    </>
  );
}

export default App;
