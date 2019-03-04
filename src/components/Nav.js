import React, { Component } from 'react'
import { Link } from 'gatsby'
import MediaQuery from 'react-responsive'

export default class Nav extends Component {
  render () {
    const navBreak = '960px'
    return (
      <div className="container-fluid py-2 bg-white sticky-top border-bottom">
        <nav className="nav nav-pills nav-fill">
          <a className="nav-item nav-link" href="/#issues">
            <b>The Issues</b>
            <MediaQuery minWidth={navBreak}>
              <span class="d-block"><small>Learn about the battles AAOS fights</small></span>
            </MediaQuery>
          </a>
          <a className="nav-item nav-link" href="/#heroes">
            <b>The Heroes</b>
            <MediaQuery minWidth={navBreak}>
              <span class="d-block"><small>Meet the OrthoPAC Squad!</small></span>
            </MediaQuery>
          </a>
          <Link className="nav-item nav-link" activeClassName="active" to="/survey">
            <b>Hero Quiz</b>
            <MediaQuery minWidth={navBreak}>
              <span class="d-block"><small>Got a minute? Discover your Ortho hero identity</small></span>
            </MediaQuery>
          </Link>
          <a className="nav-item nav-link" href="https://www.aaos.org/Advocacy/PAC/?ssopc=1" target="_blank" rel="noopener noreferrer">
            <b>Join the Squad</b>
            <MediaQuery minWidth={navBreak}>
              <span class="d-block"><small>Donate to be a Hero for medicine</small></span>
            </MediaQuery>
          </a>
        </nav>
      </div>
    )
  }
}
