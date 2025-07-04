import React from "react";
import { Form } from "./Form";

export const LoginPage: React.FC = () => {
  const styleForm = "grid grid-cols-1 grid-rows-5 gap-y-4";

  return (
    <>
      <h1>Iniciar Sesion</h1>
      <Form
        inputs={[
          {
            type: "email",
            placeholder: "Ingrese email",
            label: "Correo Electronico",
            name: "Email",
            classname: "",
          },
          {
            type: "password",
            label: "Contrasena",
            name: "Contrasena",
            placeholder: "Ingrese su contrasena",
            classname: "",
          },
        ]}
        styleForm={styleForm}
        buttons={["Iniciar Sesion", "Registrarse"]}
      />
    </>
  );
};
