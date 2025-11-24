import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Mapa.css";

export function Mapa() {
  const [mapRef, setMapRef] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "SUA_API_KEY_AQUI",
  });

  const centro = { lat: -15.8267, lng: -47.9218 };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const aoCarregarMapa = useCallback((map) => {
    setMapRef(map);
  }, []);

  const aumentarZoom = () => {
    if (mapRef) mapRef.setZoom(mapRef.getZoom() + 1);
  };

  const diminuirZoom = () => {
    if (mapRef) mapRef.setZoom(mapRef.getZoom() - 1);
  };

  return (
    <div className="mapa-full">

      {/* Botões de Zoom */}
      <div className="mapa-zoom-controles">
        <button onClick={aumentarZoom}>+</button>
        <button onClick={diminuirZoom}>-</button>
      </div>

      {/* Fullscreen */}
      <div
        className="mapa-fullscreen"
        onClick={() => document.documentElement.requestFullscreen()}
      >
        ⛶
      </div>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centro}
          zoom={13}
          onLoad={aoCarregarMapa}
          options={{
            disableDefaultUI: true,
            clickableIcons: false,
          }}
        />
      ) : (
        <p>Carregando mapa...</p>
      )}
    </div>
  );
}
