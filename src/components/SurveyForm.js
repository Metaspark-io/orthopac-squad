import React, { Component } from 'react'

import Question from './Question'

import QUESTIONS from '../constants/survey'

export default class SurveyForm extends Component {
  render () {
    return (
      <form className="survey-form">
        <h1>Which Hero Are You?</h1>
        {
          QUESTIONS.map((question, i) => (
            <Question key={i} question={question}/>
          ))
        }
      </form>
    )
  }
}
