import React, { Component } from 'react';
//import { PropTypes } from 'prop-types';
import './ImageGallery.css';
import { ImageGalleryItem } from 'components';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem pictureList={this.props.pictureList} />
      </ul>
    );
  }
}
