
import React, { useEffect, useRef, useState } from 'react';
import { GalleryItemContainer } from "./gallery-item.styles";

const GalleryItem = ({ img }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  return (
    <GalleryItemContainer $isVisible={isVisible}>
      <img ref={imageRef} src={img} alt="gallery_image" />
    </GalleryItemContainer>
  );
}

export default GalleryItem;
