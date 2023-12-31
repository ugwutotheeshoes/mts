import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useMoviesContext } from "../context/movies_context";
import { links } from "../utils/constants";
import Logo from "./Logo";

const Navbar = () => {
  const { openSidebar } = useMoviesContext();
  // const [menu, setMenu] = useState(true);
  // const showMiniLinks = () => {
  //   setMenu(!menu);
  // };
  return (
    <NavContainer>
      <div className="nav-container">
        <div className="nav-header">
          <Link to="/">
            <Logo />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
          <ul className="nav-links">
            {links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-black);

  .nav-container {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    margin-top: 0.15rem;
    color: var(--clr-white);
    cursor: pointer;
    svg {
      font-size: 1.4rem;
    }
    &:hover {
      color: var(--clr-grey-9);
    }
  }

  .nav-links {
    display: none;
  }

  @media (max-width: 680px) {
  }

  @media (min-width: 860px) {
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
        color: var(--clr-white);
        padding: 0.5rem;
        margin-top: 0.15rem;
        text-transform: uppercase;
        /* color: var(--clr-black); */
        font-size: 1rem;
        letter-spacing: var(--spacing);
        &:hover {
          transition: var(--transition);
          border-bottom: 2px solid var(--clr-white);
        }
      }
    }
  }
`;

export default Navbar;
