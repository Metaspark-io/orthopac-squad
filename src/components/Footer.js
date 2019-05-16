import React, { Component } from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import logo from '../images/aaosFooterLogo.svg'

export default class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <footer className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <img className="w-75 mb-3" src={logo} alt="AAOS: American Association of Orthopaedic Surgeons"/>
                <div className="vcard">
                  <p>
                    <span className="street-address">317 Massachusetts Avenue NE, Suite 100</span>
                    <br/><span className="region">Washington, D.C.</span> <span className="postal-code">20002</span>
                    <br/><span>Phone: </span><a href="tel:+01-202-546-4430" className="tel text-white">202.546.4430</a>
                    <br/><span>Fax: </span><a href="tel:+01-202-546-5051" className="text-white">202.546.5051</a>
                  </p>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <ul className="list-unstyled link-list">
                  <li><OutboundLink href="https://www.aaos.org/about/about/" target="_self">About AAOS</OutboundLink></li>
                  <li><OutboundLink href="https://www.aaos.org/strategicplan/" target="_self">Mission &amp; Vision</OutboundLink></li>
                  <li><OutboundLink href="https://www.aaos.org/ContactUs/" target="_self">Contact Us</OutboundLink></li>
                  <li><OutboundLink href="http://newsroom.aaos.org/" target="_self">Newsroom</OutboundLink></li>
                </ul>
              </div>
              <div className="col-sm-3 col-6">
                <ul className="list-unstyled link-list">
                  <li><OutboundLink href="https://www.aaos.org/privacy.aspx" target="_self">PRIVACY POLICY</OutboundLink></li>
                  <li><OutboundLink href="https://www.aaos.org/uploadedFiles/PreProduction/About/Policies/meetings-anti-harassment-policy-and-procedures-aug-2018.pdf" target="_self">Anti-Harassment Policy</OutboundLink></li>
                  <li><OutboundLink href="https://www.aaos.org/About/Careers/" target="_self">Careers at AAOS</OutboundLink></li>
                  <li><OutboundLink href="http://orthoinfo.org/" target="_self">Patient Education</OutboundLink></li>
                  <li><OutboundLink href="https://www.aaos.org/About/Policies/Policies/" target="_self">AAOS Policies</OutboundLink></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <ul className="list-inline">
                  <li className="footer-social-icons__title">Members</li>
                  <li className="social-icon">
                    <OutboundLink href="https://www.facebook.com/AAOSMembers/" target="_self">
                      <FaFacebookF/>
                    </OutboundLink>
                  </li>
                  <li className="social-icon">
                    <OutboundLink href="https://twitter.com/aaosmembers" target="_self">
                      <FaTwitter/>
                    </OutboundLink>
                  </li>
                </ul>
                <ul className="list-inline">
                  <li className="footer-social-icons__title">public</li>
                  <li className="social-icon">
                    <OutboundLink href="http://www.facebook.com/aaos1" target="_self">
                      <FaFacebookF/>
                    </OutboundLink>
                  </li>

                  <li className="social-icon">
                    <OutboundLink href="http://twitter.com/aaos1" target="_self">
                      <FaTwitter/>
                    </OutboundLink>
                  </li>

                  <li className="social-icon">
                    <OutboundLink href="https://www.youtube.com/user/AmerAcadOrthoSurg" target="_self">
                      <FaYoutube/>
                    </OutboundLink>
                  </li>

                  <li className="social-icon">
                    <OutboundLink href="https://www.linkedin.com/company/american-academy-of-orthopaedic-surgeons" target="_self">
                      <FaLinkedinIn/>
                    </OutboundLink>
                  </li>

                  <li className="social-icon">
                    <OutboundLink href="https://www.instagram.com/aaos_1/" target="_self">
                      <FaInstagram/>
                    </OutboundLink>
                  </li>
                </ul>
              </div>
            </div>
            <small className="text-center d-flex pt-5 pb-3">
              © 1995-{new Date().getFullYear()} by the American Association of Orthopaedic Surgeons. "All Rights Reserved." This website and its contents may not be reproduced in whole or in part without written permission. "American Association of Orthopaedic Surgeons" and its associated seal and "American Association of Orthopaedic Surgeons" and its logo are all registered U.S. trademarks and may not be used without written permission.
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
