import React, { Component } from 'react'
let quizData = require('./quiz_data.json')
class Quiz extends Component
{
  constructor(props)
  {
    super(props)
    this.state={quiz_position:1}
  }
  render()
  {
    return<div><div className="QuizQuestion">{quiz_questions.map(({ id, instruction_text }) => (
        <p key=1>{instruction_text}</p></div></div>;
  }
}
export default Quiz
