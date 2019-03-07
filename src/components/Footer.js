import React, { Component } from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import logo from '../images/aaos-logo-white.svg'

export default class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <footer className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <img className="w-50 mb-3" src={logo}/>
                <div className="vcard">
                  <p>
                    <span className="street-address">9400 West Higgins Road</span>
                    <br/><span className="region">Rosemont, Illinois</span> <span className="postal-code">60018</span>
                    <br/><span>Phone: </span><span className="tel">847.823.7186</span>
                    <br/><span>Fax: </span><span>847.823.8125</span>
                  </p>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <ul className="list-unstyled link-list">
                  <li><a href="https://www.aaos.org/about/about/" target="_self">About AAOS</a></li>
                  <li><a href="https://www.aaos.org/strategicplan/" target="_self">Mission &amp; Vision</a></li>
                  <li><a href="https://www.aaos.org/ContactUs/" target="_self">Contact Us</a></li>
                  <li><a href="http://newsroom.aaos.org/" target="_self">Newsroom</a></li>
                </ul>
              </div>
              <div className="col-sm-3 col-6">
                <ul className="list-unstyled link-list">
                  <li><a href="https://www.aaos.org/privacy.aspx" target="_self">PRIVACY POLICY</a></li>
                  <li><a href="https://www.aaos.org/uploadedFiles/PreProduction/About/Policies/meetings-anti-harassment-policy-and-procedures-aug-2018.pdf" target="_self">Anti-Harassment Policy</a></li>
                  <li><a href="https://www.aaos.org/About/Careers/" target="_self">Careers at AAOS</a></li>
                  <li><a href="http://orthoinfo.org/" target="_self">Patient Education</a></li>
                  <li><a href="https://www.aaos.org/About/Policies/Policies/" target="_self">AAOS Policies</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <ul className="list-inline">
                  <li className="footer-social-icons__title">Members</li>
                  <li className="social-icon">
                    <a href="https://www.facebook.com/AAOSMembers/" target="_self">
                      <FaFacebookF/>
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://twitter.com/aaosmembers" target="_self">
                      <FaTwitter/>
                    </a>
                  </li>
                </ul>
                <ul className="list-inline">
                  <li className="footer-social-icons__title">public</li>
                  <li className="social-icon">
                    <a href="http://www.facebook.com/aaos1" target="_self">
                      <FaFacebookF/>
                    </a>
                  </li>

                  <li className="social-icon">
                    <a href="http://twitter.com/aaos1" target="_self">
                      <FaTwitter/>
                    </a>
                  </li>

                  <li className="social-icon">
                    <a href="https://www.youtube.com/user/AmerAcadOrthoSurg" target="_self">
                      <FaYoutube/>
                    </a>
                  </li>

                  <li className="social-icon">
                    <a href="https://www.linkedin.com/company/american-academy-of-orthopaedic-surgeons" target="_self">
                      <FaLinkedinIn/>
                    </a>
                  </li>

                  <li className="social-icon">
                    <a href="https://www.instagram.com/aaos_1/" target="_self">
                      <FaInstagram/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <small className="text-center d-flex pt-5 pb-3">
              © 1995-{new Date().getFullYear()} by the American Academy of Orthopaedic Surgeons. "All Rights Reserved." This website and its contents may not be reproduced in whole or in part without written permission. "American Academy of Orthopaedic Surgeons" and its associated seal and "American Association of Orthopaedic Surgeons" and its logo are all registered U.S. trademarks and may not be used without written permission.
            </small>
          </div>
        </footer>
        <div className="py-5 bg-darker">
          <div className="container">
            <small className="disclaimer">
              Contributions to Orthopaedic PAC are not deductible as charitable contributions for federal income tax purposes. Contributions are voluntary, and all members of the American Association of Orthopaedic Surgeons have the right not to contribute, or to contribute more or less than a suggested amount, without any reprisal. Federal law prohibits Orthopaedic PAC from accepting contributions from foreign nationals. All corporate contributions to Orthopaedic PAC will be used for educational and administrative fees of Orthopaedic PAC and other activities permissible by Federal law. Federal law requires Orthopaedic PAC to collect and report the name, mailing address, occupation, and employer of individuals who give more than $200 in a calendar year.
            </small>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
