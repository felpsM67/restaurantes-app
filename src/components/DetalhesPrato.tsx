
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../estilos/DetalhesPrato.css";

function DetalhesPrato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prato, setPrato] = useState<any>(null);

  useEffect(() => {
    api.get(`/pratos/${id}`)
      .then((res) => setPrato(res.data))
      .catch((err) => {
        console.error("Erro ao buscar prato:", err);
        alert("Prato não encontrado.");
        navigate("/");
      });
  }, [id, navigate]);

  if (!prato) return <p>Carregando...</p>;

  return (
    <div className="detalhes-prato">
      <div className="detalhes-prato-card">
        <div className="detalhes-prato-card-header">
          <img src={prato.imagem} alt={`Imagem de ${prato.nome}`} />
          <div className="detalhes-prato-card-header-texto">
            <h1>{prato.nome}</h1>
            <p><strong>Cozinha:</strong> {prato.cozinha}</p>
            <p><strong>Valor:</strong> R${prato.valor.toFixed(2)}</p>
          </div>
        </div>
        <p>
          <strong>Descrição da sua experiência Gastronômica:</strong><br />
          {prato.descricao_detalhada}
        </p>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </div>
  );
}

export default DetalhesPrato;
