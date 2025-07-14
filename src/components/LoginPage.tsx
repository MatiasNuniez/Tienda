import React from "react";
import { Form } from "./Form";

export const LoginPage: React.FC = () => {
  const styleForm = "grid grid-cols-1 grid-rows-5 gap-y-4";

  return (
    <>
      <h1 className="">Iniciar Sesión</h1>
      <p className="">Ingresa a tu cuenta para poder comprar</p>
      <Form
        inputs={[
          {
            type: "email",
            placeholder: "Ingrese email",
            label: "Correo Electronico",
            name: "Email",
          },
          {
            type: "password",
            label: "Contrasena",
            name: "Contrasena",
            placeholder: "Ingrese su contrasena",
          },
        ]}
        styleForm={styleForm}
        buttons={["Iniciar Sesión"]}
        styleButtons=""
      />
      <p>
        ¿No tienes cuenta? &nbsp;
        <a href="/Register" className="text-pink-700">
          Registrate aquí
        </a>
      </p>
    </>
  );
};
