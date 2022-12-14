import React from "react";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

function ModalOverlay(props) {
  return (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.defaultPrevented()
        }
      >
        <div className={`modal_content ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
}

export default function Modal(props) {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >

        <ModalOverlay {...props}/>
      </CSSTransition>
    </>
  );
}
