import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = (url, name) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={url} alt={name} className={s.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
