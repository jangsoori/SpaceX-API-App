import styled from "@emotion/styled";
import React from "react";
import NextMissionDetails from "./NextMissionDetails";
import NextMissionName from "./NextMissionName";
import NextMissionTimer from "./NextMissionTimer";

const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  /* justify-content: center; */
  align-items: flex-start;
`;
export default function HomePage({ nextLaunch }) {
  const [openDetails, setOpenDetails] = React.useState(false);
  console.log(openDetails);
  return (
    <StyledHomePage>
      <NextMissionName
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
        launchName={nextLaunch?.name}
      />
      <NextMissionTimer launchDate={nextLaunch?.date_utc} />
      <NextMissionDetails details={nextLaunch} openDetails={openDetails} />
    </StyledHomePage>
  );
}
