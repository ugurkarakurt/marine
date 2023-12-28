import React, { useEffect, useRef, useState } from 'react';
import { HomeTitleContainer, Title, Description } from "./home-title.styles";

const HomeTitle = () => {

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
    <HomeTitleContainer $isVisible={isVisible}>
      <Title ref={imageRef}>
        Just desire! We do ASAP
      </Title>
      <Description ref={imageRef}>
        Welcome to ASAP Marine Supply Co., your compass for marine excellence. We provide innovative, reliable, and ethical solutions, ensuring your needs are met while protecting our oceans.
      </Description>
    </HomeTitleContainer>
  );
}

export default HomeTitle;
