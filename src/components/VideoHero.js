import React, { Component } from 'react'
import ModalVideo from './YoutubeModal'

import Title from '../images/videoHero/title.png'
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
              <img className="align-self-center img-fluid p-4 mt-4 w-75" src={Title}/>
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
        </div>
        <ModalVideo
          channel='vimeo'
          isOpen={isOpen}
          videmo={{
            color: 'cc1231',
            autoplay: true,
          }}
          videoId='322093424'
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    )
  }
}
