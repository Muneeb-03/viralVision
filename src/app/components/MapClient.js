"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import MarkerImage from "../.././../public/Vector.png";

export default function ClientMap() {
  const [geoData] = useState({ lat: 31.4701, lng: 74.4101 });

  const customIcon = new L.Icon({
    iconUrl: MarkerImage,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <Box sx={{ height: "470px" }}>
      <MapContainer center={[geoData.lat, geoData.lng]} zoom={12} style={{ height: "100%" }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[geoData.lat, geoData.lng]} icon={customIcon} />
      </MapContainer>
    </Box>
  );
}
