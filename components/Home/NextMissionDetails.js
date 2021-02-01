import React from "react";

export default function NextMissionDetails({ openDetails }) {
  return (
    <div style={{ color: "white" }}>
      {openDetails ? <p>details open</p> : <p>details closed</p>}
    </div>
  );
}
