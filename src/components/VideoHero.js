import React, { Component } from 'react'
import VideoModal from './VideoModal'

import Title from '../images/videoHero/title.png'
import Tagline from '../images/videoHero/tagline.png'
import Left from '../images/videoHero/heroes-left.svg'
import Right from '../images/videoHero/heroes-right.svg'
import Play from '../images/videoHero/play.svg'

export default class VideoHero extends Component {
  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', 'video', 'play', 'click')
    }
  }

  render () {
    const { isOpen } = this.state
    return (
      <React.Fragment>
        <div className="cover-image">
          <div className="container d-flex flex-column align-items-center justify-content-center h-100">
            <div className="d-flex flex-column justify-content-center">
              <img className="align-self-center img-fluid p-4 mt-4 w-75" src={Title} alt="Meet the OrthoPAC Squad"/>
              <button className="btn align-self-center play-button">
                <img className="play-icon" src={Play} alt="Play" onClick={this.toggleOpen}/>
              </button>
            </div>
            <div className="row">
              <div className="col-6">
                <img className="img-fluid" src={Left} alt="Mighty Microscope, Super Specialty, Skeletal Man"/>
              </div>
              <div className="col-6">
                <img className="img-fluid" src={Right} alt="Ligament Lady, Ancillary Annie, Radical Reformer"/>
              </div>
            </div>
          </div>
          <img className="tagline " src={Tagline} alt="Advancing Orthopaedics for Good"/>
        </div>
        <VideoModal
          channel='vimeo'
          isOpen={isOpen}
          vimeo={{
            autoplay: true,
            api: true,
          }}
          videoId='322093424'
          onClose={() => this.setState({ isOpen: false })}
          onEnded={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    )
  }
}
