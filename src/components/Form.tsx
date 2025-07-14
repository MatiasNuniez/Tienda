import React from "react";
import type { InputField } from "../interfaces/InputsI";

interface FormInputs {
  inputs: InputField[];
  styleForm: string;
  buttons: string[];
  styleButtons: string;
}

export const Form: React.FC<FormInputs> = ({
  inputs,
  styleForm,
  buttons,
  styleButtons,
}) => {
  return (
    <div className={styleForm}>
      {inputs.map((element) => {
        return (
          <>
            <div className={element.classname}>
              <div className="flex flex-start gap-x-2 gap-y-4 items-center">
                <label
                  htmlFor={element.name}
                  className="text-black font-semibold"
                >
                  {element.label}
                </label>
                <input
                  type={element.type}
                  name={element.name}
                  placeholder={element.placeholder}
                  className="p-2 mr-2 border-1 text-slate-500 rounded-md w-full"
                />
              </div>
            </div>
          </>
        );
      })}
      {buttons.map((boton) => {
        return (
          <>
            <button className={styleButtons}>{boton}</button>
          </>
        );
      })}
    </div>
  );
};
