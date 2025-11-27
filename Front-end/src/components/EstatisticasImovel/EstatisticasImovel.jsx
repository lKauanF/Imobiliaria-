import React from "react";
import "./EstatisticasImovel.css";

// por enquanto só usamos os dados básicos do imóvel para exibir o título
export function EstatisticasImovel({ imovel }) {
  if (!imovel) {
    return (
      <div className="estatisticas-container estatisticas-container-empty">
        <p>Selecione um imóvel para ver as estatísticas.</p>
      </div>
    );
  }

  return (
    <div className="estatisticas-container">
      <h3 className="estatisticas-title">Estatísticas do imóvel</h3>
      <p className="estatisticas-subtitle">{imovel.titulo}</p>

      <div className="estatisticas-grid">
        {/* Card 1 - Histórico de preço */}
        <section className="estatistica-card">
          <div className="estatistica-card-header">
            <h4>Histórico de preço do imóvel</h4>
            <span className="estatistica-card-tag">Últimos 12 meses</span>
          </div>

          <div className="estatistica-chart-placeholder">
            <span>Gráfico de linha aqui</span>
          </div>
        </section>

        {/* Card 2 - Variação média da região */}
        <section className="estatistica-card">
          <div className="estatistica-card-header">
            <h4>Variação média da região</h4>
            <span className="estatistica-card-tag">Preço por m²</span>
          </div>

          <div className="estatistica-chart-placeholder">
            <span>Gráfico de barras aqui</span>
          </div>
        </section>

        {/* Card 3 - Serviços e infraestrutura */}
        <section className="estatistica-card">
          <div className="estatistica-card-header">
            <h4>Serviço e infraestrutura</h4>
          </div>

          <ul className="estatistica-servicos-lista">
            <li>
              <span className="servico-label">Supermercado</span>
              <span className="servico-valor">750 m</span>
            </li>
            <li>
              <span className="servico-label">Escola</span>
              <span className="servico-valor">850 m</span>
            </li>
            <li>
              <span className="servico-label">Hospital</span>
              <span className="servico-valor">1,2 km</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
