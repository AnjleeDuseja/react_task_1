import React from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./LongText.module.css";

const LongText = (props) => {
  const { question, answers } = props.quiz;
  const { handleSimpleInput } = useAuth();

  return (
    <div className=" p-2 ">
      <h5 className="">{question}</h5>
      <p className="text-muted">{answers.map((ans) => ans)}</p>

      <textarea
        placeholder="Answer goes here..."
        onChange={handleSimpleInput}
        className={styles.LongTextInput}
        required
        type="text"
      />
    </div>
  );
};

export default LongText;
