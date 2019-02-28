import React, { Component } from 'react'

const MultipleChoice = ({ question, formKey, answers }) => {
  return (
    <FormGroup>
      <legend>{question}</legend>
      {
        answers.map(({ label, value }, i) => (
          <div key={i} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={formKey}
              id={formKey} value={value}
            />
            <label className="form-check-label" htmlFor={formKey}>{label}</label>
          </div>
        ))
      }
    </FormGroup>
  )
}

const Slider = ({ question, formKey, range }) => {
  return (
    <FormGroup>
      <label htmlFor={formKey}>{question}</label>
    </FormGroup>
  )
}

const TextArea = ({ question, formKey, textfield }) => {
  return (
    <FormGroup>
      <label htmlFor={formKey}>{question}</label>
    </FormGroup>
  )
}

const FormGroup = ({ children, classes }) => (
  <div className={`form-group ${ classes }`}>
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
