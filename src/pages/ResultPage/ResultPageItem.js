import React from "react";

function ResultPageItem({ Item }) {
  return (
    <div
      className="mb-1 px-5 card rounded"
      style={{ width: "800px", backgroundColor: "#99673817" }}
    >
      <div className="d-flex flex-column ">
        <div className="d-flex">
          <div>
            <span className="fs-5 mx-2 text-danger">Question:{Item.id}</span>
            {Item.question}
          </div>
        </div>
        <div className="d-flex">
          <div>
            <span className="fs-5 mx-2 text-primary">Question Type:</span>
            {Item.type}
          </div>
        </div>
        <div className="d-flex">
          <div>
            <span className="fs-5 mx-2 text-success">Correct Answer:</span>
            {Item.correct_answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPageItem;
