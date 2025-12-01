import React from "react";
import "./EstatisticasImovel.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

// dados mockados para o gráfico de linha (histórico de preço)
const priceHistoryData = [
  { mes: "Fev", valor: 520000 },
  { mes: "Abr", valor: 530000 },
  { mes: "Jun", valor: 540000 },
  { mes: "Jul", valor: 550000 },
  { mes: "Set", valor: 560000 },
  { mes: "Out", valor: 565000 },
  { mes: "Dez", valor: 570000 },
];

// dados mockados para o gráfico de barras (região)
const regionPriceData = [
  { categoria: "Bairro", valor: 580000 },
  { categoria: "Cidade", valor: 560000 },
  { categoria: "Estado", valor: 540000 },
];

// ticks mais “limpos” para o eixo Y (3 valores)
const PRICE_TICKS_HISTORY = [520000, 545000, 570000];
const PRICE_TICKS_REGION = [520000, 550000, 580000];

function formatValorEixo(valor) {
  // transforma 520000 -> "R$ 520k"
  return `R$ ${(valor / 1000).toFixed(0)}k`;
}

function formatTooltipCurrency(valor) {
  return `R$ ${valor.toLocaleString("pt-BR")}`;
}

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
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceHistoryData} margin={{ top: 8, right: 16, left: 0, bottom: 16 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="mes"
                  tick={{ fontSize: 10, fill: "var(--cor-preto-50)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  ticks={PRICE_TICKS_HISTORY}
                  tickFormatter={formatValorEixo}
                  tick={{ fontSize: 10, fill: "var(--cor-preto-50)" }}
                  axisLine={false}
                  tickLine={false}
                  width={52}
                />
                <Tooltip
                  formatter={(value) => formatTooltipCurrency(value)}
                  labelFormatter={(label) => `Mês: ${label}`}
                />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="#063045"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Card 2 - Variação média da região */}
        <section className="estatistica-card">
          <div className="estatistica-card-header">
            <h4>Variação média da região</h4>
            <span className="estatistica-card-tag">Preço por m²</span>
          </div>

          <div className="estatistica-chart-placeholder">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={regionPriceData}
                margin={{ top: 8, right: 16, left: 0, bottom: 16 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="categoria"
                  tick={{ fontSize: 10, fill: "var(--cor-preto-50)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  ticks={PRICE_TICKS_REGION}
                  tickFormatter={formatValorEixo}
                  tick={{ fontSize: 10, fill: "var(--cor-preto-50)" }}
                  axisLine={false}
                  tickLine={false}
                  width={52}
                />
                <Tooltip
                  formatter={(value) => formatTooltipCurrency(value)}
                  labelFormatter={(label) => label}
                />
                <Bar dataKey="valor" fill="#063045" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
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
