import { useMemo, useState } from "react";

const useQuestion = () => {

    let questionlist = [
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
    ];

    //page state
    const [state, setState] = useState(
        {


            currentQuestion: {
                text: questionlist[0].question,
                correctAnswer: questionlist[0].correct_answer,
                answer: [...questionlist[0].incorrect_answers, questionlist[0].correct_answer],
                isCorrect: null,
                option: 0,

            },
            score: 0,
            currentquestionNum: 1,

        }
    );




    //this is to get randorom sort for answers 
    const sort = useMemo(() => {
        const s = [0, 1, 2, 3];

        for (let i = s.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [s[i], s[j]] = [s[j], s[i]];
        }
        return s;
    }, []);

    //when user select the qustion 
    const handelSelection = (value, id) => {
        if (value === state.currentQuestion.correctAnswer) {
            setState({ ...state, score: state.score + 10, currentQuestion: { ...state.currentQuestion, isCorrect: "correct", option: id } })
        }
        else {
            setState({ ...state, currentQuestion: { ...state.currentQuestion, isCorrect: "incorrect", option: id } })
        }

        
            setTimeout(() => {

                setState({
                    ...state, 
                    currentquestionNum: state.currentquestionNum + 1,
                    currentQuestion: {
                        text: questionlist[state.currentquestionNum].question,
                        correctAnswer: questionlist[state.currentquestionNum].correct_answer,
                        answer: [...questionlist[state.currentquestionNum].incorrect_answers, questionlist[state.currentquestionNum].correct_answer],
                        isCorrect: null,
                        option: 0,

                    },
                })
            }, 5000);


    }

    return { state, sort, handelSelection }


}

export default useQuestion; 