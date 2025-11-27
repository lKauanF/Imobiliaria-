import React from "react";
import "./CartaoImovel.css";

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

  // monta as características e limita para 2
  const caracteristicas = [
    imovel.quartos != null ? `${imovel.quartos} quartos` : null,
    imovel.banheiros != null ? `${imovel.banheiros} banheiros` : null,
    imovel.area != null ? `${imovel.area} m²` : null,
    // se depois tiver garagem/vagas:
    // imovel.vagas != null ? `${imovel.vagas} vagas` : null,
  ].filter(Boolean); // remove null/undefined

  const caracteristicasVisiveis = caracteristicas.slice(0, 2);

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
            {/* se quiser voltar com o preço, é só descomentar */}
            {/* <div className="cartao-imovel-preco">
              R$ {imovel.preco.toLocaleString("pt-BR")}
            </div> */}
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
              alt={
                imovel.favorito
                  ? "Remover dos favoritos"
                  : "Adicionar aos favoritos"
              }
              className="cartao-favorito-icone"
            />
          </button>
        </div>

        <div className="cartao-imovel-endereco">{imovel.endereco}</div>

        <div className="cartao-imovel-footer">
          <div className="cartao-imovel-metas">
            {caracteristicasVisiveis.map((texto, index) => (
              <span key={index}>{texto}</span>
            ))}
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
