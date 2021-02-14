import styled from "@emotion/styled";
import React from "react";

const StyledAboutTable = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-top: 3rem;
  color: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  text-align: right;
`;
const ItemLeft = styled.p`
  font-weight: 600;
  margin-right: 2rem;
`;
const ItemRight = styled.p``;
export default function AboutTable({ tableData }) {
  if (!tableData) {
    return null;
  }

  const renderTable = (table) => {
    return table.map((item) => {
      return (
        <Item>
          <ItemLeft>{item.text}</ItemLeft>
          <ItemRight>{item.data}</ItemRight>
        </Item>
      );
    });
  };

  return <StyledAboutTable>{renderTable(tableData)}</StyledAboutTable>;
}
