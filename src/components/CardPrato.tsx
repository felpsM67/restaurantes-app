import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../estilos/CardPrato.css";
import CardNovoPrato from "./CardNovoPrato";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";

const CardPrato = () => {
  const [pratos, setPratos] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("/pratos")
      .then((res) => setPratos(res.data))
      .catch((err) => console.error("Erro ao buscar pratos:", err));
  }, []);

  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Banner de comidas brasileiras" />
      </div>

      <CardNovoPrato />

      <div className="CardPrato">
        {pratos.map((item, index) => (
          <div key={index} className="prato-card">
            <img src={item.imagem} alt={`Imagem de ${item.nome}`} />
            <h2 className="nome-prato">{item.nome}</h2>
            <p className="cozinha-prato">{item.cozinha}</p>
            <p className="descricao-curta-prato">{item.descricao_resumida}</p>
            <Link to={`/detalhes-prato/${item.id}`} className="btn">
              Descrição
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPrato;
