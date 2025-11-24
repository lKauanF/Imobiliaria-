import React from "react";
import "./CartaoImovel.css";

export function CartaoImovel({ imovel, aoClicar }) {
  return (
    <div
      className="cartao-imovel"
      onClick={() => aoClicar && aoClicar(imovel)}
    >
      <div className="cartao-imovel-imagem-container">
        <img
          src={imovel.imagem}
          alt={imovel.titulo}
          className="cartao-imovel-imagem"
        />

        <button
          className="cartao-favorito"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            // aqui depois dá para ligar com favorito real
          }}
        >
          {imovel.favorito ? "★" : "☆"}
        </button>
      </div>

      <div className="cartao-imovel-info">
        <div className="cartao-imovel-preco">
          R$ {imovel.preco.toLocaleString("pt-BR")}
        </div>

        <div className="cartao-imovel-titulo">{imovel.titulo}</div>

        <div className="cartao-imovel-endereco">{imovel.endereco}</div>

        <div className="cartao-imovel-detalhes">
          <span>{imovel.area} m²</span>
          <span>{imovel.quartos} quartos</span>
          <span>{imovel.banheiros} banheiros</span>
        </div>
      </div>
    </div>
  );
}
