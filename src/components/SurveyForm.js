import React, { Component } from 'react'

import Question from './Question'

import QUESTIONS from '../constants/survey'

export default class SurveyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const fields = QUESTIONS.map(q => (q.key))
    const body = {
      email: target.email.value,
    }
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

    this.sendFormData(target)
    console.log(body) // Will get submitted to a spreadsheet
    console.log(data) // Will be used to figure out hero
  }

  sendFormData = async form => {
    const body = new FormData(form)
    const method = form.getAttribute('method')
    const response = await fetch(
      window.location.href,
      {
        method,
        body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    if (response.status !== 200) {
      console.log('error', response)
    } else {
      console.log('success', response)
    }
  }

  render () {
    // This form is a netlify form, if this ever moves from netlify it will need
    // a new endpoint to hit
    return (
      <form
        className="survey-form"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        method="post"
        name="hero"
      >
        <h1>Which Hero Are You?</h1>
        {
          QUESTIONS.map((question, i) => (
            <Question key={i} question={question}/>
          ))
        }
        <div className="form-group">
          <label className="h3">Your email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="JaneDoe@example.com"
            required
          />
        </div>
        <button className="btn btn-primary btn-lg" type="submit">
          Find Out Now
        </button>
      </form>
    )
  }
}
