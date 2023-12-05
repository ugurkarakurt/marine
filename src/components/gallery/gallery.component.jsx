import React from 'react';
import FakeImg from "./nature.jpg";
import { GalleryContainer, GalleryItems } from "./gallery.styles";
import GalleryItem from '../gallery-item/gallery-item.component';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryItems>
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
        <GalleryItem img={FakeImg} />
      </GalleryItems>
    </GalleryContainer>
  );
}

export default Gallery;
