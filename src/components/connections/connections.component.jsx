import React from 'react';
import LinkedinIcon from "./linkedin-icon.svg"
import TwitterIcon from "./twitter-icon.svg"
import InstagramIcon from "./instagram-icon.svg"
import WhatsappIcon from "./whatsapp.png";

import { ConnectionsContainer, Email, Number, SocialMedia } from './connections.styles';

const Connections = ({ scrollPosition }) => {
  return (
    <ConnectionsContainer $scrollPosition={scrollPosition}>
      <a target='_blank' href="mailto: sales@asapmar.com" rel="noreferrer">
        <Email className="mail">
          sales@asapmar.com
        </Email>
      </a>
      <a target='_blank' href="https://wa.me/+9005356700485" rel="noreferrer">
        <Number className="number">
          <img src={WhatsappIcon} alt="whatsapp_logo" />
        </Number>
      </a>
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
