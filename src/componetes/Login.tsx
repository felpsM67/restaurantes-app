import React, { useState } from "react";
import useForm from "../hooks/useForm";
// import { useNavigate } from "react-router-dom";
import "../estilos/index.css";
import Input from "./Input";

interface SnackbarState {
  message: string;
  type?: "success" | "error" | "warning" | "info"; // Torna o tipo opcional
  duration: number;
}

export default function Login() {
  const { values, errors, handleChange, validate } = useForm({
    email: "",
    senha: "",
  });

  const [snackbar, setSnackbar] = useState<SnackbarState>({
    message: "",
    type: "success",
    duration: 0,
  });

  // const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Input
          placeholder="Email"
          errorMessage={errors.email}
          value={values.email}
          type="text"
          onChange={handleChange("email")}
        />
        <div className="w-full mb-4">
          <input
            type="password"
            placeholder="Senha"
            value={values.senha}
            onChange={handleChange("senha")}
            className={`w-full p-2 border rounded ${
              errors.senha
                ? "border-red-500"
                : values.senha
                ? "border-blue-500"
                : "border-gray-300"
            }`}
          />
          {errors.senha && <p>{errors.senha}</p>}
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={() => {}}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
