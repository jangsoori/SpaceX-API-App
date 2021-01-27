import styled from "@emotion/styled";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { css } from "@emotion/react";
const StyledNavbar = styled.nav``;

const Logo = styled.div``;

const Menu = styled.div``;
const MenuItem = styled.a``;
const Dropdown = styled.div``;
const DropdownContent = styled.div`
  display: none;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo>
        <h1>spacex</h1>
      </Logo>
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Missions</MenuItem>
        <Dropdown>
          <Link href="/equipment">
            <a>Equipment</a>
          </Link>
          <FaChevronDown />
          <DropdownContent>
            <Link href="/equipment">
              <a>Capsules</a>
            </Link>{" "}
            <Link href="/equipment">
              <a>Cores</a>
            </Link>{" "}
            <Link href="/equipment">
              <a>Dragons</a>
            </Link>{" "}
            <Link href="/equipment">
              <a>Landpads</a>
            </Link>
          </DropdownContent>
        </Dropdown>
        <MenuItem>Timeline</MenuItem>
        <MenuItem>Crew</MenuItem>
        <MenuItem>Starlink</MenuItem>
      </Menu>
    </StyledNavbar>
  );
}
