import { useState } from "react";

let Question = ({ state }) => {

    let [question, setQuestion] = useState({
        text: state.questionlist[state.currentquestionNum - 1].question,
        correctAnswer: state.questionlist[state.currentquestionNum - 1].correct_answer,
        answer: [...state.questionlist[state.currentquestionNum - 1].incorrect_answers, state.questionlist[state.currentquestionNum - 1].correct_answer],
        isCorrect: null,

    })


    let getRandoemSort = () => {
        const sort = [0, 1, 2, 3];

        for (let i = sort.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sort[i], sort[j]] = [sort[j], sort[i]];
        }
        return sort
    }

  
      const sort = getRandoemSort()


    let handelSelection = (value, id) => {

        if (value === question.correctAnswer) {
            setQuestion({ ...question, isCorrect: "correct" });
        }
        else {
            setQuestion({ ...question, isCorrect: "incorrect" })
        }
    }




    return (
        <div className="question">
            <h2>{question.text}</h2>
            <div className="radiodiv">
                <div id="option1" className={question.isCorrect === "correct" ? "option correct" : question.isCorrect === "incorrect" ? "option incorrect" : "option"} onClick={() => handelSelection(question.answer[sort[0]], "option1")}>{question.answer[sort[0]]}</div>
                <div id="option2" className={"option"} onClick={() => handelSelection(question.answer[sort[1]], "option2")}>{question.answer[sort[1]]}</div>
                <div id="option3" className={"option"} onClick={() => handelSelection(question.answer[sort[2]], "option3")}>{question.answer[sort[2]]}</div>
                <div id="option4" className={"option"} onClick={() => handelSelection(question.answer[sort[3]], "option4")}>{question.answer[sort[3]]}</div>
            </div>
        </div>
    )
}

export default Question; 