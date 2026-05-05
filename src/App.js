import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Question from './Question';

function App() {



  const [state, setState] = useState(
    {
      questionlist: [
        {
          question: "Which of these bones is hardest to break?",
          correct_answer: "Femur",
          incorrect_answers: ["Cranium", "Humerus", "Tibia"]
        },
        {
          question: "In which year did the First World War begin?",
          correct_answer: "1914",
          incorrect_answers: ["1930", "1917", "1939"]
        },
        {
          question: "The human right lung has how many lobes?",
          correct_answer: "3",
          incorrect_answers: ["4", "2", "1"]
        },
        {
          question: "When was the first official international game played?",
          correct_answer: "1872",
          incorrect_answers: ["1880", "1863", "1865"]
        },
        {
          question: "Who is often called the Maestro in the men's tennis circuit?",
          correct_answer: "Roger Federer",
          incorrect_answers: ["Bill Tilden", "Boris Becker", "Pete Sampras"]
        }
      ],
      currentquestionNum:1,
      score: 0,
    }
  );

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

    <Question state={state} ></Question>
    </>
  );
}

export default App;
