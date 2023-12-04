import React from 'react';
import LinkedinIcon from "./linkedin-icon.svg"
import TwitterIcon from "./twitter-icon.svg"
import InstagramIcon from "./instagram-icon.svg"

import { ConnectionsContainer, Email, Number, SocialMedia } from './connections.styles';

const Connections = ({scrollPosition}) => {
  console.log(scrollPosition);
  return (
    <ConnectionsContainer $scrollPosition={scrollPosition}>
      <Email className="mail">
        mail@mail.com
      </Email>
      <Number className="number">
        0555454343
      </Number>
      <SocialMedia>
        <span>
          <img src={TwitterIcon} alt="twitter_logo" />
        </span>
        <span>
          <img src={LinkedinIcon} alt="linkedin_logo" />
        </span>
        <span>
          <img src={InstagramIcon} alt="instagram_logo" />
        </span>
      </SocialMedia>
    </ConnectionsContainer>
  );
}

export default Connections;
