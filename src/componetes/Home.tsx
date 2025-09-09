import React, { useContext } from "react";
import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import { AuthContext } from "../context/authContext";
import HomeCard from "./HomeCard";
import HomeAdmin from "./HomeAdmin";

function Home() {
  const [prato, setPrato] = React.useState({
    nome: "Feijoada",
    cozinha: "Brasileira",
    descricaoCurta:
      "Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.",
    imagem:
      "https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=",
  });

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext não está disponível");
  }

  const { usuario, verificarLogin } = authContext;

  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
        {usuario?.role === "Gerente" ? (
          <div className="content-body">
            <HomeAdmin />
          </div>
        ) : (
          <HomeCard prato={prato} usuario={usuario} />
        )}
      </div>
    </div>
  );
}

export default Home;
