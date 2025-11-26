import React, { useState } from "react";
import "./BarraLateral.css";

/*
  Ajuste os imports abaixo para bater com seus arquivos reais.
  Exemplo: se seus arquivos estiverem em /src/assets/icons/...
*/
import Home from "../../assets/icons/home.svg";
import Estrela from "../../assets/icons/estrela.svg";
import Like from "../../assets/icons/like.svg";
import Catalogo from "../../assets/icons/catalogo.svg";
import Love from "../../assets/icons/love.svg";
import IconLogout from "../../assets/icons/logout.svg";

export function BarraLateral() {
  const [aberta, setAberta] = useState(false);

  const itens = [
    { id: 1, icon: Home, label: "Início", active: true },
    { id: 2, icon: Estrela, label: "IA", active: false },
    { id: 3, icon: Catalogo, label: "Catalogo", active: false },
    { id: 4, icon: Like, label: "Gostei", active: false },
    { id: 5, icon: Love, label: "Favoritos", active: false },
  ];

  function alternarSidebar() {
    setAberta((prev) => !prev);
  }

  function fecharSidebar() {
    setAberta(false);
  }

  function handleLogout() {
    // Aqui você chama seu fluxo real de logout
    console.log("logout");
    fecharSidebar();
  }

  return (
    <>
      {/* Botão de hambúrguer ALINHADO AO HEADER (fixo no topo) */}
      <button
        className="botao-menu-header"
        onClick={alternarSidebar}
        aria-label="Abrir menu lateral"
      >
        <span className="botao-menu-header-linha" />
        <span className="botao-menu-header-linha" />
        <span className="botao-menu-header-linha" />
      </button>

      {/* SIDEBAR ao lado do mapa */}
      <aside className={`barra-lateral ${aberta ? "aberta" : ""}`}>
        <div className="barra-lateral-topo">
          <nav className="barra-lateral-itens">
            {itens.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`barra-lateral-item ${
                  item.active ? "ativo" : ""
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="barra-lateral-icone-img"
                />
                <span className="barra-lateral-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Espaço fixo para o logout (mesmo quando fechada) */}
        <div className="barra-lateral-base">
          <button
            type="button"
            className="botao-logout"
            onClick={handleLogout}
          >
            <img
              src={IconLogout}
              alt="Logout"
              className="botao-logout-icone"
            />
            <span className="botao-logout-label">Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay só no mobile quando aberta */}
      {aberta && (
        <div
          className="overlay-mobile"
          onClick={fecharSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}
