import React from "react";
import "./EstatisticasImovel.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function EstatisticasImovel({ imovel, aoFechar }) {
  if (!imovel) return null;

  // Dados mockados de histórico de preço (só para protótipo)
  const historicoPreco = imovel.historicoPreco || [
    { mes: "Jan", valor: imovel.preco * 0.92 },
    { mes: "Fev", valor: imovel.preco * 0.94 },
    { mes: "Mar", valor: imovel.preco * 0.96 },
    { mes: "Abr", valor: imovel.preco * 0.98 },
    { mes: "Mai", valor: imovel.preco * 1.0 },
  ];

  // Mock de valorização média
  const valorizacao = imovel.valorizacao || {
    percentual: 12,
    periodo: "últimos 5 anos",
    comparacaoCidade: "+3.5% acima da média da cidade",
  };

  // Mock de serviços e comodidades
  const servicos = imovel.servicos || [
    "Mercado a menos de 500m",
    "Escola particular a 800m",
    "Linha de ônibus a 200m",
    "Parque e área verde próximos",
    "Farmácia em até 400m",
  ];

  return (
    <aside className="painel-estatisticas">
      <div className="painel-estatisticas-cabecalho">
        <div>
          <div className="painel-estatisticas-label">Imóvel selecionado</div>
          <h2 className="painel-estatisticas-titulo">{imovel.titulo}</h2>
          <p className="painel-estatisticas-endereco">{imovel.endereco}</p>
        </div>

        <button
          className="painel-estatisticas-fechar"
          type="button"
          onClick={aoFechar}
        >
          ×
        </button>
      </div>

      <div className="painel-estatisticas-preco">
        <span className="painel-estatisticas-preco-label">Preço atual</span>
        <span className="painel-estatisticas-preco-valor">
          R$ {imovel.preco.toLocaleString("pt-BR")}
        </span>
      </div>

      {/* Histórico de Preço */}
      <section className="painel-estatisticas-bloco">
        <div className="painel-estatisticas-bloco-header">
          <h3>Histórico de preço</h3>
          <span className="painel-estatisticas-bloco-subtitulo">
            Evolução nos últimos meses
          </span>
        </div>

        <div className="painel-estatisticas-grafico">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={historicoPreco}>
              <XAxis dataKey="mes" />
              <YAxis
                tickFormatter={(v) =>
                  `R$ ${(v / 1000).toFixed(0)} mil`
                }
              />
              <Tooltip
                formatter={(value) =>
                  `R$ ${Number(value).toLocaleString("pt-BR")}`
                }
              />
              <Line
                type="monotone"
                dataKey="valor"
                stroke="#3ea0e1"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Valorização média da região */}
      <section className="painel-estatisticas-bloco">
        <div className="painel-estatisticas-bloco-header">
          <h3>Valorização média da região</h3>
          <span className="painel-estatisticas-bloco-subtitulo">
            Comportamento de preço no entorno
          </span>
        </div>

        <div className="painel-estatisticas-card-valorizacao">
          <div className="painel-estatisticas-valorizacao-percentual">
            {valorizacao.percentual}%
          </div>
          <div className="painel-estatisticas-valorizacao-detalhes">
            <p>{valorizacao.periodo}</p>
            <p className="painel-estatisticas-valorizacao-comparacao">
              {valorizacao.comparacaoCidade}
            </p>
          </div>
        </div>
      </section>

      {/* Serviços e comodidades */}
      <section className="painel-estatisticas-bloco">
        <div className="painel-estatisticas-bloco-header">
          <h3>Serviços e comodidades</h3>
          <span className="painel-estatisticas-bloco-subtitulo">
            O que existe próximo ao imóvel
          </span>
        </div>

        <ul className="painel-estatisticas-lista-servicos">
          {servicos.map((servico, i) => (
            <li key={i} className="painel-estatisticas-item-servico">
              <span className="painel-estatisticas-bolinha" />
              <span>{servico}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
