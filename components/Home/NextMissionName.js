import React from "react";
import styled from "@emotion/styled";
const StyledHero = styled.div`
  display: grid;
`;

const NextMission = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 0rem;
  text-transform: uppercase;
  color: white;
`;

const Title = styled.p`
  font-size: 2.4rem;
`;
const MissionName = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
`;
const DetailsButton = styled.button`
  font: inherit;
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: uppercase;
  justify-self: start;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  background: none;
  color: white;
  cursor: pointer;
  border-radius: 0.2rem;
  transition: all 0.5s;
  &:hover {
    background: white;
    color: black;
  }
`;
export default function Hero({ launchName, setOpenDetails, openDetails }) {
  return (
    <StyledHero>
      <NextMission>
        <Title>Next Launch</Title>
        <MissionName>{launchName}</MissionName>
        <DetailsButton onClick={() => setOpenDetails(!openDetails)}>
          {openDetails ? "close details" : "show details"}
        </DetailsButton>
      </NextMission>
    </StyledHero>
  );
}
