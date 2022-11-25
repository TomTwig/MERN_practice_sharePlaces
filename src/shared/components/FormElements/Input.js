import React, { useReducer, useEffect } from "react";

import { validate } from "../../ui/validators";

import "./Input.css";

function inputReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };


    case "TOUCH":
      return {
        ...state,
        isTouched: true
      }
    default:
      return state;
  }
}

export default function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false
  });

const {id, onInput} = props;
const {value, isValid} = inputState;

  useEffect(()=>{
onInput(props.id, inputState.value, inputState.isValid)

  },[id, onInput, value, isValid])

function touchHandler(){

  dispatch({type: "TOUCH"})


}

  function onChange(event) {
    dispatch({ type: "CHANGE", val: event.target.value, validators: props.validators });
  }

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChange}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea id={props.id}  onChange={onChange} onBlur={touchHandler} rows={props.rows || 3} value={inputState.value} />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}
