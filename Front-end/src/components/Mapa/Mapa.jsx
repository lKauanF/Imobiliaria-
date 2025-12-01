import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";

// Corrige os ícones padrão do Leaflet no bundler
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Centro aproximado de Goiânia
const DEFAULT_CENTER = [-16.6869, -49.2648];

function ZoomButtons() {
  const map = useMap();

  function handleZoomIn() {
    map.setZoom(map.getZoom() + 1);
  }

  function handleZoomOut() {
    map.setZoom(map.getZoom() - 1);
  }

  return (
    <div className="mapa-zoom-controles">
      <button type="button" onClick={handleZoomIn}>
        +
      </button>
      <button type="button" onClick={handleZoomOut}>
        -
      </button>
    </div>
  );
}

export function Mapa({ imoveis }) {
  return (
    <div className="mapa-full">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={13}
        scrollWheelZoom
        className="mapa-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* pins dos imóveis */}
        {imoveis
          .filter(
            (imovel) =>
              typeof imovel.latitude === "number" &&
              typeof imovel.longitude === "number"
          )
          .map((imovel) => (
            <Marker
              key={imovel.id}
              position={[imovel.latitude, imovel.longitude]}
            >
              {/* Tooltip/card ao passar o mouse */}
              <Tooltip
                direction="top"
                offset={[0, -10]}
                opacity={1}
                sticky
                className="mapa-tooltip"
              >
                <div className="mapa-tooltip-card">
                  <div className="mapa-tooltip-thumb">
                    <img src={imovel.imagem} alt={imovel.titulo} />
                  </div>

                  <div className="mapa-tooltip-info">
                    <div className="mapa-tooltip-preco">
                      R$ {imovel.preco.toLocaleString("pt-BR")}
                    </div>
                    <div className="mapa-tooltip-endereco">
                      {imovel.endereco}
                    </div>
                  </div>
                </div>
              </Tooltip>
            </Marker>
          ))}

        <ZoomButtons />
      </MapContainer>
    </div>
  );
}
