
import React, { use, useState, useEffect,  } from "react";
import api from "../services/api";
import "../estilos/FormularioPrato.css";
import { useNavigate, useParams } from "react-router-dom";


interface FormularioPratoProps {
  isEditing?: boolean;
}

const FormularioPrato: React.FC <FormularioPratoProps> = ({isEditing}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    valor: 0,
    imagem: "",
  });


const { id } = useParams<{ id: string }>();

useEffect(() => {

  if (isEditing && id) {
    api.get(`/pratos/${id}`).then((response) => {
      const prato = response.data;
      setForm({
        nome: prato.nome,
        cozinha: prato.cozinha,
        descricao_resumida: prato.descricao_resumida,
        descricao_detalhada: prato.descricao_detalhada,
        valor: prato.valor,
        imagem: prato.imagem,
      });
    });
  }
}, [isEditing, id]); 

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dados = {
        ...form,
        valor: Number(form.valor),
      };
  
      if (isEditing && id) {
        await api.put(`/pratos/${id}`, dados);
        navigate('/')
      } else {
        await api.post("/pratos", dados);
        alert("Prato cadastrado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar prato:", error);
      alert("Erro ao salvar prato.");
    }
  };
  
  

  return (
    <div className="form-container">
      <h1>Cadastro de Pratos</h1>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input name="cozinha" placeholder="Cozinha"value={form.cozinha} onChange={handleChange} />
        <input name="descricao_resumida" placeholder="Descrição resumida"value={form.descricao_resumida} onChange={handleChange} />
        <input name="descricao_detalhada" placeholder="Descrição detalhada" value={form.descricao_detalhada} onChange={handleChange} />
        <input name="valor" placeholder="Valor" value={form.valor} onChange={handleChange} />
        <input name="imagem" placeholder="URL da imagem" value={form.imagem} onChange={handleChange} />
        <button type="submit">Cadastrar Prato</button>
      </form>
    </div>
  );
};

export default FormularioPrato;
