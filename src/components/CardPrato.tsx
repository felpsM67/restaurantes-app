import React, { useEffect, useState } from "react";
import api from "../services/api";
import "../estilos/CardPrato.css";
import CardNovoPrato from "./CardNovoPrato";
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/banner.png";

const CardPrato = () => {
  const [pratos, setPratos] = useState<any[]>([]);
  const [menuAberto, setMenuAberto] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/pratos")
      .then((res) => setPratos(res.data))
      .catch((err) => console.error("Erro ao buscar pratos:", err));
  }, []);

  const toggleMenu = (id: number) => {
    setMenuAberto(menuAberto === id ? null : id);
  };

  const editarPrato = (id: number) => {
    navigate(`/editar-prato/${id}`);
  };

  const deletarPrato = async (id: number) => {
    if (window.confirm("Tem certeza que deseja deletar este prato?")) {
      try {
        await api.delete(`/pratos/${id}`);
        setPratos(pratos.filter((p) => p.id !== id));
      } catch (error) {
        console.error("Erro ao deletar prato:", error);
        alert("Erro ao deletar prato.");
      }
    }
  };

  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Banner de comidas brasileiras" />
      </div>

      <CardNovoPrato />

      <div className="CardPrato">
        {pratos.map((item) => (
          <div key={item.id} className="prato-card">
            <div className="menu-wrapper">
              <button onClick={() => toggleMenu(item.id)} className="menu-button">⋮</button>
              {menuAberto === item.id && (
                <div className="menu-opcoes">
                  <button onClick={() => editarPrato(item.id)}>Editar</button>
                  <button onClick={() => deletarPrato(item.id)}>Deletar</button>
                </div>
              )}
            </div>

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
