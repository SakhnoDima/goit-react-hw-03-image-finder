import { Component } from 'react';
import './ImageGalleryItem.css';

export class ImageGalleryItem extends Component {
  handleOnclick = event => {
    const url = event.target.src;
    return this.props.onClick(url);
  };
  render() {
    return (
      <>
        {this.props.pictureList.map(el => (
          <li
            onClick={this.handleOnclick}
            key={el.id}
            className="ImageGalleryItem-item"
          >
            <img
              src={el.webformatURL}
              alt={el.tags}
              className="ImageGalleryItem-image "
            />
          </li>
        ))}
      </>
    );
  }
}
