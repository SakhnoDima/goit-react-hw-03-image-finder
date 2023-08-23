import React from 'react';
import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ pictureList }) => {
  if (!pictureList) {
    return;
  }
  const { hits } = pictureList;
  return (
    <>
      {hits.map(el => (
        <li key={el.id} className="ImageGalleryItem-item">
          <img
            src={el.webformatURL}
            alt={el.tags}
            className="ImageGalleryItem-image "
          />
        </li>
      ))}
    </>
  );
};
