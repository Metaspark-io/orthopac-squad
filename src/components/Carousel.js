import React, { Component } from 'react'
import { map } from 'lodash'
import { MdOpenInNew } from 'react-icons/md'

import comicBook from '../images/orthopac-comic-page-1.png'

import HEROES from '../constants/heroes'

import './flickity.css'
let Flickity = () => (null)
if (typeof window !== 'undefined') {
  Flickity = require('react-flickity-component')
}

const flickityOptions = {
  wrapAround: true,
  dragThreshold: 10,
  reloadOnUpdate: true, // needed so it renders correct out the gate
}

export default class Carousel extends Component {
  state = {
    triggerUpdate: false,
  }
  intervalId = null

  componentDidMount () {
    // Super hacky but it will force flickity to resize every two seconds in case images are taking
    // forever to load
    this.intervalId = setInterval(() => {
      this.setState({ triggerUpdate: Date.now() })
    }, 2000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    const { triggerUpdate } = this.state
    return (
      <div className="mb-5" id="heroes">
        <Flickity options={flickityOptions}>
          <div className="container mx-5 slide">
            <div className="card card-comic">
              <div className="card-body d-flex flex-wrap">
                <div className="col-12 col-md-5">
                  <img src={comicBook} className="img-fluid mr-3" alt="Skeletal Man, The Battle of Proliferating Paperwork"/>
                </div>
                <div className="col-12 col-md-7">
                  <div className="d-flex h-100 align-items-center">
                    <div>
                      <h1>The Battle of Proliferating Paperwork</h1>
                      <p>Read about Skeletal Man's Origin Story, in this exclusive comic book!</p>
                      <a
                        className="btn btn-primary"
                        href="/orthopac-comic.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Now <MdOpenInNew/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      image,
      intro,
      superPower,
      sourceOfPower,
      randomFact,
      randomFact2,
      duties,
      pacInfo,
      quote,
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
              <img src={image} className="img-fluid mr-3" alt={name}/>
            </div>
            <div className="col-12 col-md-8">
              <small className="text-muted d-block text-uppercase">Hero</small>
              <h2>{name}</h2>
              <blockquote className="border-left pl-3 py-2">
                <p className="h6 mb-1 text"><em>{quote}</em></p>
                <div className="blockquote-footer"><cite title="Source Title">{name}</cite></div>
              </blockquote>
              <p>{intro}</p>
              {superPower && <p>Super power: {superPower}</p>}
              {sourceOfPower && <p>Source of Power: {sourceOfPower}</p>}
              {randomFact && <p>Random Fact: {randomFact}</p>}
              {randomFact2 && <p>Random Fact 2: {randomFact2}</p>}
              {duties && <p>Duties: {duties}</p>}
              {pacInfo && <p>OrthoPAC Advocacy Specifics: {pacInfo}</p>}
              <div className="row">
                <div className="col-12 col-md-8">
                  <small className="text-muted d-block text-uppercase">Arch-Nemesis</small>
                  <h3>{villainName}</h3>
                  <p>{villainIntro}</p>
                </div>
                <div className="col-12 col-md-4">
                  <img className="img-fluid" src={villainImage} alt={villainName} />
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
