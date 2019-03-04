import React, { Component } from 'react'
import { FaPlay } from 'react-icons/fa'

import Title from '../images/videoHero/title.png'
import Left from '../images/videoHero/heroes-left.svg'
import Right from '../images/videoHero/heroes-right.svg'

export default class VideoHero extends Component {
  render () {
    return (
      <div className="cover-image" style={{ height: 'calc(100vh - 110px)' }}>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column justify-content-center">
            <img className="align-self-center img-fluid p-4 mt-4 w-75" src={Title}/>
            <button className="btn btn-lg btn-primary align-self-center d-flex rounded-circle p-3 border border-white">
              <FaPlay className="pl-1"/>
            </button>
          </div>
          <div className="row">
            <div class="col-6">
              <img className="img-fluid" src={Left}/>
            </div>
            <div class="col-6">
              <img className="img-fluid" src={Right}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
