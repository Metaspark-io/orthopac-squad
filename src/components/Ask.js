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
                            <p>Protect the autonomy of orthopaedists and the quality of the care we provide!</p>
                            <p>When the Orthopaedic PAC squad unites, they send a strong, collective and clear message that we fight to advance our legislative agenda. As the OrthoPAC squad grows, that message resonates louder.</p>
                            <div className="btn-toolbar mt-4">
                              <OutboundLink
                                href="https://www.aaos.org/Advocacy/PACBenefits/"
                                className="btn btn-primary btn-lg btn-block mb-2"
                                rel="noopener noreferrer"
                              >
                                Learn More About the OrthoPAC Capitol Club
                              </OutboundLink>
                              <OutboundLink
                                href="https://www.aaos.org/advocacy/pac/advisorscircle/"
                                className="btn btn-secondary btn-lg btn-block mb-2"
                                rel="noopener noreferrer"
                              >
                                Learn More About Our Advisor’s Circle Program
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
                            <a className="nav-link active" href="/5K-Capitol-Club.pdf" target="_blank" rel="noopener noreferrer">$5K Capitol Club</a>
                          </li>
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
                          <p>Protect the autonomy of orthopaedists and the quality of the care we provide!</p>
                          <p>When the Orthopaedic PAC squad unites, they send a strong, collective and clear message that we fight to advance our legislative agenda. As the OrthoPAC squad grows, that message resonates louder.</p>
                          <div className="btn-toolbar mt-4">
                            <OutboundLink
                              href="https://www.aaos.org/Advocacy/PACBenefits/"
                              className="btn btn-primary btn-lg btn-block mb-2"
                              rel="noopener noreferrer"
                            >
                              Learn More About the OrthoPAC Capitol Club
                            </OutboundLink>
                            <OutboundLink
                              href="https://www.aaos.org/advocacy/pac/advisorscircle/"
                              className="btn btn-secondary btn-lg btn-block mb-2"
                              rel="noopener noreferrer"
                            >
                              Learn More About Our Advisor’s Circle Program
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
