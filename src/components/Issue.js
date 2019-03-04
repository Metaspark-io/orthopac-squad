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
      villainImage,
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
          <h4 className="text-center">{tagline}</h4>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="card">
                <div className="p1">
                  <Zoom left cascade>
                    <img className="img-fluid" src={heroImage} alt="Hero"/>
                  </Zoom>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
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
                    <span
                      onClick={this.toggleReadMore}
                      className="btn btn-link btn-block btn-sm mx-auto text-muted"
                    >{readMoreExpanded ? <span>Read Less<MdExpandLess/></span> : <span>Read More<MdExpandMore/></span>}
                    </span>
                  </div>
                  <a href="#" className="btn btn-block btn-primary">Join the fight with AAOS</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="card">
                <div className="p1">
                  <Zoom right cascade>
                    <img className="img-fluid" src={villainImage} alt="Villian"/>
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
