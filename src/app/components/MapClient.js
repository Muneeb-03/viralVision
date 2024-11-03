"use client"
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import MarkerImage from '../../../public/Vector.png'; // Ensure the path is correct

export default function ClientMap() {
  const [geoData, setGeoData] = useState({ lat: 31.4701, lng: 74.4101 });

  // Create a custom icon
  const customIcon = new L.Icon({
    iconUrl: MarkerImage.src, 
    iconSize: [25, 41],
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34],
    shadowUrl: null, 
    shadowSize: null,
    shadowAnchor: null,
  });

  return (
    <Box sx={{ height: '470px' }}>
      <MapContainer center={[geoData.lat, geoData.lng]} zoom={12} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} icon={customIcon} />
        )}
      </MapContainer>
    </Box>
  );
}
