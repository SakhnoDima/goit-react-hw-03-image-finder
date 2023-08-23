import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './ImageGallery.css';
import { ImageGalleryItem } from 'components';

const KAY = '38565810-29740f5778639307be3f3659c';

export class ImageGallery extends Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevPicture = prevProps.picture;
    const nextPicture = this.props.picture;
    if (prevPicture !== nextPicture) {
      try {
        fetch(
          `https://pixabay.com/api/?q=${nextPicture}&page=1&key=${KAY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(console.log);
      } catch (error) {}
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.picture}
        <ImageGalleryItem />
      </ul>
    );
  }
}
