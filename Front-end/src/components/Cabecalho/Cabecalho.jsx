import React, { useState, useRef, useEffect } from "react";
import "./Cabecalho.css";

export function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [notificacaoAberta, setNotificacaoAberta] = useState(false);

  const refMenu = useRef(null);
  const refNotificacao = useRef(null);

  const usuario = {
    nome: "Annie Leonchart",
    email: "annie_leonchart@mail.com",
    imoveis: 24,
    perfil: 1,
    avatarUrl: "https://i.pravatar.cc/80?img=12",
  };

  const notificacoes = [
    {
      id: 1,
      texto: "Novo imóvel recomendado para você no Setor Bueno.",
      lida: false,
    },
    {
      id: 2,
      texto: "Seu perfil foi atualizado com sucesso.",
      lida: true,
    },
    {
      id: 3,
      texto: "3 imóveis favoritados tiveram alteração de preço.",
      lida: true,
    },
  ];

  const temNaoLida = notificacoes.some((n) => !n.lida);
  const mensagemTicker =
    notificacoes.find((n) => !n.lida)?.texto ||
    (notificacoes[0] && notificacoes[0].texto) ||
    "Você não tem novas notificações.";

  // Fecha menus ao clicar fora
  useEffect(() => {
    function handleClick(e) {
      const target = e.target;

      const clicouForaPerfil =
        refMenu.current && !refMenu.current.contains(target);
      const clicouForaNotif =
        refNotificacao.current &&
        !refNotificacao.current.contains(target);

      if (clicouForaPerfil && clicouForaNotif) {
        setMenuAberto(false);
        setNotificacaoAberta(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function alternarMenuPerfil() {
    setMenuAberto((prev) => !prev);
    setNotificacaoAberta(false);
  }

  function alternarNotificacao() {
    setNotificacaoAberta((prev) => !prev);
    setMenuAberto(false);
  }

  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        {/* esquerda: espaço para logo no futuro */}
        <div className="cabecalho-esquerda" />

        {/* direita: notificações + avatar */}
<div className="cabecalho-direita">
  {/* área de notificação: ticker + sino + dropdown */}
  <div className="cabecalho-notificacao-area" ref={refNotificacao}>
    {/* TICKER à esquerda do sino, só quando dropdown está fechado */}
    {!notificacaoAberta && mensagemTicker && (
      <div className="cabecalho-ticker">
        <div className="cabecalho-ticker-conteudo">
          {mensagemTicker}
        </div>
      </div>
    )}

    <button
      className="cabecalho-botao-icone"
      aria-label="Notificações"
      type="button"
      onClick={alternarNotificacao}
    >
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2m6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-1.71 1.71A1 1 0 0 0 5 20h14a1 1 0 0 0 .71-1.71z"
        />
      </svg>

      {temNaoLida && <span className="cabecalho-notificacao-dot" />}
    </button>

    {notificacaoAberta && (
      <div className="cabecalho-menu-notificacao">
        <div className="cabecalho-menu-notificacao-header">
          <span>Notificações</span>
          <span className="cabecalho-menu-notificacao-sub">
            {temNaoLida ? "Novas" : "Todas lidas"}
          </span>
        </div>

        <ul className="cabecalho-menu-notificacao-list">
          {notificacoes.map((notif) => (
            <li
              key={notif.id}
              className={
                "cabecalho-menu-notificacao-item" +
                (notif.lida
                  ? " cabecalho-menu-notificacao-item--lida"
                  : "")
              }
            >
              {notif.texto}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>

          {/* avatar + menu de perfil */}
          <div
            className={
              "cabecalho-avatar-wrapper" +
              (menuAberto ? " cabecalho-avatar-wrapper--aberto" : "")
            }
            ref={refMenu}
          >
            <img
              src={usuario.avatarUrl}
              alt="Foto do usuário"
              className="cabecalho-avatar"
              onClick={alternarMenuPerfil}
            />

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
                    <span className="label">Imóveis</span>
                    <span className="valor">{usuario.imoveis}</span>
                  </div>

                  <div className="cabecalho-menu-metrica">
                    <span className="label">Perfil</span>
                    <span className="valor">{usuario.perfil}</span>
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
