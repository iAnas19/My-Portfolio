import React from "react";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
} from "./FooterElemets";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Portfolio 2022
            </SocialLogo>

            <SocialIcons>
              <SocialIconLink
                href="//www.github.com/iAnas19"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>

              <SocialIconLink
                href="//www.linkedin.com/in/ianasarif/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink
                href="//www.twitter.com/anas_arif_"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
