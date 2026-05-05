
import useQuestion from "./useQuestion";


let Question = () => {


    const { state, sort, handelSelection } = useQuestion()


 



    return (
        <div className="question">
            <h2>{state.text}</h2>
            <div className="radiodiv">
                <div id="option1" className={(state.currentQuestion.option === 1 && state.currentQuestion.isCorrect) === "correct" ? "option correct" : (state.currentQuestion.option === 1 && state.currentQuestion.isCorrect === "incorrect") ? "option incorrect" : "option"} onClick={() => handelSelection(state.currentQuestion.answer[sort[0]], 1)}>{state.currentQuestion.answer[sort[0]]}</div>
                <div id="option3" className={(state.currentQuestion.option === 3 && state.currentQuestion.isCorrect) === "correct" ? "option correct" : (state.currentQuestion.option === 3 && state.currentQuestion.isCorrect === "incorrect") ? "option incorrect" : "option"} onClick={() => handelSelection(state.currentQuestion.answer[sort[2]], 3)}>{state.currentQuestion.answer[sort[2]]}</div>
                <div id="option4" className={(state.currentQuestion.option === 4 && state.currentQuestion.isCorrect) === "correct" ? "option correct" : (state.currentQuestion.option === 4 && state.currentQuestion.isCorrect === "incorrect") ? "option incorrect" : "option"} onClick={() => handelSelection(state.currentQuestion.answer[sort[3]], 4)}>{state.currentQuestion.answer[sort[3]]}</div>
                <div id="option2" className={(state.currentQuestion.option === 2 && state.currentQuestion.isCorrect) === "correct" ? "option correct" : (state.currentQuestion.option === 2 && state.currentQuestion.isCorrect === "incorrect") ? "option incorrect" : "option"} onClick={() => handelSelection(state.currentQuestion.answer[sort[1]], 2)}>{state.currentQuestion.answer[sort[1]]}</div>
            </div>
        </div>
    )
}

export default Question; 