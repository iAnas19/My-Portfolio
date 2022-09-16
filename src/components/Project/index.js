import React from "react";

import Icon from "../../images/Capture.PNG";
import Icon1 from "../../images/Capture1.PNG";
import Icon2 from "../../images/Capture2.PNG";
import Icon3 from "../../images/Capture3.PNG";
import {
  ProjectCard,
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectIcon,
  ProjectH2,
  ProjectP,
} from "./ProjectElements";

const Project = () => {
  return (
    <ProjectContainer id="Project">
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon} />
          <ProjectH2>DevConnect</ProjectH2>
          <ProjectP
            href="https://github.com/iAnas19/Dev-Connector
          "
            target="_blank"
          >
            View
          </ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={Icon2} />
          <ProjectH2>StoryBooks</ProjectH2>
          <ProjectP
            href="https://github.com/iAnas19/StoryBooks
          "
            target="_blank"
          >
            View
          </ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={Icon3} />
          <ProjectH2>Currency Converter</ProjectH2>
          <ProjectP
            href="https://ianas19.github.io/CurrencyExchange/
          "
            target="_blank"
          >
            View
          </ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={Icon1} />
          <ProjectH2>GoalSetter App</ProjectH2>
          <ProjectP
            href="http://goalsetterpk.herokuapp.com/
          "
            target="_blank"
          >
            View
          </ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
