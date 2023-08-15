import React from "react";
import styled from "styled-components";
import { GrSolaris } from "react-icons/gr";
// import { Link } from "react-router-dom";
// import { links } from "../utils/constants";
// import { VscStarFull } from "react-icons/vsc";

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo">
        <h3>TrailerMax</h3>
        <h2>T</h2>
        <GrSolaris className="logo-icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 0.5rem; */
    color: var(--clr-white);
  }

  .logo h3 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  .logo-icon {
    position: absolute;
    top: -12%;
    right: 7.5%;
    font-size: 2.6rem;
    color: var(--clr-primary-5);
    border: none;
  }

  .logo h2 {
    display: none;
  }

  @media (max-width: 680px) {
    .logo-icon {
      position: absolute;
      top: -5%;
      right: -95%;
      font-size: 2.6rem;
      color: var(--clr-primary-5);
      border: none;
    }

    .logo h3 {
      display: none;
    }

    .logo h2 {
      display: block;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 860px) {
    .logo {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
    }

    .logo-icon {
      position: absolute;
      top: -19%;
      right: 8.2%;
      font-size: 2.9rem;
      color: var(--clr-primary-5);
      border: none;
    }
  }
`;

export default Logo;
