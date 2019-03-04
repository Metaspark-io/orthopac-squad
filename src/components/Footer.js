import React, { Component } from 'react'
import logo from '../images/aaos-logo-white.svg'

export default class Footer extends Component {
  render () {
    return (
      <footer class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <img class="w-50 mb-3" src={logo}/>
              <div class="vcard">
                <p>
                  <span class="street-address">9400 West Higgins Road</span>
                  <br/><span class="region">Rosemont, Illinois</span> <span class="postal-code">60018</span>
                  <br/><span>Phone: </span><span class="tel">847.823.7186</span>
                  <br/><span>Fax: </span><span>847.823.8125</span>
                </p>
              </div>
            </div>
            <div class="col-sm-3 col-6">
              <ul class="list-unstyled">
                <li><a href="https://www.aaos.org/about/about/" target="_self">About AAOS</a></li>
                <li><a href="https://www.aaos.org/strategicplan/" target="_self">Mission &amp; Vision</a></li>
                <li><a href="https://www.aaos.org/ContactUs/" target="_self">Contact Us</a></li>
                <li><a href="http://newsroom.aaos.org/" target="_self">Newsroom</a></li>
              </ul>
            </div>
            <div class="col-sm-3 col-6">
              <ul class="list-unstyled">
                <li><a href="https://www.aaos.org/privacy.aspx" target="_self">PRIVACY POLICY</a></li>
                <li><a href="https://www.aaos.org/uploadedFiles/PreProduction/About/Policies/meetings-anti-harassment-policy-and-procedures-aug-2018.pdf" target="_self">Anti-Harassment Policy</a></li>
                <li><a href="https://www.aaos.org/About/Careers/" target="_self">Careers at AAOS</a></li>
                <li><a href="http://orthoinfo.org/" target="_self">Patient Education</a></li>
                <li><a href="https://www.aaos.org/About/Policies/Policies/" target="_self">AAOS Policies</a></li>
              </ul>
            </div>
            <div class="col-sm-3">
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
