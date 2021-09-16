import React from "react";
import classes from "./Project.module.css";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz.js";

class Project extends React.Component {
  state = {
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [
      {
        question: "Какого цвета небо ?",
        rightAnswerId: 2,
        answers: [
          { text: "Чёрный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Красный", id: 3 },
          { text: "Зелёный", id: 4 },
        ],
      },
      {
        question: "В каком году основали Санкт-Петербург ?",
        rightAnswerId: 3,
        answers: [
          { text: "1700", id: 1 },
          { text: "1702", id: 2 },
          { text: "1703", id: 3 },
          { text: "1803", id: 4 },
        ],
      },
    ],
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" },
      });

      const timeOut = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
          });
        }
        window.clearTimeout(timeOut);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "error" },
      });
    }
  };

  render() {
    return (
      <div className={classes.Project}>
        <div className={classes.ProjectWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Project;
