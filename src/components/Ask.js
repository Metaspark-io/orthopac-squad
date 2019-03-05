import React, { Component } from 'react'

import Thermometer from './Thermometer'

import DONORS, { getTotalDonations } from '../constants/donors'

const TOTAL_DONATIONS = getTotalDonations()

export class AskList extends Component {
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
    if (totalDonations > TOTAL_DONATIONS + 50000) {
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
                    <h3 className="h4">We have raised: ${totalDonations.toLocaleString()}!</h3>
                    <p>A big thanks to our 5k members:</p>
                    <ul>
                      {
                        DONORS.fiveK.map((donor, i) => (
                          <li key={i} className="font-weight-bold">{donor}</li>
                        ))
                      }
                    </ul>
                    <p>And our other donors:</p>
                    <ul className="nav nav-fill">
                      <li className="nav-item">
                        <a className="nav-link active" href="/3K-Capitol-Club.pdf" target="_blank" rel="noopener noreferrer">$3K Capitol Club</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/2K-Capitol-Club.pdf" target="_blank" rel="noopener noreferrer">$2K Capitol Club</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/1K-Capitol-Club.pdf" target="_blank" rel="noopener noreferrer">$1K Capitol Club</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Futures-Capitol-Club.pdf" target="_blank" rel="noopener noreferrer">Future's Capitol Club</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/PAC-Members.pdf" target="_blank" rel="noopener noreferrer">PAC Members</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Resident-PAC-Members.pdf" target="_blank" rel="noopener noreferrer">Resident PAC Members</a>
                      </li>
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

export class AskThermometer extends Component {
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
    if (totalDonations > TOTAL_DONATIONS + 50000) {
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
                    <Thermometer
                      max={2000000}
                      size="large"
                      height={400}
                      value={totalDonations}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2>The Squad needs you</h2>
                    <p>Heroes wanted! Your OrthoPAC membership and donations help ensure our profession a powerful voice in government. Protect the autonomy of orthopeadists and the quality of the care we provide!</p>
                    <div className="btn-toolbar">
                      <a href="https://sso.aaos.org/login.aspx?vi=8&vt=77dc2d42411a9e98420dd4aaa5809106ee3572701588e5e6ee0c58f79c1d6ca84d304858ffc57b32d68b99ef404de6c6d5f0081e337c3594184003d8545161658382b3e80ad4a05a3907d076217b4ac42967966f94bda931557ebc73b9c211e4384993a31b7cdbd482b74314e270da05c29829fccad3fdd505f9d189bd304aad07cad1d45d7aab1734025ec7db4eb3ad5ac98358e895b25d09bc4b7ccdeca5f50993d7fe12cd216914078a761e6e8806ddd1cad026278ce5fc71b2d1eb5c4a11" className="btn btn-primary btn-lg mr-2 mb-2" rel="noopener noreferrer">Join OrthoPAC</a>
                      <a href="https://www.aaos.org/Advocacy/PAC/?ssopc=1" className="btn btn-secondary btn-lg mb-2" rel="noopener noreferrer">Donate to be a Hero for Medicine</a>
                    </div>
                  </div>
                </div>
                <div class="marquee">
                  {
                    // DONORS.oneK.map((donor, i) => (
                    //   <span key={i} className="font-weight-bold">{donor}</span>
                    // ))
                  }{
                    // DONORS.twoK.map((donor, i) => (
                    //   <span key={i} className="font-weight-bold">{donor}</span>
                    // ))
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
