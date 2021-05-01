import React, { useState } from "react";
import "./App.scss";

// Code inspired from: https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/

const App = () => {
  const questions = [
    {
      questionText: "What is the capital of New Zealand?",
      answerOptions: [
        {
          answerText: "Wellington",
          isCorrect: true,
        },
        {
          answerText: "Auckland",
          isCorrect: false,
        },
        {
          answerText: "Christchurch",
          isCorrect: false,
        },
        {
          answerText: "Queenstown",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What is a group of Kangaroos called?",
      answerOptions: [
        {
          answerText: "Cluster",
          isCorrect: false,
        },
        {
          answerText: "Group",
          isCorrect: false,
        },
        {
          answerText: "Herd",
          isCorrect: false,
        },
        {
          answerText: "Mob",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Which brand of car is the Civic?",
      answerOptions: [
        {
          answerText: "Ford",
          isCorrect: false,
        },
        {
          answerText: "Honda",
          isCorrect: true,
        },
        {
          answerText: "Toyota",
          isCorrect: false,
        },
        {
          answerText: "Nissan",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((currentScore) => currentScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <div>
          You scored {score} out of {questions.length} questions
        </div>
      ) : (
        <>
          <p>{questions[currentQuestion].questionText}</p>

          <div className="answers">
            <p>
              {questions[currentQuestion].answerOptions.map(
                (answerOptions, index) => (
                  <button
                    key={index}
                    onClick={() => handleCorrectAnswer(answerOptions.isCorrect)}
                  >
                    {answerOptions.answerText}
                  </button>
                )
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
