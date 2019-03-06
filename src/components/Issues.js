import React, { Component } from 'react'
import { Link } from 'gatsby'
import scrollToElement from 'scroll-to-element'

import Issue from './Issue'

import ISSUES from '../constants/issues'

export default class Issues extends Component {
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

    if (typeof window !== undefined) {
      // First, are we on the home page?
      // If so, let's scroll to the desired block,
      // which was passed in as an onClick prop on our Link.
      // An event was also passed, we'll preventDefault()

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
    return (
      <div className="issues-bg" id="issues">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto">
              <div className="card card-comic issues-card">
                <div className="card-body">
                  <h2 className="text-center">The Issues</h2>
                  <p>The American Association of Orthopaedic Surgeons (AAOS) tracks and addresses issues that threaten the ability of orthopedists to provide the highest possible quality of care. Aiding them in their fight is the mighty OrthoPAC Squad: an elite team of heroes dedicated to protecting every orthopedist and their patients. You can bone up on those battles here.</p>
                  <ul>
                    <li>
                      <Link
                        className="nav-item nav-link"
                        onClick={e => this._handleLinkClick(e, '#issue-1')}
                        to={'/#issue-1'}
                      >
                      The Battle of Proliferating Paperwork!
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item nav-link"
                        onClick={e => this._handleLinkClick(e, '#issue-2')}
                        to={'/#issue-2'}
                      >
                      If you aren’t at the table, you’re the main course
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item nav-link"
                        onClick={e => this._handleLinkClick(e, '#issue-3')}
                        to={'/#issue-3'}
                      >
                      The Battle of the Vertical and Horizontal Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item nav-link"
                        onClick={e => this._handleLinkClick(e, '#issue-4')}
                        to={'/#issue-4'}
                      >
                      The Battle of Limited Research Resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item nav-link"
                        onClick={e => this._handleLinkClick(e, '#issue-5')}
                        to={'/#issue-5'}
                      >
                      For the Love of Liability Reform
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item nav-link"
                        onClick={e => this._handleLinkClick(e, '#issue-6')}
                        to={'/#issue-6'}
                      >
                      Mission: Permission
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-3">
          <div className="row py-3">
            <div className="col-12">
              <div className="card card-comic mb-4">
                <div className="card-body p-0">
                  {
                    ISSUES.map((issue, i) => (
                      <Issue key={i} {...issue}/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
