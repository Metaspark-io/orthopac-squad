import React, { Component } from 'react'
import { countBy, includes } from 'lodash'

import Question from './Question'

import QUESTIONS from '../constants/survey'
import HEROES from '../constants/heroes'

export default class SurveyForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { target } = e
    const fields = QUESTIONS.map(q => (q.key))
    const data = {}
    const body = {
      // Adding values that we need from form
      email: target.email.value,
      'form-name': target['form-name'].value,
      'bot-field': target['bot-field'].value,
    }
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

    // this.sendFormData(body).then(response => {
    //   if (response.ok) {
    //     const heroResult = getMaxHero(data)
    //     this.props.handleResult(heroResult)
    //   } else {
    //     alert('An error occured')
    //   }
    // }).catch(err => {
    //   alert(err)
    // })
    const heroResult = getMaxHero(data)
    this.props.handleResult(heroResult)
  }

  sendFormData = json => {
    const body = new FormData()
    Object.keys(json).forEach(k => {
      body.append(k, json[k])
    })
    return fetch(
      '/?no-cache=1', // This should prevent it from hitting service worker
      {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
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
        netlify="true"
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

const getMaxHero = results => {
  const heroKeys = Object.keys(HEROES)
  // Create count object with occurences of hero keys
  let count = countBy(results, result => {
    if (includes(heroKeys, result)) {
      return result
    }
  })
  // We don't want to select an undefined value
  if (count['undefined']) {
    delete count['undefined']
  }
  // Returns a single value even if they have the same number of occurences as others
  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b))
}
