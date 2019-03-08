import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Thermometer from './Thermometer'

import DONORS, { getTotalDonations } from '../constants/donors'

import heroes from '../images/ll-transparent.png'

const TOTAL_DONATIONS = getTotalDonations()

const DonationContext = React.createContext({ totalDonations: TOTAL_DONATIONS })

export class AskWrapper extends Component {
  state = {
    totalDonations: TOTAL_DONATIONS,
  }

  // handle to cancel interval
  intervalId = null

  startDonationUpdate = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    this.intervalId = setInterval(
      this.triggerDonationUpdate,
      2000 // Its updated every 3 seconds
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

  componentWillUnmount () {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  render () {
    const { totalDonations } = this.state
    return (
      <DonationContext.Provider value={{
        startDonationUpdate: this.startDonationUpdate,
        totalDonations
      }}>
        {this.props.children}
      </DonationContext.Provider>
    )
  }
}

export class AskList extends Component {
  static contextType = DonationContext

  shouldUpdate = isVisible => {
    if (isVisible) {
      this.context.startDonationUpdate()
    }
  }

  render () {
    const { totalDonations } = this.context
    return (
      <VisibilitySensor onChange={this.shouldUpdate}>
        <div className="ask-bg py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card card-comic">
                  <div className="card-body ask-card">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="d-flex h-100 align-items-center">
                          <div className="mb-4 mb-md-0">
                            <h2>Heroes Wanted!</h2>
                            <p>Protect the autonomy of orthopeadists and the quality of the care we provide!</p>
                            <p>When the Orthopaedic PAC squad unites, they send a strong, collective and clear message that we fights to advance our legislative agenda. As the OrthoPAC squad grows, that message resonates louder.</p>
                            <div className="btn-toolbar">
                              <OutboundLink
                                href="https://www.aaos.org/Advocacy/PACBenefits/"
                                className="btn btn-primary btn-lg mr-2 mb-2"
                                rel="noopener noreferrer"
                              >
                                Join the OrthoPac Squad
                              </OutboundLink>
                              <OutboundLink
                                href="https://www.aaos.org/Advocacy/PAC/?ssopc=1"
                                className="btn btn-secondary btn-lg mb-2"
                                rel="noopener noreferrer"
                              >
                                Donate to become a Hero
                              </OutboundLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <h3 className="h4">We have raised: ${totalDonations.toLocaleString()}!</h3>
                        <p>A big thanks to our $5K Max-Out Donors:</p>
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
        </div>
      </VisibilitySensor>
    )
  }
}

export class AskThermometer extends Component {
  static contextType = DonationContext

  shouldUpdate = isVisible => {
    if (isVisible) {
      this.context.startDonationUpdate()
    }
  }

  render () {
    const { totalDonations } = this.context
    return (
      <VisibilitySensor onChange={this.shouldUpdate}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-comic">
                <div className="card-body ask-card">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="p-relative p-4">
                        <Thermometer
                          max={DONORS.goal}
                          size="large"
                          height={400}
                          value={totalDonations}
                        />
                        <img className="therm-illustration" src={heroes} alt="Skeletal Man and Lady Ligament"/>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="d-flex h-100 align-items-center">
                        <div className="pt-5 pt-md-0">
                          <h2>Heroes Wanted!</h2>
                          <p>Protect the autonomy of orthopeadists and the quality of the care we provide!</p>
                          <p>When the Orthopaedic PAC squad unites, they send a strong, collective and clear message that we fights to advance our legislative agenda. As the OrthoPAC squad grows, that message resonates louder.</p>
                          <div className="btn-toolbar">
                            <OutboundLink
                              href="https://sso.aaos.org/login.aspx?vi=8&vt=77dc2d42411a9e98420dd4aaa5809106ee3572701588e5e6ee0c58f79c1d6ca84d304858ffc57b32d68b99ef404de6c6d5f0081e337c3594184003d8545161658382b3e80ad4a05a3907d076217b4ac42967966f94bda931557ebc73b9c211e4384993a31b7cdbd482b74314e270da05c29829fccad3fdd505f9d189bd304aad07cad1d45d7aab1734025ec7db4eb3ad5ac98358e895b25d09bc4b7ccdeca5f50993d7fe12cd216914078a761e6e8806ddd1cad026278ce5fc71b2d1eb5c4a11" className="btn btn-primary btn-lg mr-2 mb-2" rel="noopener noreferrer">Join the OrthoPac Squad</OutboundLink>
                            <OutboundLink
                              href="https://www.aaos.org/Advocacy/PAC/?ssopc=1"
                              className="btn btn-secondary btn-lg mb-2"
                              rel="noopener noreferrer"
                            >
                              Donate to become a Hero
                            </OutboundLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}
