import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Nav extends Component {
  render () {
    return (
      <div className="container-fluid py-2 bg-white sticky-top border-bottom">
        <nav className="nav nav-pills nav-fill">
          <a className="nav-item nav-link" href="/#issues">
            <b>The Issues</b>
            <span class="d-block"><small>Learn about the battles AAOS fights</small></span>
          </a>
          <a className="nav-item nav-link" href="/#heroes">
            <b>The Heroes</b>
            <span class="d-block"><small>Meet the OrthoPAC Squad!</small></span>
          </a>
          <Link className="nav-item nav-link" activeClassName="active" to="/survey">
            <b>Survey</b>
            <span class="d-block"><small>Got a minute? Discover your Ortho hero identity</small></span>
          </Link>
          <a className="nav-item nav-link" href="https://www.aaos.org/Advocacy/PAC/?ssopc=1" target="_blank" rel="noopener noreferrer">
            <b>Join the Squad</b>
            <span class="d-block"><small>Donate to be a Hero for medicine</small></span>
          </a>
        </nav>
      </div>
    )
  }
}
