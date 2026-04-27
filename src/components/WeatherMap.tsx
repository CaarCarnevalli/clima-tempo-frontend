import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

// URL do TopoJSON com dados reais dos países (Natural Earth)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface MapProps {
  coordinates?: {
    lat: number;
    lng: number;
  };
  cityName?: string;
  className?: string;
}

export function WeatherMap({ 
  coordinates, 
  cityName,
  className = "" 
}: MapProps) {
  // Estado para controlar zoom e centro do mapa
  const [position, setPosition] = useState<{ center: [number, number]; zoom: number }>({
    center: [0, 20],
    zoom: 1
  });

  // Quando as coordenadas mudam, anima para a nova posição com zoom
  useEffect(() => {
    if (coordinates) {
      setPosition({
        center: [coordinates.lng, coordinates.lat],
        zoom: 4 // Zoom aproximado para ver a região
      });
    } else {
      setPosition({
        center: [0, 20],
        zoom: 1
      });
    }
  }, [coordinates]);

  // Callback quando o usuário move o mapa manualmente
  const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
    setPosition({
      center: position.coordinates,
      zoom: position.zoom
    });
  };

  return (
    <div className={`w-full aspect-[2/1] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl relative font-sans overflow-hidden shadow-2xl ${className}`}>
      <ComposableMap
        projectionConfig={{
          scale: 147,
          center: [0, 0]
        }}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup 
          center={position.center} 
          zoom={position.zoom}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={8}
          translateExtent={[
            [-200, -100],
            [1000, 500]
          ]}
        >
          {/* Países do mundo com dados geográficos reais */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1e3a5f"
                  stroke="#3b82f6"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      fill: "#1e3a5f",
                      stroke: "#3b82f6",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#2563eb",
                      stroke: "#60a5fa",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#1d4ed8",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Marcador da cidade */}
          {coordinates && (
            <Marker coordinates={[coordinates.lng, coordinates.lat]}>
              <g transform={`scale(${1 / position.zoom})`}>
                {/* Pulse animation circles */}
                <motion.circle
                  r={0}
                  fill="#0ea5e9"
                  initial={{ r: 0, opacity: 0.8 }}
                  animate={{ 
                    r: [0, 20, 35],
                    opacity: [0.8, 0.4, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
                <motion.circle
                  r={0}
                  fill="#0ea5e9"
                  initial={{ r: 0, opacity: 0.8 }}
                  animate={{ 
                    r: [0, 20, 35],
                    opacity: [0.8, 0.4, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                />
                
                {/* Glow effect */}
                <motion.circle
                  r={12}
                  fill="#0ea5e9"
                  opacity={0.3}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                />
                
                {/* Main marker */}
                <motion.circle
                  r={8}
                  fill="#0ea5e9"
                  stroke="#ffffff"
                  strokeWidth={2.5}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                />
                
                {/* Inner dot */}
                <motion.circle
                  r={3}
                  fill="#ffffff"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
                />
              </g>
              
              {/* City name label */}
              {cityName && (
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  transform={`scale(${1 / position.zoom})`}
                >
                  <rect
                    x={-cityName.length * 4 - 8}
                    y={-38}
                    width={cityName.length * 8 + 16}
                    height={22}
                    rx={6}
                    fill="rgba(0,0,0,0.75)"
                  />
                  <text
                    textAnchor="middle"
                    y={-22}
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      fill: "#ffffff",
                    }}
                  >
                    {cityName}
                  </text>
                </motion.g>
              )}
            </Marker>
          )}
        </ZoomableGroup>
      </ComposableMap>

      {!coordinates && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-slate-400 text-sm">
            Busque uma cidade para ver no mapa
          </p>
        </div>
      )}
    </div>
  );
}
