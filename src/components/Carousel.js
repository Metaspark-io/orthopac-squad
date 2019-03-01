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
      <div class="mb-5" id="heroes">
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

class HeroSlide extends Component {
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
    } = this.props
    return (
      <div class="container mx-5 slide">
        <div class="card card-comic">
          <div class="card-body d-flex">
            <div class="col-12 col-md-4">
              <img src={image} class="mr-3"/>
            </div>
            <div class="col-12 col-md-8">
              <h2>{name}</h2>
              {alterEgo && <p>Alter Ego: {alterEgo}</p>}
              <p>{intro}</p>
              {superPower && <p>Super power: {superPower}</p>}
              {sourceOfPower && <p>Source of Power: {sourceOfPower}</p>}
              {randomFact && <p>Random Fact: {randomFact}</p>}
              {duties && <p>Duties: {duties}</p>}
              <div class="row">
                <div class="col-12 col-md-8">
                  <h3>{villainName}</h3>
                  <p>{villainIntro}</p>
                </div>
                <div class="col-12 col-md-4">
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
