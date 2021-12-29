import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
let quizData = require('./quiz_data.json')
class Quiz extends Component
{
  constructor(props)
  {
    this.props={quiz_questions}
    this.state={quiz_position:1}
  }
  render()
  {
    return<div><QuizQuestion quiz_question=this.props[this.state -1]/></div>;
  }
}
export default Quiz
