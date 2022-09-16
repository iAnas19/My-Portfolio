import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";

import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, SetScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="HeroSection"
                  onClick={toggleHome}
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Qualifications
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Project"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Project
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="Tech"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Technolgies
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
