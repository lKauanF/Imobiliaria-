import React, { useState, useRef, useEffect } from "react";
import "./Cabecalho.css";

export function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const refMenu = useRef(null);

  const usuario = {
    nome: "Annie Leonchart",
    email: "annie_leonchart@mail.com",
    imoveis: 24,
    perfil: 1,
    avatarUrl: "https://i.pravatar.cc/80?img=12",
  };

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClick(e) {
      if (refMenu.current && !refMenu.current.contains(e.target)) {
        setMenuAberto(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">

        <div className="cabecalho-esquerda" />

        <div className="cabecalho-direita">

          {/* Ícone de Notificações */}
          <button className="cabecalho-botao-icone" aria-label="Notificações">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2m6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-1.71 1.71A1 1 0 0 0 5 20h14a1 1 0 0 0 .71-1.71z"
              />
            </svg>
          </button>

          {/* Avatar simples */}
          <div className="cabecalho-avatar-wrapper" ref={refMenu}>
            <img
              src={usuario.avatarUrl}
              alt="Foto do usuário"
              className="cabecalho-avatar"
              onClick={() => setMenuAberto(!menuAberto)}
            />

            {/* Menu aberto */}
            {menuAberto && (
              <div className="cabecalho-menu-perfil">
                <img
                  src={usuario.avatarUrl}
                  alt="Foto"
                  className="cabecalho-menu-avatar"
                />

                <div className="cabecalho-menu-nome">{usuario.nome}</div>
                <div className="cabecalho-menu-email">{usuario.email}</div>

                <div className="cabecalho-menu-divisao" />

                <div className="cabecalho-menu-metricas">
                  <div className="cabecalho-menu-metrica">
                    <span className="valor">{usuario.imoveis}</span>
                    <span className="label">Imóveis</span>
                  </div>

                  <div className="cabecalho-menu-metrica">
                    <span className="valor">{usuario.perfil}</span>
                    <span className="label">Perfil</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
