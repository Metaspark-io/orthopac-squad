import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Nav extends Component {
  render () {
    return (
      <div className="container-fluid py-2 bg-light sticky-top">
        <nav className="nav nav-pills nav-fill">
          <a className="nav-item nav-link" href="/#issues">The Issues</a>
          <a className="nav-item nav-link" href="/#heroes">The Heroes</a>
          <Link className="nav-item nav-link" activeClassName="active" to="/survey">Survey</Link>
          <a className="nav-item nav-link" href="https://google.com" target="_blank">Join the Squad</a>
        </nav>
      </div>
    )
  }
}
