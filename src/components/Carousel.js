import React, { Component } from 'react'
import Flickity from 'react-flickity-component'

import './flixity.css'

const flickityOptions = {
  wrapAround: true,
  dragThreshold: 10,
  imagesLoaded: true
}

export default class Carousel extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <div class="mb-5">
          <Flickity options={flickityOptions}>
            <HeroSlide/>
            <HeroSlide/>
            <HeroSlide/>
            <HeroSlide/>
            <HeroSlide/>
            <HeroSlide/>
          </Flickity>
        </div>
      )
    }
    return null
  }
}

class HeroSlide extends Component {
  render() {
    return (
      <div class="container mx-5 slide">
        <div class="card card-comic">
          <div class="card-body d-flex">
            <div class="col-12 col-md-4">
              <img src="https://via.placeholder.com/200x400?text=Hero" class="mr-3"/>
            </div>
            <div class="col-12 col-md-8">
              <h2>Skeletal Man</h2>
              <p>Introducing the co-leader of the OrthoPAC Squad! The Skeletal One’s specialty is fundraising for personal contributions that help elect and re-elect champions of MSK care.</p>
              <p>Super power: Flight</p>
              <p>Source of Power: SM is propelled by the participation of our team! The more OrthoPAC members we have on board, the stronger he becomes. Last cycle, we were over 5,000 members strong — and growing! This year, he’s stronger than ever, seeing our PAC grow by 15% just last election cycle.</p>
              <p>Random Fact: Both he and the OrthoPAC are celebrating their 20th birthday this year.</p>
              <div class="row">
                <div class="col-12 col-md-8">
                  <h3>The Red Tape Mummy</h3>
                  <p>Wielding the fearsome power of over-regulation, RTM makes things stickier and more complicated, drowning people in paperwork and making a convoluted mess of everything.</p>
                </div>
                <div class="col-12 col-md-4">
                  <img src="https://via.placeholder.com/200x200?text=Villian" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
