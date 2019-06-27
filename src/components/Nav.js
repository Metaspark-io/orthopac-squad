import React, { Component } from 'react'
import { Link } from 'gatsby'
import MediaQuery from 'react-responsive'
import { MdOpenInNew } from 'react-icons/md'
import scrollToElement from 'scroll-to-element'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Background from '../images/speedlines.png'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _handleLinkClick = (e, target) => {
    // NODE-SAFE CODE
    // Gatsby uses Node to generate our pages.
    // Node doesn't know what a window is.
    // Be sure to wrap any of your browser interactions
    // in some sort of node-safe if statement like this:

    if (typeof window !== 'undefined') {
      // First, are we on the home page?
      // If so, let's scroll to the desired block,
      // which was passed in as an onClick prop on our Link.
      // An event was also passed, we'll preventDefault()

      if (window.ga) {
        window.ga('send', 'event', 'navigate', 'click', target)
      }

      if (window.location.pathname === '/') {
        e.preventDefault()
        scrollToElement(target, {
          offset: -100,
          duration: 1000,
        })
      }
    }
  }

  render () {
    const navBreak = '960px'
    return (
      <React.Fragment>
        <div className="container-fluid py-2 bg-white sticky-top border-bottom">
          <nav className="nav nav-pills nav-fill">
            <Link
              className="nav-item nav-link"
              onClick={e => this._handleLinkClick(e, '#issues')}
              to={'/#issues'}
            >
              <b>The Issues</b>
              <MediaQuery minWidth={navBreak}>
                <span className="d-block"><small>Learn about the battles AAOS fights</small></span>
              </MediaQuery>
            </Link>
            <Link
              className="nav-item nav-link"
              onClick={e => this._handleLinkClick(e, '#heroes')}
              to={'/#heroes'}
            >
              <b>The Heroes</b>
              <MediaQuery minWidth={navBreak}>
                <span className="d-block"><small>Meet the OrthoPAC Squad!</small></span>
              </MediaQuery>
            </Link>
            <Link
              className="nav-item nav-link"
              activeClassName="active"
              to="/survey"
            >
              <b>Hero Quiz</b>
              <MediaQuery minWidth={navBreak}>
                <span className="d-block"><small>Got a minute? Discover your Ortho hero identity</small></span>
              </MediaQuery>
            </Link>
            <OutboundLink className="nav-item nav-link" href="https://www.aaos.org/Advocacy/PAC/?ssopc=1" target="_blank" rel="noopener noreferrer">
              <b>AAOS Orthopaedic PAC Home Page <MdOpenInNew/></b>
              <MediaQuery minWidth={navBreak}>
                <span className="d-block"><small>Learn more about OrthoPAC</small></span>
              </MediaQuery>
            </OutboundLink>
          </nav>
        </div>
        <div
          className="bg-primary text-center py-3 border-bottom"
          style={{
            background: `url(${ Background })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <a
            className="text-white"
            href="/orthopac-comic.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read about Skeletal Man's Origin Story, in this exclusive comic book! <MdOpenInNew/>
          </a>
        </div>
      </React.Fragment>
    )
  }
}
