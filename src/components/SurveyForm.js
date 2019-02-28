import React, { Component } from 'react'

import Question from './Question'

import QUESTIONS from '../constants/survey'

export default class SurveyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const fields = QUESTIONS.map(q => (q.key))
    const body = {}
    const data = {}
    fields.forEach(field => {
      const formField = target[field]
      data[field] = formField.value
      if (formField.length > 0) {
        let value
        formField.forEach(f => { if (f.value === formField.value) { value = f.id } })
        body[field] = value
      } else {
        body[field] = formField.value
      }
    })
    console.log(body) // Will get submitted to a spreadsheet
    console.log(data) // Will be used to figure out hero
  }

  render () {
    return (
      <form className="survey-form" onSubmit={this.handleSubmit}>
        <h1>Which Hero Are You?</h1>
        {
          QUESTIONS.map((question, i) => (
            <Question key={i} question={question}/>
          ))
        }
        <button className="btn btn-primary btn-lg" type="submit">
          Find Out Now
        </button>
      </form>
    )
  }
}
