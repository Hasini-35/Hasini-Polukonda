import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const WaterMap = ({ waterData, currentLocation }) => (
  <MapContainer center={currentLocation} zoom={12} className="leaflet-container">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />

    <Marker position={currentLocation}>
      <Popup>Your Location</Popup>
    </Marker>

    {waterData.map((item) => (
      <Marker
        key={item.id}
        position={[
          item.geometry.coordinates[1],
          item.geometry.coordinates[0],
        ]}
      >
        <Popup>
          {item.properties.monitoring_location_id}: {item.properties.value} {item.properties.unit_of_measure}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default WaterMap;
