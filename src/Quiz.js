import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
let quizData = require('./quiz_data.json')
class Quiz extends Component
{
  constructor(props)
  {
    this.props={quizData.quiz_questions}
    this.state={quiz_position:1}
  }
  render()
  {
    return<div><QuizQuestion/></div>;
  }
}
export default Quiz
