import React, { useState } from "react";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";

interface LoginI {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<LoginI>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="grid grid-rows-[auto_1fr_auto] bg-white rounded-md text-center p-6 w-full max-w-md gap-6 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
          <p className="text-sm font-semibold text-slate-500">
            Ingresa a tu cuenta para poder comprar
          </p>
        </div>
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
          styleForm="grid grid-cols-1 grid-rows-2 gap-y-4"
          buttons={["Iniciar Sesión"]}
          styleButtons="bg-rose-600 p-3 rounded-md font-semibold text-white hover:bg-rose-700 transition-colors"
          onChange={handleChange}
        />
        <p className="text-slate-500 font-medium text-sm">
          ¿No tienes cuenta?{" "}
          <button
            onClick={() => navigate("/Register")}
            className="text-rose-500 font-semibold hover:text-rose-600 hover:cursor-pointer"
          >
            Registrate aquí
          </button>
        </p>
      </div>
    </div>
  );
};
