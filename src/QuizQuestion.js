import React, {Component} from 'react'
class QuizQuestion extends Component
{
  render()
  {
    return <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
          <ul>
            //quiz question button logic goes here
            <li> this.props.quiz_question.answer_options[0]</li>
          </ul>
        </section>
      </main>
  }

}
export default QuizQuestion
