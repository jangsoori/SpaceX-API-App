import styled from "@emotion/styled";
import React from "react";
import { useQuery } from "react-query";

const StyledAboutPage = styled.div``;
const Summary = styled.p`
  font-size: 1.8rem;
  color: white;
  font-weight: 300;
  span {
    font-weight: 600;
  }
`;
export default function AboutPage() {
  const { isLoading, error, data, isFetching } = useQuery("launchpad", () =>
    fetch(`https://api.spacexdata.com/v4/company`).then((res) => res.json())
  );
  console.log(data);

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
    </StyledAboutPage>
  );
}
