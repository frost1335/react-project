import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem.js";

const AnswersList = (props) => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          state={props.state ? props.state[answer.id] : null}
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
        />
      );
    })}
  </ul>
);

export default AnswersList;
