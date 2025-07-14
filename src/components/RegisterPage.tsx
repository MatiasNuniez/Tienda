import React from "react";
import { Form } from "./Form";

export const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="grid bg-white rounded-md text-center gap-3 p-4">
        <h1 className="text-black font-semibold">Crear Cuenta</h1>
        <p className="text-slate-500 font-medium text-sm">
          Unete a nuestra tienda y descubre la mejor moda
        </p>
        <Form
          inputs={[
            {
              type: "text",
              placeholder: "Juan",
              label: "Nombre",
              name: "Nombre",
              classname: "col-span-1 ",
            },
            {
              type: "text",
              placeholder: "Perez",
              label: "Apellido",
              name: "Apellido",
              classname: "col-span-1 ",
            },
            {
              type: "email",
              placeholder: "tu@email.com",
              label: "Email",
              name: "email",
              classname: "col-span-2 ",
            },
            {
              type: "phone",
              placeholder: "+1 234 567 8900",
              label: "Telefono",
              name: "phone",
              classname: "col-span-2 ",
            },
            {
              type: "password",
              placeholder: "Minimo 8 caracteres",
              label: "Contrasena",
              name: "password",
              classname: "col-span-2 ",
            },
            {
              type: "password",
              placeholder: "",
              label: "Confirmar contrasena",
              name: "passwordConfirm",
              classname: "col-span-2",
            },
          ]}
          buttons={["Crear cuenta"]}
          styleForm="grid grid-cols-2 grid-rows-5 gap-6"
          styleButtons="col-span-2 bg-rose-600 p-3 rounded-md"
        />
        <p className="text-slate-500 font-medium text-sm">
          ¿Ya tienes cuenta? &nbsp;
          <a href="/Login" className="text-rose-500">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
};
