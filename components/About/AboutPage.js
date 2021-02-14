import styled from "@emotion/styled";
import React from "react";
import { useQuery } from "react-query";
import AboutTable from "./AboutTable";

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Summary = styled.p`
  font-size: 1.8rem;
  color: white;
  font-weight: 300;
  span {
    font-weight: 600;
  }
`;
const Tables = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 0;
`;
export default function AboutPage() {
  const { isLoading, error, data, isFetching } = useQuery("launchpad", () =>
    fetch(`https://api.spacexdata.com/v4/company`).then((res) => res.json())
  );

  if (!data) {
    return null;
  }
  const {
    founded,
    employees,
    vehicles,
    launch_sites,
    test_sites,
    founder,
    cto,
    coo,
    cto_propulsion,
    headquarters,
  } = data;

  const tableOne = [
    { data: founded, text: "Founded" },
    { data: employees, text: "Employees" },
    { data: vehicles, text: "Vehicles" },
    { data: launch_sites, text: "Launch sites" },
    { data: test_sites, text: "Test sites" },
  ];
  const tableTwo = [
    { data: founder, text: "Founder" },
    { data: cto, text: "CTO" },
    { data: coo, text: "COO" },
    { data: cto_propulsion, text: "Propulsion CTO" },
    {
      data: `${headquarters.address}, ${headquarters.city}, ${headquarters.state}`,
      text: "HQ",
    },
  ];
  const renderText = () => {
    //Make first word bold.
    const text = data?.summary.split(" ").slice(1).join(" ");
    const firstWord = data?.summary.split(" ")[0];
    return (
      <>
        <span>{firstWord}</span> {text}
      </>
    );
  };
  return (
    <StyledAboutPage>
      <Summary>{renderText()}</Summary>
      <Tables>
        <AboutTable tableData={tableOne} />
        <AboutTable tableData={tableTwo} />
      </Tables>
    </StyledAboutPage>
  );
}
