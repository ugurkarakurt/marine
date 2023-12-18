import React from 'react';
import { Container, ContentWrapper, StickyContent, PageTitle, PageParagraph } from "./page-content.styles";
import PageContentBanner from '../../components/page-content-banner/page-content-banner.component';
import Image from "../../components/banner-image/main_image.jpeg"

const PageContent = ({ colors, pageTitle, pageContent, bannerText }) => {
  const { backgroundColor, textColor, titleColor } = colors;

  console.log(colors);

  return (
    <Container $backgroundcolor={backgroundColor}>
      <ContentWrapper>
        <PageContentBanner img={Image} text={bannerText} />
        <StickyContent>
          <PageTitle $titlecolor={titleColor}>{pageTitle}</PageTitle>
          <PageParagraph dangerouslySetInnerHTML={{ __html: pageContent }} $textcolor={textColor}></PageParagraph>
        </StickyContent>
      </ContentWrapper>
    </Container>
  );
}

export default PageContent;
