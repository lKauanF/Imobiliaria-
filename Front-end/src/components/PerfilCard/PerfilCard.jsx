import React from "react";
import "./PerfilCard.css";

export function PerfilCard({ label, selected, onSelect, icon }) {
  return (
    <div
      className={`profile-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="profile-icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="profile-label">{label}</div>
    </div>
  );
}
