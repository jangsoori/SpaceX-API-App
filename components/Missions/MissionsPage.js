import styled from "@emotion/styled";
import React from "react";

const StyledMissionsPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Summary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;
const SummaryItem = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
`;
const SummaryItemNumber = styled.p`
  line-height: 1;
  font-size: 2.4rem;
  font-weight: 500;
`;
const SummaryItemTitle = styled.p`
  font-size: 1.3rem;
  text-transform: uppercase;
`;
export default function MissionsPage({ pastMissions }) {
  console.log(pastMissions);
  const missionCount = pastMissions?.length;
  const getSuccess = () => {
    let successCount = 0;
    pastMissions?.reduce((prev, curr) => {
      if (curr.success) {
        successCount++;
      }
    });
    return successCount;
  };

  return (
    <StyledMissionsPage>
      <Summary>
        <SummaryItem>
          <SummaryItemNumber>{missionCount}</SummaryItemNumber>
          <SummaryItemTitle>Launches</SummaryItemTitle>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemNumber>{getSuccess()}</SummaryItemNumber>
          <SummaryItemTitle>Successful</SummaryItemTitle>
        </SummaryItem>
      </Summary>
    </StyledMissionsPage>
  );
}
