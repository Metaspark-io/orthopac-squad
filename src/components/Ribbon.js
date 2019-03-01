import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

import aaosLogo from '../images/aaosLogo.svg'

export default class Ribbon extends Component {
  render () {
    return (
<<<<<<< HEAD
      <div className="bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7 col-sm-8">
              <img src={aaosLogo} alt="AAOS: American Academy of Orthopedic Surgeons | American Association of Orthopedic Surgeons"/>
            </div>
            <div className="col-md-5 col-sm-4">
              <div className="d-flex flex-wrap justify-content-end">
                <a href="https://sso.aaos.org/login.aspx?vi=8&vt=77dc2d42411a9e98420dd4aaa5809106ee3572701588e5e6ee0c58f79c1d6ca84d304858ffc57b32d68b99ef404de6c6d5f0081e337c3594184003d8545161658382b3e80ad4a05a3907d076217b4ac42967966f94bda931557ebc73b9c211e4384993a31b7cdbd482b74314e270da05c29829fccad3fdd505f9d189bd304aad07cad1d45d7aab1734025ec7db4eb3ad5ac98358e895b25d09bc4b7ccdeca5f50993d7fe12cd216914078a761e6e8806ddd1cad026278ce5fc71b2d1eb5c4a11" target="_blank" rel="noopener noreferrer">
                  Login / Create Account
                </a>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search AAOS.org" aria-label="Search AAOS"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
=======
      <div class="ribbon">
        <div class="container py-4">
          <div class="row">
            <div class="col-md-7 col-sm-8">
              <a href="https://www.aaos.org/" class="d-flex align-items-center h-100" rel="noopener noreferrer">
                <img
                  src={aaosLogo}
                  alt="AAOS: American Academy of Orthopedic Surgeons | American Association of Orthopedic Surgeons"
                  style={{
                    width: 550,
                    height: 39 }}
                />
              </a>
            </div>
            <div class="col-md-5 col-sm-4">
              <div class="d-flex flex-wrap justify-content-end">
                <a
                  href="https://sso.aaos.org/login.aspx?vi=8&vt=77dc2d42411a9e98420dd4aaa5809106ee3572701588e5e6ee0c58f79c1d6ca84d304858ffc57b32d68b99ef404de6c6d5f0081e337c3594184003d8545161658382b3e80ad4a05a3907d076217b4ac42967966f94bda931557ebc73b9c211e4384993a31b7cdbd482b74314e270da05c29829fccad3fdd505f9d189bd304aad07cad1d45d7aab1734025ec7db4eb3ad5ac98358e895b25d09bc4b7ccdeca5f50993d7fe12cd216914078a761e6e8806ddd1cad026278ce5fc71b2d1eb5c4a11"
                  class="ribbon-sso-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login / Create Account
                </a>
                <div class="input-group ribbon-search">
                  <input type="text" class="form-control" placeholder="Search AAOS.org" aria-label="Search AAOS"/>
                  <div class="input-group-append">
                    <button class="btn" type="button">
>>>>>>> Style ribbon to match aaos.org, make hero fill majority of viewport
                      <FaSearch/>
                    </button>
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
