import styled from "@emotion/styled";
import React from "react";
import dayjs from "dayjs";
import useFetch from "../../hooks/useFetch";
const Wrapper = styled.div`
  background-color: rgba(1, 2, 20, 0.32);
  border-radius: 2px;
  margin-top: 2rem;
  padding: 1rem;
  justify-self: left;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
`;
const Desc = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;

const MiscWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-top: 3rem;
`;

const MiscItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
`;

const MiscItemTitle = styled.p``;
const MiscItemDesc = styled.p``;
export default function NextMissionDetails({ openDetails, details }) {
  if (!details) {
    return null;
  }
  const { response: launchpad } = useFetch(
    `https://api.spacexdata.com/v4/launchpads/${details.launchpad}`
  );
  const { response: payload } = useFetch(
    `https://api.spacexdata.com/v4/payloads/${details.payloads[0]}`
  );
  const { response: rocket } = useFetch(
    `https://api.spacexdata.com/v4/rockets/${details.rocket}`
  );
  const { response: core } = useFetch(
    `https://api.spacexdata.com/v4/cores/${details.cores[0].core}`
  );
  const { name, details: desc, date_utc, flight_number } = details;

  return (
    <div style={{ color: "white" }}>
      {openDetails && (
        <Wrapper>
          <Title>{name}</Title>
          <Desc>{desc}</Desc>
          <MiscWrapper>
            <MiscItem>
              <MiscItemTitle>LIFT-OFF</MiscItemTitle>
              <MiscItemDesc>
                {dayjs(date_utc).format("DD MMM YYYY")}
              </MiscItemDesc>
            </MiscItem>
            <MiscItem>
              <MiscItemTitle>LAUNCH SITE</MiscItemTitle>
              <MiscItemDesc>{launchpad?.name}</MiscItemDesc>
            </MiscItem>
            <MiscItem>
              <MiscItemTitle>FLIGHT NO.</MiscItemTitle>
              <MiscItemDesc>{flight_number}</MiscItemDesc>
            </MiscItem>
            <MiscItem>
              <MiscItemTitle>PAYLOAD</MiscItemTitle>
              <MiscItemDesc>{payload?.name}</MiscItemDesc>
            </MiscItem>
            <MiscItem>
              <MiscItemTitle>ROCKET</MiscItemTitle>
              <MiscItemDesc>{rocket?.name}</MiscItemDesc>
            </MiscItem>
            <MiscItem>
              <MiscItemTitle>CORE</MiscItemTitle>
              <MiscItemDesc>{core?.serial}</MiscItemDesc>
            </MiscItem>
          </MiscWrapper>
        </Wrapper>
      )}
    </div>
  );
}
