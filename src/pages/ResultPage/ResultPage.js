import React from "react";
import useAuth from "../../hooks/useAuth";

import ResultPageItem from "./ResultPageItem";

const ResultPage = () => {
  const { answeredQuiz } = useAuth();
  return (
    <div>
      {" "}
      <h1>Quiz Result </h1>
      {answeredQuiz.map((item) => (
        <ResultPageItem key={item.id} Item={item} />
      ))}
    </div>
  );
};

export default ResultPage;
