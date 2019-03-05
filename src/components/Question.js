import React, { Component } from 'react'
import { camelCase } from 'lodash'

const MultipleChoice = ({ question, formKey, answers }) => {
  return (
    <FormGroup>
      <label className="h4 mb-3">{question}</label>
      {
        answers.map(({ label, value }, i) => {
          const id = camelCase(label)
          return (
            <div key={i} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={formKey}
                id={id}
                value={value}
                required
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
      <label className="h4 mb-3" htmlFor={formKey}>{question}</label>
      <div className="d-flex">
        <span className="text-muted h5 mx-2">0hrs</span>
        <input
          type="range"
          className="form-control-range"
          id={formKey}
          name={formKey}
          step={1}
          min={range.lower}
          max={range.upper}
          required
          list="tickmarks"
        />
        <datalist id="tickmarks">
          <option value="0"/>
          <option value="10"/>
          <option value="20"/>
          <option value="30"/>
          <option value="40"/>
          <option value="50"/>
          <option value="60"/>
          <option value="70"/>
          <option value="80"/>
          <option value="90"/>
          <option value="100"/>
        </datalist>
        <span className="text-muted h5 mx-2">40hrs</span>
      </div>
    </FormGroup>
  )
}

const TextArea = ({ question, formKey, textfield }) => {
  return (
    <FormGroup>
      <label className="h4 mb-3" htmlFor={formKey}>{question}</label>
      <textarea
        height={textfield.height}
        placeholder={textfield.placeholder}
        className="form-control"
        id={formKey}
        name={formKey}
        required
      />
    </FormGroup>
  )
}

const FormGroup = ({ children, classes }) => (
  <div className={`form-group mb-5 ${ classes || '' }`}>
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
