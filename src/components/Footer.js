import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <h4>&copy;{new Date().getFullYear()} TrailerMax</h4>
      <div className="socials">
        <div className="social-icon">
          <FaFacebook className="fa" />
          <FaInstagram className="fa" />
          <FaTwitter className="fa" />
        </div>
        <h5>Privacy & Cookies | Terms | Accessibility</h5>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--clr-grey-7);
  color: var(--clr-grey-2);
  /* text-align: center; */

  h4 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 0.8rem;
  }

  h5 {
    font-weight: 200;
    font-size: 0.8rem;
    cursor: pointer;
  }

  .socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 8rem;
    width: 30rem;
  }

  .social-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
  }

  @media (max-width: 680px) {
    padding: 0.5rem 1rem;
    h4 {
      text-transform: uppercase;
      font-weight: 200;
      font-size: 0.8rem;
    }

    .socials {
      padding: 0 0 0 4rem;
    }

    .social-icon {
      margin-right: 1rem;
    }

    svg {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 860px) {
    padding: 2rem 2.5rem;
    margin-bottom: 0;

    h4 {
      text-transform: uppercase;
      font-weight: 200;
      font-size: 0.8rem;
    }

    h5 {
      font-weight: 200;
      font-size: 0.8rem;
      cursor: pointer;
    }

    svg {
      font-size: 0.8rem;
    }
  }
`;

export default Footer;
