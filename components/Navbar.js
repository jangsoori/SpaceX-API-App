import styled from "@emotion/styled";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Menu = styled.div`
  color: white;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  padding: 2rem 0;
  opacity: 0;
  visibility: hidden;
  ${({ mobileOpen }) =>
    mobileOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
const MenuItem = styled.div`
  padding: 1rem;
  font-size: 2rem;
`;
const Dropdown = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 1rem;
`;
const DropdownContent = styled.div`
  display: none;
`;

const Hamburger = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 2;
  display: block;
  height: 6rem;
  width: 6rem;

  span {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    display: block;
    width: 4rem;
    height: 0.4rem;
    background-color: white;
    border-radius: 0.5rem;
    transition: all 0.3s;
    :first-of-type {
      transform: translate(50%, 0);
      top: 1.5rem;
      width: 2rem;
    }
    :nth-of-type(2),
    :nth-of-type(3) {
      width: 3rem;
    }
    :last-of-type {
      bottom: 1.5rem;
      transform: translate(50%, 0);
      top: auto;
    }
    ${({ isActive }) =>
      isActive &&
      css`
        &:first-of-type,
        &:last-of-type {
          transform: translate(50%, -50%) scale(0);
          opacity: 0;
        }

        &:nth-of-type(2) {
          transform: translate(50%, -50%) rotate(45deg);
          width: 4rem;
        }
        &:nth-of-type(3) {
          width: 4rem;

          transform: translate(50%, -50%) rotate(-45deg);
        }
      `}
  }
`;
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log(mobileOpen);
  return (
    <StyledNavbar>
      <Logo>
        <Image src="/logo-mobile.png" width="100" height="40" />
      </Logo>

      <Hamburger
        onClick={() => {
          setMobileOpen(!mobileOpen);
        }}
        isActive={mobileOpen}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <Menu mobileOpen={mobileOpen}>
        <MenuItem>About</MenuItem>
        <MenuItem>Missions</MenuItem>
        <MenuItem>
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
        </MenuItem>
        <MenuItem>Timeline</MenuItem>
        <MenuItem>Crew</MenuItem>
        <MenuItem>Starlink</MenuItem>
      </Menu>
    </StyledNavbar>
  );
}
