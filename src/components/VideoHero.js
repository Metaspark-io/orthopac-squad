import React, { Component } from 'react'

import Title from '../images/videoHero/title.png'
import Left from '../images/videoHero/heroes-left.svg'
import Right from '../images/videoHero/heroes-right.svg'
import Play from '../images/videoHero/play.svg'

export default class VideoHero extends Component {
  render () {
    return (
      <div className="cover-image">
        <div className="container d-flex flex-column align-items-center justify-content-center h-100">
          <div className="d-flex flex-column justify-content-center">
            <img className="align-self-center img-fluid p-4 mt-4 w-75" src={Title}/>
            <button className="btn align-self-center">
              <img className="play-icon" src={Play} alt="Play"/>
            </button>
          </div>
          <div className="row">
            <div class="col-6">
              <img className="img-fluid" src={Left} alt="Mighty Microscope, Super Specialty, Skeletal Man"/>
            </div>
            <div class="col-6">
              <img className="img-fluid" src={Right} alt="Ligament Lady, Ancillary Annie, Radical Reformer"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
