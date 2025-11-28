import React, { useState, useEffect } from "react";
import "./BarraBusca.css";
import { ModalBusca } from "../Mobile/ModalBusca";

// recebe a prop onBuscar da Home
export function BarraBusca({ onBuscar }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Localização");

  // animação de "digitar" no placeholder
  useEffect(() => {
    const phrases = [
      "Ex: Setor Bueno, Goiânia",
      "Ex: Casa com 3 quartos",
      "Ex: Próximo ao Parque Flamboyant",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function typeLoop() {
      const currentPhrase = phrases[phraseIndex];

      if (!deleting) {
        // digitando
        const nextText = currentPhrase.slice(0, charIndex + 1);
        setPlaceholderText(nextText);
        charIndex += 1;

        if (charIndex === currentPhrase.length) {
          // chegou no fim, espera um pouco e começa a apagar
          deleting = true;
          timeoutId = setTimeout(typeLoop, 1800);
          return;
        }
      } else {
        // apagando
        const nextText = currentPhrase.slice(0, charIndex - 1);
        setPlaceholderText(nextText);
        charIndex -= 1;

        if (charIndex === 0) {
          // terminou de apagar, vai para a próxima frase
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      timeoutId = setTimeout(typeLoop, 90);
    }

    timeoutId = setTimeout(typeLoop, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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
            <input
              placeholder={placeholderText || "Localização"}
            />
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
          onBuscar={onBuscar}
        />
      )}
    </>
  );
}
