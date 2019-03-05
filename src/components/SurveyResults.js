import React, { Component } from 'react'

import { HeroSlide } from './Carousel'
import { AskList } from '../components/Ask'

import HEROES from '../constants/heroes'

export default class SurveyResults extends Component {
  render () {
    const { result } = this.props
    const hero = HEROES[result]
    return (
      <React.Fragment>
        <div className="container my-5">
          <h1 className="text-white">You are most like:</h1>
          <HeroSlide slide={false} {...hero}/>
        </div>
        <div className="my-5">
          <AskList/>
        </div>
      </React.Fragment>
    )
  }
}
