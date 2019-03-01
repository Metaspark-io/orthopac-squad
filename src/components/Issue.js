import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'
import { MdExpandMore } from 'react-icons/md'

export default class Issue extends Component {
  render () {
    return (
      <div class="issue">
        <div class="col-12">
          <h3 class="text-center">The Battle of Proliferating Paperwork!</h3>
          <h4 class="text-center">Skeletal Man Vs Red Tape Mummy</h4>
          <div class="row">
            <div class="col-12 col-md-3">
              <div class="card">
                <div class="card-body">
                  <Zoom left cascade>
                    <img src="https://via.placeholder.com/200x400?text=Hero" alt="Hero"/>
                  </Zoom>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="row">
                <div class="col-12">
                  <p class="mt-5">In a time that often feels like paperwork is paramount to that of the care of the patient, physicians can find themselves doing paperwork nearly 50% of their time. Blame it on bureaucrats, administrators, lawyers, insurers, coupled with inoperable EHRs (not designed by doctors), along with little clerical support, it all adds to the growing mass of required paperwork. Skeletal Man is here to save the day, selflessly slashing Red Tape and prioritizing patients over paperwork.</p>
                  <div class="d-flex align-items-center flex-wrap mb-3">
                    <hr class="mb-0 w-100"/>
                    <a href="#" class="btn btn-link btn-block btn-sm mx-auto text-muted">Read More <MdExpandMore/></a>
                  </div>
                  <a href="#" class="btn btn-block btn-primary">Join the fight with AAOS</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="card">
                <div class="card-body">
                  <Zoom right cascade>
                    <img src="https://via.placeholder.com/200x400?text=Villian" alt="Villian"/>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
