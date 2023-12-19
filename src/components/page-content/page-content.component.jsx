import React from 'react';
import { Container, ContentWrapper, StickyContent, PageTitle, PageParagraph } from "./page-content.styles";
import PageContentBanner from '../../components/page-content-banner/page-content-banner.component';

const PageContent = ({ colors, pageTitle, pageContent, bannerText, img }) => {
  const { backgroundColor, textColor, titleColor } = colors;

  return (
    <Container $backgroundcolor={backgroundColor}>
      <ContentWrapper>
        <PageContentBanner img={img} text={bannerText} />
        <StickyContent>
          <PageTitle $titlecolor={titleColor}>{pageTitle}</PageTitle>
          <PageParagraph dangerouslySetInnerHTML={{ __html: pageContent }} $textcolor={textColor}></PageParagraph>
        </StickyContent>
      </ContentWrapper>
    </Container>
  );
}

export default PageContent;
