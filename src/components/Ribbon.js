import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import logo from '../images/combinedLogo.png'

export default class Ribbon extends Component {
  render () {
    return (
      <div className="ribbon">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-8">
              <OutboundLink href="https://www.aaos.org/" className="d-flex align-items-center h-100 justify-content-center justify-content-md-start" rel="noopener noreferrer">
                <img
                  src={logo}
                  alt="AAOS: American Academy of Orthopaedic Surgeons | American Association of Orthopaedic Surgeons"
                  className="img-fluid"
                  style={{ maxHeight: 100 }}
                />
              </OutboundLink>
            </div>
            <div className="d-none d-md-inline-block col-md-4 mt-2">
              <div className="d-flex flex-column align-content-end justify-content-center">
                <OutboundLink
                  href="https://sso.aaos.org/login.aspx?vi=8&vt=77dc2d42411a9e98420dd4aaa5809106ee3572701588e5e6ee0c58f79c1d6ca84d304858ffc57b32d68b99ef404de6c6d5f0081e337c3594184003d8545161658382b3e80ad4a05a3907d076217b4ac42967966f94bda931557ebc73b9c211e4384993a31b7cdbd482b74314e270da05c29829fccad3fdd505f9d189bd304aad07cad1d45d7aab1734025ec7db4eb3ad5ac98358e895b25d09bc4b7ccdeca5f50993d7fe12cd216914078a761e6e8806ddd1cad026278ce5fc71b2d1eb5c4a11"
                  className="ribbon-sso-link align-self-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login / Create Account
                </OutboundLink>
                <form action="https://www.aaos.org/search.aspx?id=32" method="GET">
                  <div className="input-group ribbon-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search AAOS.org"
                      aria-label="Search AAOS" name="srchtext"
                    />
                    <input name="id" value="32" type="hidden"/>
                    <div className="input-group-append">
                      <button className="btn" type="submit">
                        <FaSearch/>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
