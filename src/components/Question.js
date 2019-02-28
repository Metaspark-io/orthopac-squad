import React, { Component } from 'react'
import { camelCase } from 'lodash'

const MultipleChoice = ({ question, formKey, answers }) => {
  return (
    <FormGroup>
      <legend>{question}</legend>
      {
        answers.map(({ label, value }, i) => {
          const id = camelCase(label)
          return (
            <div key={i} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={formKey}
                id={id} value={value}
              />
              <label className="form-check-label" htmlFor={id}>{label}</label>
            </div>
          )
        })
      }
    </FormGroup>
  )
}

const Slider = ({ question, formKey, range }) => {
  return (
    <FormGroup>
      <label htmlFor={formKey}>{question}</label>
      <input
        type="range"
        className="form-control-range"
        id={formKey}
        name={formKey}
        step={1}
        min={range.lower}
        max={range.upper}
      />
    </FormGroup>
  )
}

const TextArea = ({ question, formKey, textfield }) => {
  return (
    <FormGroup>
      <label className="h3" htmlFor={formKey}>{question}</label>
      <textarea
        height={textfield.height}
        placeholder={textfield.placeholder}
        className="form-control"
        id={formKey}
        name={formKey}
      />
    </FormGroup>
  )
}

const FormGroup = ({ children, classes }) => (
  <div className={`form-group ${ classes || '' }`}>
    {children}
  </div>
)

export default class Question extends Component {
  render () {
    const { question: { key, question, answers, range, textfield } } = this.props

    if (answers) {
      return (
        <MultipleChoice
          key={key}
          formKey={key}
          question={question}
          answers={answers}
        />

      )
    }

    if (range) {
      return (
        <Slider
          key={key}
          formKey={key}
          question={question}
          range={range}
        />
      )
    }

    if (textfield) {
      return (
        <TextArea
          key={key}
          formKey={key}
          question={question}
          textfield={textfield}
        />
      )
    }

    return (
      <p>Not a valid question</p>
    )
  }
}
