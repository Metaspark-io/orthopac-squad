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
        <div className="issues-bg">
          {
            !result &&
            <div className="container">
              <div className="card card-comic my-5">
                <div className="card-body">
                  <SurveyForm handleResult={this.handleResult}/>
                </div>
              </div>
            </div>
          }
          {
            result &&
            <SurveyResults result={result}/>
          }
        </div>
      </Layout>
    )
  }
}
