import React from "react";
import styled from "@emotion/styled";
const StyledHero = styled.div`
  display: grid;
`;

const NextMission = styled.div`
  display: grid;
  grid-template-rows: auto;

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
export default function Hero({ launchName }) {
  return (
    <StyledHero>
      <NextMission>
        <Title>Next Launch</Title>
        <MissionName>{launchName}</MissionName>
      </NextMission>
    </StyledHero>
  );
}
