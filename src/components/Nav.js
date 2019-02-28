import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Nav extends Component {
  render () {
    return (
      <div class="container-fluid py-2 bg-light sticky-top">
        <nav class="nav nav-pills nav-fill">
          <Link class="nav-item nav-link active" to="#">Active</Link>
          <Link class="nav-item nav-link" to="#">Link</Link>
          <Link class="nav-item nav-link" to="/survey">Survey</Link>
          <Link class="nav-item nav-link disabled" to="#">Disabled</Link>
        </nav>
      </div>
    )
  }
}
