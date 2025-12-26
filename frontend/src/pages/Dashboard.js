import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const Dashboard = () => {
  const [position, setPosition] = useState([20.5937, 78.9629]); // Default India center
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
      console.error("Geolocation not supported");
    }
  }, []);

  if (loading) return <p>Loading map...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dashboard</h2>
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "80vh", width: "100%" }}
        data-testid="map" // <-- Add this for unit tests
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position}>
          <Popup>Your Current Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Dashboard;
