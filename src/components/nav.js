import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div class="container-fluid py-2 bg-light sticky-top">
        <nav class="nav nav-pills nav-fill">
          <a class="nav-item nav-link active" href="#">Active</a>
          <a class="nav-item nav-link" href="#">Link</a>
          <a class="nav-item nav-link" href="#">Link</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
        </nav>
      </div>
    );
  }
}
