import React from "react";
import "./ModalBusca.css";

export function ModalBusca({ aoFechar }) {
  return (
    <div className="modal-busca-overlay">
      <div className="modal-busca">
        <button className="modal-fechar" onClick={aoFechar}>
          ×
        </button>

        <h2 className="modal-titulo">Filtros de busca</h2>

        <div className="modal-campo">
          <label>Localização</label>
          <input placeholder="Ex: Goiânia" />
        </div>

        <div className="modal-campo">
          <label>Orçamento</label>
          <input placeholder="Ex: R$ 450.000" />
        </div>

        <div className="modal-campo">
          <label>Tipo de Imóvel</label>
          <select>
            <option value="">Selecione...</option>
            <option value="casa">Casa</option>
            <option value="apto">Apartamento</option>
          </select>
        </div>

        <button className="modal-botao-buscar">Buscar</button>
      </div>
    </div>
  );
}
