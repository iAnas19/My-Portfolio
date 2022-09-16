import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import { SocialIconLink, SocialIcons, SocialWrapper } from "./InfoElements ";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Education",
  headline: "Software Engineering from UoK",
  description:
    "Doing Software engineering from University of Karachi UBIT department [currently on 6th semester]",
  buttonLabel: "Contact",
  imgStart: true,
  img: require("../../images/svg-1.svg").default,
  alt: "car",
  primary: true,
  darkText: true,
  dark: false,
};
export const homeObjTwo = {
  id: "discover",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Contact",
  headline: "Reach me at",
  description: (
    <SocialWrapper>
      if you have any queries you can contact me at
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
      OR
    </SocialWrapper>
  ),
  buttonLabel: "Email me at",
  imgStart: false,
  img: require("../../images/svg-2.svg").default,
  alt: "car",
  primary: false,
  darkText: false,
  dark: true,
};
