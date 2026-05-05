import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Question from './Question';
import useQuestion from './useQuestion';

function App() {

 const { state, sort, handelSelection } = useQuestion()

 
  

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
    </nav>

    <Question state={state} sort={sort} handelSelection = {handelSelection}></Question>
        <h1>{state.score}</h1>
        <h1>{state.currentquestionNum}</h1>
        {state.currentQuestion.answer}
        {state.currentquestionNum}
    </>
  );
}

export default App;
