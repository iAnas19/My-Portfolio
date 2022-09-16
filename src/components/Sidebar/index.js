import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Qualifications
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to="Project" onClick={toggle}>
            Project
          </SidebarLink>
          <SidebarLink to="Tech" onClick={toggle}>
            Technologies
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
