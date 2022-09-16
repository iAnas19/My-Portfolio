import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 900px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectCard = styled.div`
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    // height: 200px;
    padding: 5px 10px;
    // flex-direction: row;
  }

  @media screen and (max-width: 480px) {
    min-height: 280px;
    max-height: 340px;
    padding: 30px;
    flex-direction: column;
  }
  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
  font: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectP = styled.a`
  font-size: 1rem;
  text-align: center;
  background: green;
  padding: 5px 8px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  outline: none;

  @media screen and(max-width: 768px) {
    margin: 0 10px;
    text-align: left;
    font-size: 12px;
  }
`;
