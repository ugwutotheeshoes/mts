import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { VscStarFull } from "react-icons/vsc";

const Logo = () => {
  return (
    <Wrapper>
      <div className="title">
        <h3>Moviestar</h3>
        <VscStarFull className="title-icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-top: 0.4rem;
  }

  .title h3 {
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

  @media (max-width: 630px) {
    .logo-icon {
      position: absolute;
      top: -50%;
      right: 38.9%;
      font-size: 2.6rem;
      color: var(--clr-primary-5);
      border: none;
    }

    .logo h3 {
      line-height: 0.5;
    }
  }

  @media (min-width: 830px) {
    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: var(--clr-black);
    }
    .title h3 {
      line-height: 0.5;
    }

    .title-icon {
      position: absolute;
      top: -17%;
      right: 7%;
      font-size: 3rem;
      color: var(--clr-primary-5);
      border: none;
    }
  }
`;

export default Logo;
