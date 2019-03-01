import React, { Component } from 'react'

export default class SurveyResults extends Component {
  render () {
    const { result } = this.props
    return (
      <h1>Key is: {result}</h1>
    )
  }
}
