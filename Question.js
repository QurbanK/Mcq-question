import React, { useState } from "react";
import "./Question.css";

const Question = () => {
  const question = [
    {
      questionText: "What is the capital of India",
      answerOptions: [
        { answerText: "New Delhi", iscorrect: true },
        { answerText: "Mumbai", iscorrect: false },
        { answerText: "Lucknow", iscorrect: false },
        { answerText: "Keral", iscorrect: false },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", iscorrect: false },
        { answerText: "Bill Gates", iscorrect: true },
        { answerText: "ELon Musk", iscorrect: false },
        { answerText: "Tony Sark", iscorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", iscorrect: false },
        { answerText: "4", iscorrect: false },
        { answerText: "8", iscorrect: false },
        { answerText: "7", iscorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {question.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{question.length}
            </div>
            <div className="question-text">
              {question[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {question[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.iscorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
