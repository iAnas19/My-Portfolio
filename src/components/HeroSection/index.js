import React, { useState } from "react";
import resume from "../../downloads/resume.pdf";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  Heroh1,
  HeroP,
  ArrowForward,
  ArrowRight,
  Anchor,
} from "./HeroElements";
import video from "../../videos/bg.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="bg/mp4" />
      </HeroBg>
      <HeroContent>
        <Heroh1>Hello!</Heroh1>
        <Heroh1>My name is Muhamamd Anas</Heroh1>
        <HeroP>
          I am a software engineering student and a graphic designer
        </HeroP>
        <HeroBtnWrapper>
          <Anchor
            href={resume}
            download="Muhammad Anas resume.pdf"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            style={{ color: "#fff" }}
            smooth={true}
            duration={1000}
          >
            Download My CV {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Anchor>
          {/* Download file */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
