import React, { Component } from 'react'

import Question from './Question'

import QUESTIONS from '../constants/survey'

export default class SurveyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const fields = QUESTIONS.map(q => (q.key))
    const data = {}
    const body = {
      email: target.email.value,
      'form-name': target['form-name'].value,
      'bot-field': target['bot-field'].value,
    } // Contains more human readable responses
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

    this.sendFormData(body)
    console.log(data) // Will be used to figure out hero
  }

  sendFormData = json => {
    const body = new FormData()
    Object.keys(json).forEach(k => {
      body.append(k, json[k])
    })
    fetch(
      '/?no-cache=1', // This should prevent it from hitting service worker
      {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    ).then(response => {
      if (response.ok) {
        console.log('success', response)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    // This form is a netlify form, if this ever moves from netlify it will need
    // a new endpoint to hit
    return (
      <form
        className="survey-form"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        method="POST"
        name="hero"
        netlify-honeypot="bot-field"
        netlify
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
        <label className="d-none">Don’t fill this out if you're human: <input name="bot-field"/></label>
        <button className="btn btn-primary btn-lg" type="submit">
          Find Out Now
        </button>
      </form>
    )
  }
}
