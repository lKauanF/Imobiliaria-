import React, { useState, useRef } from "react";
import "./BarraLateral.css";

export function BarraLateral() {
  const [aberta, setAberta] = useState(false);
  const refSidebar = useRef(null);

  // Aqui depois você troca os emojis pelos ícones reais (SVGs)
  const itens = [
    { id: 1, icon: "🏡", label: "Início", active: true },
    { id: 2, icon: "❄️", label: "Climatização", active: false },
    { id: 3, icon: "💬", label: "Chat", active: false },
    { id: 4, icon: "📦", label: "Serviços", active: false },
    { id: 5, icon: "💗", label: "Favoritos", active: false },
  ];

  function toggleSidebar() {
    setAberta((prev) => !prev);
  }

  function closeSidebar() {
    setAberta(false);
  }

  return (
    <>
      {/* Botão sanduíche fixo no topo (web + mobile) */}
      <button
        className="botao-menu-mobile"
        onClick={toggleSidebar}
        aria-label="Abrir menu lateral"
      >
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
        </svg>
      </button>

      {/* Sidebar principal */}
      <aside
        className={`barra-lateral ${aberta ? "aberta" : ""}`}
        ref={refSidebar}
      >
        <div className="barra-lateral-topo">
         
          {/* Lista de ícones */}
          <nav className="barra-lateral-itens">
            {itens.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`barra-lateral-item ${
                  item.active ? "ativo" : ""
                }`}
              >
                <span className="barra-lateral-icone">{item.icon}</span>
                <span className="barra-lateral-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Rodapé: colapsar + logout (logout aparece quando aberta) */}
        <div className="barra-lateral-base">

          <button
            type="button"
            className="botao-logout"
            onClick={() => {
              // aqui depois você chama sua função de logout real
              console.log("logout");
              closeSidebar();
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay só no mobile quando aberta */}
      {aberta && (
        <div
          className="overlay-mobile"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}
