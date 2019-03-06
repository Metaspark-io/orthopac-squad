import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

import Section from './Section'

export default class Issue extends Component {
  state = {
    readMoreExpanded: false
  }

  toggleReadMore = () => {
    const { readMoreExpanded } = this.state
    this.setState({ readMoreExpanded: !readMoreExpanded })
  }

  render () {
    const {
      title,
      heroImage,
      heroName,
      villainImage,
      villianName,
      tagline,
      intro,
      victories,
      readMore,
    } = this.props
    const {
      readMoreExpanded
    } = this.state
    return (
      <div className="issue">
        <div className="col-12">
          <h3 className="text-center">{title}</h3>
          <h4 className="text-center font-weight-normal">{tagline}</h4>
          <div className="row">
            <div className="col-6 col-md-3 order-1">
              <div className="card">
                <div className="p1">
                  <Zoom left cascade>
                    <img className="img-fluid" src={heroImage} alt={heroName}/>
                  </Zoom>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-3 order-md-2">
              <div className="row">
                <div className="col-12">
                  <p className="mt-5">{intro}</p>
                  {
                    victories &&
                    <div>
                      <h4>Victories</h4>
                      <ul>
                        {
                          victories.map((victory, i) => (
                            <li key={i}>{victory}</li>
                          ))
                        }
                      </ul>
                    </div>
                  }
                  {
                    readMoreExpanded && readMore &&
                    readMore.map((section, i) => (
                      <Section key={i} section={section}/>
                    ))
                  }
                  <div className="d-flex align-items-center flex-wrap mb-3">
                    <hr className="mb-0 w-100"/>
                    <button
                      onClick={this.toggleReadMore}
                      className="btn btn-link btn-block mx-auto"
                    >
                      {readMoreExpanded ? <span>Read Less<MdExpandLess/></span> : <span>Read More<MdExpandMore/></span>}
                    </button>
                  </div>
                  <a href="https://www.aaos.org/Advocacy/PAC/?ssopc=1" className="btn btn-lg btn-block btn-primary">Join the fight with {heroName}</a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 order-2 order-md-3">
              <div className="card">
                <div className="p1">
                  <Zoom right cascade>
                    <img className="img-fluid" src={villainImage} alt={villianName}/>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
