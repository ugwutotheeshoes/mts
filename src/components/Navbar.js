import React, { useState, useEffect } from "react";
import { GrSolaris } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const showMiniLinks = () => {
    setMenu(!menu);
  };
  return (
    <NavContainer>
      <div className="nav-container">
        <Link to="/">
        <div className="logo">
          <h3>TrailerMax</h3>
          <GrSolaris className="title-icon" />
        </div>
          </Link>
        <button type="button" className="nav-toggle">
          <FaBars />
        </button>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  background: black;
  width: 100%;

  .nav-container {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-top: 0.4rem;
  }

  .logo h3 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  .title-icon {
    position: absolute;
    top: -3%;
    right: 9%;
    font-size: 2.1rem;
    color: var(--clr-primary-7);
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-black);
    cursor: pointer;
    svg {
      font-size: 1.4rem;
    }
    &:hover {
      color: var(--clr-primary-7);
    }
  }

  .nav-links {
    /* display: none; */
  }

  @media (min-width: 800px) {
    .logo {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: var(--clr-primary-5);
    }

    .title-icon {
      position: absolute;
      top: -17%;
      right: 8%;
      font-size: 3rem;
      color: var(--clr-primary-5);
      border: none;
    }

    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0 2.5rem;
      }
      a {
        color: var(--clr-primary-7);
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
        text-transform: uppercase;
        /* color: var(--clr-black); */
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
  @media (max-width: 800px) {
    .logo {
      color: var(--clr-primary-5);
    }
  }
`;

export default Navbar;
