import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";
const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/background.jpg") no-repeat bottom center / cover;
  padding: 1rem;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navbar />
      {children}
    </StyledLayout>
  );
}
