import styled from "@emotion/styled";
import dayjs from "dayjs";
import React from "react";
import useGetEquipment from "../../hooks/useGetEquipment";

const StyledMissionsTable = styled.div`
  /* padding: 0.5rem; */
  margin-top: 2rem;

  table {
    border-spacing: 0;
    width: 100%;
    text-align: left;
  }
  th,
  td,
  tr {
    padding: 1rem 0.3rem;
    font-size: 1.4rem;
    color: white;
    text-transform: uppercase;
  }
  tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
  }
`;

function MissionRow({ mission }) {
  return (
    <tr>
      <td>{mission.flight_number}</td>
      <td>{mission.name}</td>
      <td>{dayjs(mission.date_utc).format("DD/MM/YY")}</td>
      {/* <td>{payload?.name}</td> */}
      <td>{mission.success ? "success" : "failure"}</td>
    </tr>
  );
}
export default function MissionsTable({ pastMissions }) {
  if (!pastMissions) {
    return null;
  }
  return (
    <StyledMissionsTable>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Date</th>
            {/* <th>Payload</th> */}
            <th>Outcome</th>
          </tr>
        </thead>
        <tbody>
          {pastMissions?.map((mission) => (
            <MissionRow mission={mission} />
          ))}
        </tbody>
      </table>
    </StyledMissionsTable>
  );
}
