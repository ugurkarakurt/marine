import React from 'react';
import MemberImage1 from "./member1.jpeg"
import MemberImage2 from "./member2.jpeg"
import { GalleryContainer, GalleryItems, GalleryTitle } from "./gallery.styles";
import GalleryItem from '../gallery-item/gallery-item.component';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>
        Memberships
      </GalleryTitle>
      <GalleryItems>
        <GalleryItem img={MemberImage1} />
        <GalleryItem img={MemberImage2} />
      </GalleryItems>
    </GalleryContainer>
  );
}

export default Gallery;
