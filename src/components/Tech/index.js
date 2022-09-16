import React from "react";
import {
  FaHtml5,
  FaNode,
  FaPython,
  FaReact,
  FaCss3,
  FaJs,
} from "react-icons/fa";

import {
  TechCard,
  TechContainer,
  TechH1,
  TechWrapper,
  TechIcon,
  TechH2,
} from "./TechElements";

const Tech = () => {
  return (
    <TechContainer id="Tech">
      <TechH1>Techs</TechH1>
      <TechWrapper>
        <TechCard>
          <TechIcon>
            <FaReact />
          </TechIcon>
          <TechH2>React js</TechH2>
        </TechCard>

        <TechCard>
          <TechIcon>
            <FaNode />
          </TechIcon>
          <TechH2>Node js</TechH2>
        </TechCard>

        <TechCard>
          <TechIcon>
            <FaPython />
          </TechIcon>
          <TechH2>Python</TechH2>
        </TechCard>

        <TechCard>
          <TechIcon>
            <FaJs />
          </TechIcon>
          <TechH2>JavaScript</TechH2>
        </TechCard>

        <TechCard>
          <TechIcon>
            <FaHtml5 />
          </TechIcon>
          <TechH2>HTML</TechH2>
        </TechCard>

        <TechCard>
          <TechIcon>
            <FaCss3 />
          </TechIcon>
          <TechH2>CSS</TechH2>
        </TechCard>
      </TechWrapper>
    </TechContainer>
  );
};

export default Tech;
