import React from "react";
import styled from "@emotion/styled";
const StyledHero = styled.div`
  display: grid;
`;

const NextMission = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 0.4rem;
  text-transform: uppercase;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.8rem;
`;
const MissionName = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
`;
const DetailsButton = styled.button`
  font: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  justify-self: start;
  padding: 0.75rem 1rem;
  border: 2px solid white;
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
          {openDetails ? "close" : "details"}
        </DetailsButton>
      </NextMission>
    </StyledHero>
  );
}
