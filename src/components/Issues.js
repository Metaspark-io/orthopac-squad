import React, { Component } from 'react'

import Issue from './Issue'

import ISSUES from '../constants/issues'

export default class Issues extends Component {
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
                    <li>The Battle of Proliferating Paperwork!</li>
                    <li>If you aren’t at the table, you’re the main course</li>
                    <li>The Battle of the Vertical and Horizontal Integration</li>
                    <li>The Battle of Limited Research Resources</li>
                    <li>For the Love of Liability Reform</li>
                    <li>Mission: Permission</li>
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
