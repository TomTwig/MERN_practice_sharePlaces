import React from "react";
import  ReactDOM  from "react";
import "./SiteDrawer.css";

export default function SiteDrawer(props) {

  return <aside className="side-drawer">{props.children}</aside>;
}
