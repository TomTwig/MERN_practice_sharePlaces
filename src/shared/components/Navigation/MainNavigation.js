import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SiteDrawer from "./SiteDrawer";

export default function MainNavigation(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  function toggleDrawer() {
    setDrawerIsOpen(drawerIsOpen ? false : true);
  }
  return (
    <>
    {drawerIsOpen && <Backdrop onClick={toggleDrawer} />}
      {drawerIsOpen && (
        <SiteDrawer>
          <nav className="main-navigation__drawer-nav"></nav>
        </SiteDrawer>
      )}

      <MainHeader>
        <button onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to={"/"}>YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}
