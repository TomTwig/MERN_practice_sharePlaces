import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/ui/validators";
import Button from "../../shared/components/FormElements/Button";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid
      };

    default:
      return state;
  }
};

export default function NewPlace() {


    function placeSubmitHandler(event){

        event.preventDefault();
        // send to backend
        console.log(formState.inputs);
    }


  

    
 const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({type: "INPUT_CHANGE", value : value, isValid: isValid, inputId:id  })
  }, []);


  


  return (
    <form onSubmit={placeSubmitHandler} className="place-form">
      <Input
        id="title"
        element={"input"}
        type={"text"}
        label={"Title"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter a valid title"
      />



      <Input
        id="description"
        element={"textarea"}
        label={"Description"}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
      />

<Input
        id="address"
        element={"input"}
        label={"Address"}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
   
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>

      
      
    </form>
  );
}
