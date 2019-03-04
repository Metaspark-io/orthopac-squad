import React, { Component } from 'react'

import DONORS, { getTotalDonations } from '../constants/donors'

const TOTAL_DONATIONS = getTotalDonations()

export default class Ask extends Component {
  state = {
    totalDonations: TOTAL_DONATIONS,
  }

  // handle to cancel interval
  intervalId = null

  componentDidMount () {
    this.intervalId = setInterval(
      this.triggerDonationUpdate,
      3000 // Its updated every 3 seconds
    )
  }

  triggerDonationUpdate = () => {
    const { totalDonations } = this.state
    // Gives us a number between 1 and 5 times 1000
    const amt = (Math.floor(Math.random() * 5) + 1) * 1000
    this.setState({ totalDonations: totalDonations + amt })
    // We only want to update up to 10k more than starting
    if (totalDonations > TOTAL_DONATIONS + 10000) {
      clearInterval(this.intervalId)
    }
  }

  render () {
    const { totalDonations } = this.state
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
