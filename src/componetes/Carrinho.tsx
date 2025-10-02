import carrinho from "../assets/carrinho-de-compras.png";
import fechar from "../assets/botao-fechar.png";
import "../estilos/Carrinho.css";
import React, { useState } from "react";

export default function Carrinho() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="carrinho">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={carrinho} alt="Carrinho de Compras" />
      </button>

      {isOpen && (
        <>
          <div className="overlay">
            <div className="janela_carrinho">
            <div className="fechar_carrinho">
              <button onClick={() => setIsOpen(false)}>
                <img src={fechar} alt="Fechar Carrinho" />
              </button>
            </div>
            <div className="title_carrinho">
              <h2>Carrinho</h2>
            </div>
            <div className="itens_carrinho">
              <ul>
                <li>Feijoada - R$ 30,00</li>
                <li>Sushi - R$ 50,00</li>
                <li>Tacos - R$ 20,00</li>
              </ul>
              <div className="total_carrinho">
                <p>Total: R$ 100,00</p>
              </div>
              <div className="acoes_carrinho">
                <button>Finalizar Compra</button>
                <button onClick={() => setIsOpen(false)}>Continuar Comprando</button>
              </div>
            </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
