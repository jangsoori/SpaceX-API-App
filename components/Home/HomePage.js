import styled from "@emotion/styled";
import React from "react";
import NextMissionName from "./NextMissionName";
import NextMissionTimer from "./NextMissionTimer";

const StyledHomePage = styled.div``;
export default function HomePage({ nextLaunch }) {
  return (
    <StyledHomePage>
      <NextMissionName launchName={nextLaunch?.name} />
      <NextMissionTimer launchDate={nextLaunch?.date_utc} />
    </StyledHomePage>
  );
}
