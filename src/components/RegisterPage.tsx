import React, { useState } from "react";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";

interface RegisterI {
  nombre: string;
  apellido: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerData, setregisterData] = useState<RegisterI>({
    apellido: "",
    email: "",
    nombre: "",
    password: "",
    passwordConfirm: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setregisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="grid grid-rows-[auto_1fr_auto] bg-white rounded-md text-center p-6 w-full max-w-md gap-6">
        <div>
          <h1 className="text-black font-bold text-3xl mb-2">Crear Cuenta</h1>
          <p className="text-slate-500 font-medium text-sm">
            Únete a nuestra tienda y descubre la mejor moda
          </p>
        </div>

        <Form
          inputs={[
            {
              type: "text",
              placeholder: "Juan",
              label: "Nombre",
              name: "nombre",
              classname: "col-span-1",
            },
            {
              type: "text",
              placeholder: "Perez",
              label: "Apellido",
              name: "apellido",
              classname: "col-span-1",
            },
            {
              type: "email",
              placeholder: "tu@email.com",
              label: "Email",
              name: "email",
              classname: "col-span-2",
            },
            {
              type: "phone",
              placeholder: "+1 234 567 8900",
              label: "Teléfono",
              name: "phone",
              classname: "col-span-2",
            },
            {
              type: "password",
              placeholder: "Mínimo 8 caracteres",
              label: "Contraseña",
              name: "password",
              classname: "col-span-2",
            },
            {
              type: "password",
              placeholder: "Confirma tu contraseña",
              label: "Confirmar contraseña",
              name: "passwordConfirm",
              classname: "col-span-2",
            },
          ]}
          buttons={["Crear cuenta"]}
          styleForm="grid grid-cols-2 gap-4"
          styleButtons="col-span-2 bg-rose-600 p-3 rounded-md font-semibold text-white hover:bg-rose-700 transition-colors"
          onChange={handleChange}
        />

        <p className="text-slate-500 font-medium text-sm">
          ¿Ya tienes cuenta?{" "}
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="text-rose-500 hover:text-rose-600 hover:cursor-pointer"
          >
            Inicia sesión aquí
          </button>
        </p>
      </div>
    </div>
  );
};
