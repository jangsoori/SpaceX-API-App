import styled from "@emotion/styled";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { css, jsx } from "@emotion/react";
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Menu = styled.div`
  color: white;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  font-size: 2rem;
  display: grid;
`;
const Dropdown = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  column-gap: 1rem;
  justify-items: center;
  row-gap: 0.5rem;
`;
const DropdownContent = styled.div`
  font-size: 1.4rem;
  display: grid;
  grid-auto-flow: row;
  justify-self: center;
  row-gap: 1rem;
  text-align: left;
`;

const Hamburger = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 2;
  display: block;
  height: 6rem;
  width: 6rem;

  span {
    backface-visibility: hidden;

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

const Arrow = styled(FaChevronDown)`
  cursor: pointer;
  display: none;
`;
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const dropdownContent = [
    "capsules",
    "cores",
    "dragons",
    "landpads",
    "launches",
    "payloads",
    "fairings",
    "rockets",
    "ship",
  ];
  const renderDropdown = () => {
    return dropdownContent.map((item) => {
      return (
        <Link href={`/${item}`}>
          <a>{item}</a>
        </Link>
      );
    });
  };

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
        <MenuItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/missions">
            <a>Missions</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Dropdown open={dropdownOpen}>
            <Link href="/equipment">
              <a>Equipment</a>
            </Link>
            <Arrow
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
              }}
            />
            <DropdownContent open={dropdownOpen}>
              {renderDropdown()}
            </DropdownContent>
          </Dropdown>
        </MenuItem>
        <MenuItem>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/crew">
            <a>Crew</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/starlink">
            <a>Starlink</a>
          </Link>
        </MenuItem>
      </Menu>
    </StyledNavbar>
  );
}
