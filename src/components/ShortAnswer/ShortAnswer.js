import { Button } from "bootstrap";
import React from "react";
import useAuth from "../../hooks/useAuth";

const ShortAnswer = (props) => {
  const { question } = props.quiz;
  const { answeredQuiz, setAnsweredQuiz, currentQuestion } = useAuth();

  const handleAnswer = (e) => {
    answeredQuiz[currentQuestion].correct_answer = e.target.value;
  };
  return (
    <div
      className=" p-2 "
      style={{ backgroundColor: "#bee0ec44", width: "800px", height: "200px" }}
    >
      <h4 style={{ color: "#51abcb90", textAlign: "left" }}>{question}</h4>

      <textarea
        id="shortAnswer"
        placeholder="Short Answer Here"
        onChange={handleAnswer}
        className="border-0 rounded d-flex justify-content-start my-2 text-secondary"
        style={{ backgroundColor: "transparent", align: "left" }}
        required
        type="text"
      />
      <div
        className=" my-3 text-secondary border d-flex justify-content-start"
        style={{ width: "200px", height: "40px" }}
      >
        <div
          className="me-3 ms-1 my-1 flex-start"
          style={{
            backgroundColor: "#51abcb90",
            width: "70px",
            height: "30px",
          }}
        >
          <b>
            OK<span>&#10003;</span>
          </b>
        </div>
        <div className="flex-end">
          <short>press</short> <b>ENTER</b>
        </div>
      </div>
    </div>
  );
};

export default ShortAnswer;
