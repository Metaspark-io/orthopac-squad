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
                      <a href="https://sso.aaos.org/login.aspx?vi=8&vt=77dc2d42411a9e98420dd4aaa5809106ee3572701588e5e6ee0c58f79c1d6ca84d304858ffc57b32d68b99ef404de6c6d5f0081e337c3594184003d8545161658382b3e80ad4a05a3907d076217b4ac42967966f94bda931557ebc73b9c211e4384993a31b7cdbd482b74314e270da05c29829fccad3fdd505f9d189bd304aad07cad1d45d7aab1734025ec7db4eb3ad5ac98358e895b25d09bc4b7ccdeca5f50993d7fe12cd216914078a761e6e8806ddd1cad026278ce5fc71b2d1eb5c4a11" className="btn btn-primary btn-lg mr-2 mb-2" rel="noopener noreferrer">Join OrthoPAC</a>
                      <a href="https://www.aaos.org/Advocacy/PAC/?ssopc=1" className="btn btn-secondary btn-lg mb-2" rel="noopener noreferrer">Donate to be a Hero for Medicine</a>
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
    )
  }
}
