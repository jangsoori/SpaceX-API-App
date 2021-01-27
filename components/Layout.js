import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

const StyledLayout = styled.div``;
export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navbar />
      {children}
    </StyledLayout>
  );
}
