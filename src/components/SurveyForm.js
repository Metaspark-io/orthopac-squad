import React, { Component } from 'react'

import Question from './Question'

import QUESTIONS from '../constants/survey'

export default class SurveyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const fields = QUESTIONS.map(q => (q.key))
    const data = {}
    fields.forEach(field => {
      const formField = target[field]
      data[field] = formField.value
    })

    this.sendFormData(target)
    console.log(data) // Will be used to figure out hero
  }

  sendFormData = async form => {
    const body = new FormData(form)
    const method = form.getAttribute('method')
    try {
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
      if (response.ok) {
        console.log('success', response)
      }
    } catch (e) {
      console.log('error', e)
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
        {
          // We need this hidden field to connect it with netlify form
        }
        <input type="hidden" name="form-name" value="hero" />
        <button className="btn btn-primary btn-lg" type="submit">
          Find Out Now
        </button>
      </form>
    )
  }
}
