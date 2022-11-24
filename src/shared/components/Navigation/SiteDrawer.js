import React from "react";
import ReactDOM from "react";
import "./SiteDrawer.css";
import { CSSTransition } from "react-transition-group";

export default function SiteDrawer(props) {
  return (
    <CSSTransition in={props.show} timeout={200} classNames={"slide-in-left"} mountOnEnter unmountOnExit>
      <aside onClick={props.toggleDrawer}  className="side-drawer">{props.children}</aside>
    </CSSTransition>
  );
}
