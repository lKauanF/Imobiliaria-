import React, { useState } from "react";
import "./BarraBusca.css";
import { ModalBusca } from "../Mobile/ModalBusca";

// recebe a prop onBuscar da Home
export function BarraBusca({ onBuscar }) {
  const [modalAberto, setModalAberto] = useState(false);

  function handleBuscarClick() {
    if (typeof onBuscar === "function") {
      onBuscar();
    }
  }

  return (
    <>
      {/* DESKTOP */}
      <div className="barra-busca">
        <div className="barra-busca-container">
          <div className="campo">
            <input placeholder="Localização" />
          </div>
          <div className="campo">
            <input placeholder="Orçamento" />
          </div>
          <div className="campo">
            <select>
              <option value="">Tipo de imóvel</option>
              <option value="casa">Casa</option>
              <option value="apto">Apartamento</option>
            </select>
          </div>

          <button
            className="btn-buscar"
            type="button"
            onClick={handleBuscarClick}
          >
            Buscar
          </button>
        </div>
      </div>

      {/* BOTÃO MOBILE */}
      <button
        className="btn-mobile-busca"
        onClick={() => setModalAberto(true)}
      >
        🔍
      </button>

      {/* MODAL MOBILE */}
      {modalAberto && (
        <ModalBusca
          aoFechar={() => setModalAberto(false)}
          // se você quiser que a busca do modal também abra os imóveis,
          // pode passar essa prop e usar dentro do ModalBusca
          onBuscar={onBuscar}
        />
      )}
    </>
  );
}
