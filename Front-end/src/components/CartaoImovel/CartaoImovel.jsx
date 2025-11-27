import React from "react";
import "./CartaoImovel.css";

// ajuste os caminhos para o seu assets
import Heart from "../../assets/icons/heart.svg";
import Love from "../../assets/icons/love.svg";


export function CartaoImovel({ imovel, aoClicar }) {
  function handleClick() {
    if (aoClicar) {
      aoClicar(imovel);
    }
  }

  function handleFavoritoClick(event) {
    event.stopPropagation();
    // aqui depois você liga com a action real de favorito
  }

  function handleVerMaisClick(event) {
    event.stopPropagation();
    if (aoClicar) {
      aoClicar(imovel);
    }
  }

  const favoritoIcon = imovel.favorito ? Love : Heart;

  return (
    <div className="cartao-imovel" onClick={handleClick}>
      {/* Thumb à esquerda */}
      <div className="cartao-imovel-thumb">
        <img src={imovel.imagem} alt={imovel.titulo} />
      </div>

      {/* Conteúdo à direita */}
      <div className="cartao-imovel-conteudo">
        <div className="cartao-imovel-header">
          <div className="cartao-imovel-textos">
          
            <div className="cartao-imovel-titulo">{imovel.titulo}</div>
          </div>

          <button
            type="button"
            className={`cartao-favorito ${
              imovel.favorito ? "cartao-favorito-ativo" : ""
            }`}
            onClick={handleFavoritoClick}
            aria-label="Favoritar imóvel"
          >
            <img
              src={favoritoIcon}
              alt={imovel.favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              className="cartao-favorito-icone"
            />
          </button>
        </div>

        <div className="cartao-imovel-endereco">{imovel.endereco}</div>

        <div className="cartao-imovel-footer">
          <div className="cartao-imovel-metas">
            <span>{imovel.area} m²</span>
            <span>{imovel.quartos} quartos</span>
            <span>{imovel.banheiros} banheiros</span>
          </div>

          <button
            type="button"
            className="cartao-imovel-botao"
            onClick={handleVerMaisClick}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}
