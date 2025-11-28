import React, { useState } from "react";
import "./Home.css";

import { Cabecalho } from "../../components/Cabecalho/Cabecalho";
import { BarraBusca } from "../../components/BarraBusca/BarraBusca";
import { BarraLateral } from "../../components/BarraLateral/BarraLateral";
import { Mapa } from "../../components/Mapa/Mapa";
import { ListaImoveis } from "../../components/ListaImoveis/ListaImoveis";
import { EstatisticasImovel } from "../../components/EstatisticasImovel/EstatisticasImovel";

// importa os mocks de outro arquivo
import { MOCK_IMOVEIS } from "../../mocks/mockImoveis";

export function Home() {
  const [pesquisou, setPesquisou] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  function handleBuscar() {
    setPesquisou(true);
  }

  function handleSelecionarImovel(imovel) {
    setSelectedProperty(imovel);
  }

  function handleFecharLista() {
    setPesquisou(false);
    setSelectedProperty(null);
  }

  return (
    <div className="pagina-home">
      <Cabecalho />
      <BarraLateral />

      <div
        className={`home-layout ${
          pesquisou ? "com-resultados" : "sem-resultados"
        } ${selectedProperty ? "com-estatisticas" : ""}`}
      >
        {/* COLUNA 1: MAPA + BARRA DE BUSCA SOBREPOSTA */}
        <div className="home-col-mapa">
          <BarraBusca onBuscar={handleBuscar} />
          <Mapa />
        </div>

        {/* COLUNA 2: LISTA DE IMÓVEIS (apenas após busca) */}
        {pesquisou && (
          <div className="home-col-lista">
            <ListaImoveis
              resultados={MOCK_IMOVEIS}
              aoSelecionarImovel={handleSelecionarImovel}
              aoFecharLista={handleFecharLista}
            />
          </div>
        )}

        {/* COLUNA 3: ESTATÍSTICAS (apenas após selecionar um imóvel) */}
        {selectedProperty && (
          <aside className="home-col-estatisticas">
            <EstatisticasImovel imovel={selectedProperty} />
          </aside>
        )}
      </div>
    </div>
  );
}
