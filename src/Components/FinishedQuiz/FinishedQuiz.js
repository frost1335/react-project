import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    console.log(props.results[key]);
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error"
              ? "fa-times"
              : "fa-check",
            classes[props.results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")}></i>
            </li>
          );
        })}
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
