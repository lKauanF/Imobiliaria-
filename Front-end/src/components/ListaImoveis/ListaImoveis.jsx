import React, { useState } from "react";
import "./ListaImoveis.css";
import { CartaoImovel } from "../CartaoImovel/CartaoImovel";

export function ListaImoveis({ resultados, aoSelecionarImovel }) {
  const [filtroQuartos, setFiltroQuartos] = useState("");
  const [filtroEstilo, setFiltroEstilo] = useState("");

  const filtrados = resultados.filter((imovel) => {
    if (filtroQuartos && imovel.quartos !== Number(filtroQuartos)) {
      return false;
    }
    if (filtroEstilo && imovel.estilo !== filtroEstilo) {
      return false;
    }
    return true;
  });

  return (
    <div className="lista-imoveis">
      <div className="lista-imoveis-topo">
        <h2 className="lista-imoveis-titulo">
          {filtrados.length} imóveis encontrados
        </h2>

        <div className="lista-imoveis-filtros">
          <select
            value={filtroQuartos}
            onChange={(e) => setFiltroQuartos(e.target.value)}
          >
            <option value="">Quartos</option>
            <option value="1">1 quarto</option>
            <option value="2">2 quartos</option>
            <option value="3">3 quartos</option>
          </select>

          <select
            value={filtroEstilo}
            onChange={(e) => setFiltroEstilo(e.target.value)}
          >
            <option value="">Estilo</option>
            <option value="moderno">Moderno</option>
            <option value="classico">Clássico</option>
            <option value="luxo">Luxo</option>
          </select>
        </div>
      </div>

      <div className="lista-imoveis-grid">
        {filtrados.map((imovel) => (
          <CartaoImovel
            key={imovel.id}
            imovel={imovel}
            aoClicar={aoSelecionarImovel}
          />
        ))}
      </div>
    </div>
  );
}
