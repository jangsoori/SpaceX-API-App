import styled from "@emotion/styled";
import React from "react";
import MissionsSummary from "./MissionsSummary";
import MissionsTable from "./MissionsTable";

const StyledMissionsPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default function MissionsPage({ pastMissions }) {
  return (
    <StyledMissionsPage>
      <MissionsSummary pastMissions={pastMissions} />
      <MissionsTable pastMissions={pastMissions} />
    </StyledMissionsPage>
  );
}
