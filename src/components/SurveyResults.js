import React, { Component } from 'react'

import { HeroSlide } from './Carousel'

import HEROES from '../constants/heroes'

export default class SurveyResults extends Component {
  render () {
    const { result } = this.props
    const hero = HEROES[result]
    return (
      <div className="container">
        <h1>You are most like:</h1>
        <HeroSlide slide={false} {...hero}/>
      </div>
    )
  }
}
