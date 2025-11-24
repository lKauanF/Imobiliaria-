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
  const [showModal, setShowModal] = useState(true);

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

  return (
    <div className="pagina-home">
      <Cabecalho />
      <BarraLateral />

      <div className="home-top">
        <BarraBusca onBuscar={handleBuscar} />
      </div>

      <div
        className={`home-layout ${
          pesquisou ? "com-resultados" : "sem-resultados"
        }`}
      >
        <div className="home-mapa">
          <Mapa />
        </div>

        {pesquisou && (
          <div className="home-lista">
            <ListaImoveis resultados={MOCK_IMOVEIS} />
          </div>
        )}
      
        </div>
      
    </div>
  );
}
