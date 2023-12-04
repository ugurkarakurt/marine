import React from 'react';
import { TileLayer, Marker, Tooltip } from "react-leaflet";
import LinkedinIcon from "../connections/linkedin-icon.svg"
import TwitterIcon from "../connections/twitter-icon.svg"
import InstagramIcon from "../connections/instagram-icon.svg"
import { FooterContainer, MapWrapper, FooterImage, FooterDescription, Links, LinkColumn, SocialMediaContainer, SocialMedia } from "./footer.styles";
import Image from "../logo/logo.png"
import NavLink from '../nav-link/nav-link.component';
const Footer = () => {
  const coord = [40.8403951, 29.301991]

  return (
    <FooterContainer>
      <FooterImage>
        <img src={Image} alt="footer_logo" />
      </FooterImage>

      <FooterDescription>
        <Links>
          <LinkColumn>
            <h3>Info</h3>
            <NavLink route={"/our-products"} page={"Our Products"} />
            <NavLink route={"/mission"} page={"Mission"} />
            <NavLink route={"/vision"} page={"Vision"} />
          </LinkColumn>
          <LinkColumn>
            <h3>Resources</h3>
            <NavLink route={"/contact"} page={"Contact"} />
          </LinkColumn>
          <LinkColumn>
            <h3>Company</h3>
            <NavLink route={"/about-us"} page={"About Us"} />
          </LinkColumn>
        </Links>
        <SocialMediaContainer>
          <h3>Follow Us</h3>
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
        </SocialMediaContainer>
      </FooterDescription>

      <MapWrapper center={coord} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coord}>
          <Tooltip permanent>
            ASAP Marine Supply Co.
          </Tooltip>
        </Marker>
      </MapWrapper>
    </FooterContainer>
  );
}

export default Footer;