
import React, { useState } from "react";
import api from "../services/api";
import "../estilos/FormularioPrato.css";

const FormularioPrato: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    valor: "",
    Imagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dados = {
        ...form,
        valor: parseFloat(form.valor), 
      };
      await api.post("/", dados);
      alert("Prato cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar prato:", error);
      alert("Erro ao cadastrar prato.");
    }
  };
  

  return (
    <div className="form-container">
      <h1>Cadastro de Pratos</h1>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" onChange={handleChange} />
        <input name="cozinha" placeholder="Cozinha" onChange={handleChange} />
        <input name="descricao_resumida" placeholder="Descrição resumida" onChange={handleChange} />
        <input name="descricao_detalhada" placeholder="Descrição detalhada" onChange={handleChange} />
        <input name="valor" placeholder="Valor" onChange={handleChange} />
        <input name="imagem" placeholder="URL da imagem" onChange={handleChange} />
        <button type="submit">Cadastrar Prato</button>
      </form>
    </div>
  );
};

export default FormularioPrato;
