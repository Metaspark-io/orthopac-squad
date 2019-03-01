import React, { Component } from 'react'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import SurveyForm from '../components/SurveyForm'
import SurveyResults from '../components/SurveyResults'

export default class SurveyPage extends Component {
  state = {
    result: null,
  }

  handleResult = result => {
    this.setState({ result })
  }

  render () {
    const { result } = this.state
    return (
      <Layout>
        <Nav/>
        {
          !result && <SurveyForm handleResult={this.handleResult}/>
        }
        {
          result &&
          <SurveyResults result={result}/>
        }
      </Layout>
    )
  }
}
