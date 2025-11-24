import React, { useState } from "react";
import { PerfilCard } from "../../components/PerfilCard/PerfilCard";
import "./EscolherPerfil.css";

export function EscolherPerfil() {
  const [selected, setSelected] = useState(null);

  const handleConfirm = () => {
    console.log("Selecionado:", selected);
  };

  // Ícones SVG (convertidos para string para injetar no innerHTML)
  const iconCorretor = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 14.77v-7l-5.5-3.847L8 7.769v2.692H7V7.29l6.5-4.635L20 7.289v7.48zm-4.904-6.328h.808v-.808h-.808zm-2 0h.808v-.808h-.808zm2 2h.808v-.808h-.808zm-2 0h.808v-.808h-.808zm-5.692 8.212l7.565 2.207l5.989-1.85q-.03-.455-.272-.656q-.244-.201-.551-.201H14.39q-.634 0-1.15-.05t-1.055-.238l-2.19-.718l.338-.988l2.025.732q.482.183 1.096.22q.613.036 1.68.042q0-.468-.172-.756t-.493-.402l-5.754-2.112q-.057-.019-.106-.028t-.105-.01h-2.1zm-4 2.346v-8.154H8.48q.14 0 .288.032t.275.074l5.779 2.117q.537.204.924.733q.388.529.388 1.352h3q.904 0 1.384.565q.481.566.481 1.435v.615l-6.98 2.154l-7.616-2.22V21zm1-1h2v-6.154h-2z"/>
    </svg>
  `;

  const iconCliente = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill="currentColor" d="M2 3.5A1.5 1.5 0 0 1 4.915 3H16.5a1.5 1.5 0 0 1 .497 2.916L17 6v7a3 3 0 0 1-3 3H7a3 3 0 0 1-2-.764v2.014a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75zM16 13V6H5v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2M4 5h12.5a.5.5 0 0 0 0-1H4v-.5a.5.5 0 0 0-1 0V17h1zm3.5 4.955v2.55a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2.55a1 1 0 0 0-.336-.748l-2.332-2.07a.5.5 0 0 0-.664 0l-2.332 2.07a1 1 0 0 0-.336.748"/>
    </svg>
  `;

  return (
    <div className="profile-select-page">
      <h1 className="title">Escolha um perfil para continuar</h1>
      <p className="subtitle">Cada perfil oferece uma experiência única.</p>

      <div className="profile-options">
        <PerfilCard
          label="Corretor"
          icon={iconCorretor}
          selected={selected === "corretor"}
          onSelect={() => setSelected("corretor")}
        />

        <PerfilCard
          label="Cliente"
          icon={iconCliente}
          selected={selected === "cliente"}
          onSelect={() => setSelected("cliente")}
        />
      </div>

      <button className="btn" disabled={!selected} onClick={handleConfirm}>
        Vamos lá!
      </button>
    </div>
  );
}
