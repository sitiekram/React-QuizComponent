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
  const {quiz_question} =this.props[this.state -1]
  render()
  {
    return<div><QuizQuestion quiz_question = {quiz_question}/></div>;
  }
}
export default Quiz
