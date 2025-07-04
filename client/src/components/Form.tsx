import React from "react";
import type { InputField } from "../interfaces/InputsI";

interface FormInputs {
  inputs: InputField[];
  styleForm: string;
  buttons: string[];
}

export const Form: React.FC<FormInputs> = ({ inputs, styleForm, buttons }) => {
  return (
    <div className={styleForm}>
      {inputs.map((element) => {
        return (
          <>
            <label htmlFor={element.name} className={element.classname}>
              {element.label}
            </label>
            <input
              type={element.type}
              name={element.name}
              placeholder={element.placeholder}
              className={element.classname}
            />
          </>
        );
      })}
      {buttons.map((boton) => {
        return (
          <>
            <button>{boton}</button>
          </>
        );
      })}
    </div>
  );
};
