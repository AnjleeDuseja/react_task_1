import { useState } from "react";
import { quiz } from "../main";

const useQuizes = () => {
  //
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredQuiz, setAnsweredQuiz] = useState(quiz);
  const [showResultPage, setShowResultPage] = useState(false);

  //   taking value from each input and updating the correct answer from quiz
  const handleSimpleInput = (e) => {
    answeredQuiz[currentQuestion].correct_answer = e.target.value;
  };

  // ------------------------------
  // allAnswers  holds the correct answers to all questions
  const handleSubmit = () => {
    const allAnswers = answeredQuiz.map((answer) => answer.correct_answer);
    setShowResultPage(true)
    console.log(allAnswers);
  };
  // ------------------------------

  return {
    currentQuestion,
    setCurrentQuestion,
    answeredQuiz,
    setAnsweredQuiz,
    handleSimpleInput,
    handleSubmit,
    showResultPage
  };
};

export default useQuizes;
