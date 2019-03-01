import React, { Component } from 'react'

export default class Ask extends Component {
  render () {
    return (
      <div class="ask-bg py-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card card-comic">
                <div class="card-body ask-card">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <h2>The Squad needs you</h2>
                      <p>Heroes wanted! Your OrthoPAC membership and donations help ensure our profession a powerful voice in government. Protect the autonomy of orthopeadists and the quality of the care we provide!</p>
                      <div class="btn-toolbar">
                        <a href="#" class="btn btn-primary btn-lg mr-2">Join OrthoPAC</a>
                        <a href="#" class="btn btn-secondary btn-lg">Donate to be a Hero for Medicine</a>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                    </div>
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
