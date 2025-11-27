import React, { useState } from "react";
import "./Home.css";

import { Cabecalho } from "../../components/Cabecalho/Cabecalho";
import { BarraBusca } from "../../components/BarraBusca/BarraBusca";
import { BarraLateral } from "../../components/BarraLateral/BarraLateral";
import { Mapa } from "../../components/Mapa/Mapa";
import { ListaImoveis } from "../../components/ListaImoveis/ListaImoveis";
import { EstatisticasImovel } from "../../components/EstatisticasImovel/EstatisticasImovel";

export function Home() {
  const [pesquisou, setPesquisou] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const MOCK_IMOVEIS = [
    {
      id: 1,
      titulo: "Apartamento moderno no Setor Bueno",
      endereco: "Rua X, Setor Bueno - Goiânia, GO",
      preco: 520000,
      area: 78,
      quartos: 2,
      banheiros: 2,
      estilo: "moderno",
      favorito: false,
      imagem:
        "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      titulo: "Casa ampla em condomínio fechado",
      endereco: "Alameda Y, Residencial Z - Goiânia, GO",
      preco: 980000,
      area: 210,
      quartos: 3,
      banheiros: 3,
      estilo: "luxo",
      favorito: true,
      imagem:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

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
