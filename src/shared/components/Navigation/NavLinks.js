import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css"

export default function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to={"/"}>ALL USERS</NavLink>
      </li>

      <li>
        <NavLink to={"/places"}>MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to={"/places/new"}>ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to={"/auth"}>AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
}
