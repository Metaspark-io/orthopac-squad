import React, { Component } from 'react'

import Issue from './Issue'

export default class Issues extends Component {
  render () {
    return (
      <React.Fragment>
        <div class="container mt-3">
          <div class="row">
            <div class="col-12 col-md-8 mx-auto">
              <div class="card card-comic">
                <div class="card-body">
                  <h2 class="text-center">The Issues</h2>
                  <p>The American Association of Orthopaedic Surgeons (AAOS) tracks and addresses issues that threaten the ability of orthopedists to provide the highest possible quality of care. Aiding them in their fight is the mighty OrthoPAC Squad: an elite team of heroes dedicated to protecting every orthopedist and their patients. You can bone up on those battles here.</p>
                  <ul>
                    <li>The Battle of Proliferating Paperwork!</li>
                    <li>If you aren’t at the table, you’re the main course</li>
                    <li>The Battle of the Vertical and Horizontal Integration</li>
                    <li>The Battle of Limited Research Resources</li>
                    <li>For the Love of Liability Reform</li>
                    <li>May I Have Your Permission Please?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container p-3">
          <div class="row py-3">
            <div class="col-12">
              <div class="card mb-4">
                <Issue/>
                <Issue/>
                <Issue/>
                <Issue/>
                <Issue/>
                <Issue/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
