import React, { Component } from 'react'
import { map } from 'lodash'

import HEROES from '../constants/heroes'

import './flickity.css'
let Flickity = () => (null)
if (typeof window !== 'undefined') {
  Flickity = require('react-flickity-component')
}

const flickityOptions = {
  wrapAround: true,
  dragThreshold: 10,
  imagesLoaded: true,
  reloadOnUpdate: true, // needed so it renders correct out the gate
}

export default class Carousel extends Component {
  state = {
    triggerUpdate: false,
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ triggerUpdate: true })
    }, 1000)
  }
  render () {
    const { triggerUpdate } = this.state
    return (
      <div className="mb-5" id="heroes">
        <Flickity options={flickityOptions}>
          {
            map(HEROES, (hero, k) => (
              <HeroSlide key={k} triggerUpdate={triggerUpdate} {...hero} />
            ))
          }
        </Flickity>
      </div>
    )
  }
}

export class HeroSlide extends Component {
  render () {
    const {
      name,
      alterEgo,
      image,
      intro,
      superPower,
      sourceOfPower,
      randomFact,
      randomFact2,
      duties,
      pacInfo,
      villainName,
      villainIntro,
      villainImage,
      slide,
    } = this.props
    return (
      <div className={slide ? 'container mx-5 slide' : ''}>
        <div className="card card-comic">
          <div className="card-body d-flex flex-wrap">
            <div className="col-12 col-md-4">
              <img src={image} className="img-fluid mr-3"/>
            </div>
            <div className="col-12 col-md-8">
              <h2>{name}</h2>
              {alterEgo && <p>Alter Ego: {alterEgo}</p>}
              <p>{intro}</p>
              {superPower && <p>Super power: {superPower}</p>}
              {sourceOfPower && <p>Source of Power: {sourceOfPower}</p>}
              {randomFact && <p>Random Fact: {randomFact}</p>}
              {randomFact2 && <p>Random Fact 2: {randomFact2}</p>}
              {duties && <p>Duties: {duties}</p>}
              {pacInfo && <p>Specific OrthoPAC info: {pacInfo}</p>}
              <div className="row">
                <div className="col-12 col-md-8">
                  <h3>{villainName}</h3>
                  <p>{villainIntro}</p>
                </div>
                <div className="col-12 col-md-4">
                  <img className="img-fluid" src={villainImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

HeroSlide.defaultProps = {
  slide: true
}
