import React, { Component } from 'react'

import DONORS, { getTotalDonations } from '../constants/donors'

export default class Ask extends Component {
  render () {
    const totalDonations = getTotalDonations()
    return (
      <div className="ask-bg py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-comic">
                <div className="card-body ask-card">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <h2>The Squad needs you</h2>
                      <p>Heroes wanted! Your OrthoPAC membership and donations help ensure our profession a powerful voice in government. Protect the autonomy of orthopeadists and the quality of the care we provide!</p>
                      <div className="btn-toolbar">
                        <a href="#" className="btn btn-primary btn-lg mr-2">Join OrthoPAC</a>
                        <a href="#" className="btn btn-secondary btn-lg">Donate to be a Hero for Medicine</a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <p>We have raised: ${totalDonations.toLocaleString()}</p>
                      <p>A big thanks to our 5k members:</p>
                      <ul>
                        {
                          DONORS.fiveK.map(donor => (
                            <li>{donor}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
