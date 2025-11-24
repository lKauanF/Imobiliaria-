import React, { useState, useEffect, useRef } from "react";
import "./BarraLateral.css";

export function BarraLateral() {
  const [aberta, setAberta] = useState(false);
  const refSidebar = useRef(null);

  const itens = [
    { id: 1, icone: "🏡" },
    { id: 2, icone: "❄️" },
    { id: 3, icone: "💬" },
    { id: 4, icone: "📦" },
    { id: 5, icone: "💗" },
  ];

  // Fechar ao clicar fora (mobile)
  useEffect(() => {
    function handle(e) {
      if (aberta && refSidebar.current && !refSidebar.current.contains(e.target)) {
        setAberta(false);
      }
    }
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, [aberta]);

  return (
    <>
      {/* BOTÃO MOBILE — aparece só no mobile */}
      <button
        className="botao-menu-mobile"
        onClick={() => setAberta(true)}
        aria-label="Abrir menu"
      >
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
        </svg>
      </button>

      {/* SIDEBAR — idêntica ao layout */}
      <aside
        className={`barra-lateral ${aberta ? "aberta" : ""}`}
        ref={refSidebar}
      >
        {/* Botão do sanduíche dentro do container */}
        <button
          className="botao-menu-desktop"
          onClick={() => setAberta(!aberta)}
          aria-label="Menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </button>

        <nav className="barra-lateral-itens">
          {itens.map((item) => (
            <div className="barra-lateral-item" key={item.id}>
              {item.icone}
            </div>
          ))}
        </nav>
      </aside>

      {/* overlay mobile */}
      {aberta && <div className="overlay-mobile" />}
    </>
  );
}
