import styled from "styled-components";

export const TechContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 2200px;
  }
`;

export const TechWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 14px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px 20px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TechCard = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 200px;
  width: 150px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.25);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1000px) {
    height: 250px;
    width: 180px;
    padding: 5px 10px;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    min-height: 300px;
    width: 300px;
    margin: 20px 0;
    padding: 40px 50px;
    flex-direction: column;
  }
  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const TechIcon = styled.div`
  font-size: 7rem;
  color: #fff;
  min-height: 160px;
  min-width: 160px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    font-size: 9rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 10rem;
  }
`;

export const TechH1 = styled.h1`
  font: 2.5rem;
  //   color: #010606;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const TechH2 = styled.h1`
  font-size: 1rem;
  color: #d6d6d6;
  margin: -30px 0 0 0;
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
