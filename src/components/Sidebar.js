import React from "react";
import { useMoviesContext } from "../context/movies_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
// import Logo from "./Logo";
import { GrSolaris } from "react-icons/gr";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useMoviesContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <div className="logo">
            <h2>T</h2>
            <GrSolaris className="logo-icon" />
          </div>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-primary-5);
  }
  .logo-icon {
    position: absolute;
    top: 1.8%;
    left: 1.3%;
    font-size: 2.6rem;
    color: var(--clr-primary-5);
    border: none;
  }
  .logo h2 {
    display: block;
    font-size: 1.6rem;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    color: var(--clr-white);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-primary-5);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-black);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 860px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
