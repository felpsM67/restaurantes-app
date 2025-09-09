import React from "react";
import adicionarPrato from "../assets/imagem_adicionar_prato.jpg";
import { Link } from "react-router-dom";
import "../estilos/CardNovoPrato.css";

const CardNovoPrato = () => {

  return (
    <Link to="/cadastro-prato" className="link-card">
        <img src={adicionarPrato} className="image-novo-prato" alt="Imagem do prato" />
        <h2>Clique aqui para adicionar um novo prato</h2>
    </Link>
  );
};

export default CardNovoPrato;
