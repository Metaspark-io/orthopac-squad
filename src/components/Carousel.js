import React, { Component } from 'react'
import Flickity from 'react-flickity-component'
import { map } from 'lodash'

import HEROES from '../constants/heroes'

import './flickity.css'

const flickityOptions = {
  wrapAround: true,
  dragThreshold: 10,
  imagesLoaded: true,
  reloadOnUpdate: true, // needed so it renders correct out the gate
}

export default class Carousel extends Component {
  render () {
    if (typeof window === 'undefined') {
      return null
    }
    return (
      <div className="mb-5" id="heroes">
        <Flickity options={flickityOptions}>
          {
            map(HEROES, (hero, k) => (
              <HeroSlide key={k} {...hero} />
            ))
          }
        </Flickity>
      </div>
    )
  }
}

export class HeroSlide extends Component {
  defaultProps = {
    slide: true
  }

  render () {
    const {
      name,
      alterEgo,
      image,
      intro,
      superPower,
      sourceOfPower,
      randomFact,
      duties,
      villainName,
      villainIntro,
      villainImage,
      slide,
    } = this.props
    return (
      <div className={slide ? 'container mx-5 slide' : '' }>
        <div className="card card-comic">
          <div className="card-body d-flex">
            <div className="col-12 col-md-4">
              <img src={image} className="mr-3"/>
            </div>
            <div className="col-12 col-md-8">
              <h2>{name}</h2>
              {alterEgo && <p>Alter Ego: {alterEgo}</p>}
              <p>{intro}</p>
              {superPower && <p>Super power: {superPower}</p>}
              {sourceOfPower && <p>Source of Power: {sourceOfPower}</p>}
              {randomFact && <p>Random Fact: {randomFact}</p>}
              {duties && <p>Duties: {duties}</p>}
              <div className="row">
                <div className="col-12 col-md-8">
                  <h3>{villainName}</h3>
                  <p>{villainIntro}</p>
                </div>
                <div className="col-12 col-md-4">
                  <img src={villainImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
