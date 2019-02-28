import React, {Component} from 'react';
import Flickity from 'react-flickity-component';

import './flixity.css';

const flickityOptions = {
    wrapAround: true,
    adaptiveHeight: true,
    dragThreshold: 10
}

export default class Carousel extends Component {
  render() {
    return (
      <div class="container py-3 mb-5">
        <Flickity options={flickityOptions}>
          <img src="https://via.placeholder.com/800x400?text=Hero1" />
          <img src="https://via.placeholder.com/800x400?text=Hero2" />
          <img src="https://via.placeholder.com/800x400?text=Hero3" />
          <img src="https://via.placeholder.com/800x400?text=Hero4" />
          <img src="https://via.placeholder.com/800x400?text=Hero5" />
          <img src="https://via.placeholder.com/800x400?text=Hero6" />
        </Flickity>
      </div>
    );
  }
}
