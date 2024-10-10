import React, { useState, useEffect } from "react";
import "./hospitallocator.css";
import hero1 from "../../assets/loc.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MainSecComp from "../../components/mainSecComp/MainSecComp";

const initialHospitals = [
  {
    name: "Hospital A",
    lat: 30.0475,
    lng: 31.2357,
    icuAvailability: 5,
    services: ["Cardiology", "Emergency"],
  },
  {
    name: "Hospital B",
    lat: 30.0333,
    lng: 31.2333,
    icuAvailability: 2,
    services: ["Surgery", "Emergency"],
  },
  {
    name: "Hospital C",
    lat: 30.02,
    lng: 31.21,
    icuAvailability: 0,
    services: ["Pediatrics", "Orthopedics"],
  },
  {
    name: "Doctor Medical Center",
    lat: 30.0475,
    lng: 31.2357,
    icuAvailability: 3,
    services: [],
    link: "https://healtheg.com/ar/Item/1047/الطبيب-ميديكال-سنتر",
    address: "3, Doctor St., Cairo-New Cairo",
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contact: "0226161840 - +20226175241",
  },
  {
    name: "Psychological Clinic - Dr. Manal Al-Daghar",
    lat: 30.0995671,
    lng: 31.3178072,
    icuAvailability: 0,
    services: [],
    link: "https://healtheg.com/ar/Item/1161/العيادة-النفسية---د-منال-الدغار",
    address: "25 Andalus St., Alexandria-Abrahamic",
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contact: "035905175 - 01006313619",
  },
  {
    name: "Eye Consultant Center",
    link: "https://healtheg.com/ar/Item/1667/المركز-الاستشارى-للعيون",
    address: "Neighboring, New Eastern Al-Salihiya",
    icuAvailability: "N/A",
    services: [],
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contact: "0553200061 - 0553203161",
    lat: 11.42494275,
    lng: 124.8479050919301,
  },
  {
    name: "Health Center - Bulaq Dakrur",
    link: "https://healtheg.com/ar/Item/1296/المركز-الصحى---بولاق-الدكرور",
    address: "3 Sharif St., Giza-Bulaq Dakrur",
    icuAvailability: "N/A",
    services: [],
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contact: "0237388986",
    lat: -27.3868784,
    lng: 152.9961992,
  },
  {
    name: "The General Health Center - Kafr Tahrams",
    link: "https://healtheg.com/ar/Item/1552/المركز-الصحى-العام---كفر-طهرمس",
    address: "Queen St., Giza-Bulaq Dakrur",
    icuAvailability: "N/A",
    services: [],
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contact: "0237219038",
    lat: -27.4655959,
    lng: 153.0303842,
  },
];

export default function HospitalLocator() {
  const [hospitals, setHospitals] = useState(initialHospitals);
  const [filterLocation, setFilterLocation] = useState("");
  const [filterService, setFilterService] = useState("");
  const [userLocation, setUserLocation] = useState([30.0444, 31.2357]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const filteredHospitals = hospitals;

  const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  const userIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  return (
    <>
      <MainSecComp
       className="relative w-full h-96 md:h-auto md:max-h-screen overflow-hidden"
        hero={hero1}
        heading={`<p>Find Your Nearest Hospital,</p><p>Book with Ease.</p>`}
      />

      <div className=" relative mt-4" style={styles.container}>
        <h1>Search for Hospitals</h1>

        <input
          type="text"
          placeholder="Search by hospital name"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          style={styles.input}
        />

        <select
          value={filterService}
          onChange={(e) => setFilterService(e.target.value)}
          style={styles.select}
        >
          <option value="">All Services</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Emergency">Emergency</option>
          <option value="Surgery">Surgery</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>

        <MapContainer center={userLocation} zoom={13} style={styles.map}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker icon={userIcon} position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
          {filteredHospitals.map((hospital, index) => (
            <Marker
              icon={customIcon}
              key={index}
              position={[hospital.lat, hospital.lng]}
            >
              <Popup>
                {hospital.name} <br /> ICU Beds: {hospital.icuAvailability}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div style={styles.hospitalCards}>
          {filteredHospitals.length === 0 ? (
            <div>No hospitals found</div>
          ) : (
            filteredHospitals.map((hospital, index) => (
              <div key={index} style={styles.card}>
                <strong>{hospital.name}</strong>
                <p>ICU Beds: {hospital.icuAvailability}</p>
                <p>Services: {hospital.services.join(", ")}</p>
                <div className="font-bold text-l mb-2 text-pr">
                <a href={`/hospital/${hospital.name}`}>More Info</a> |{" "}
                </div>
                <div className="font-bold text-l mb-2 text-pr">
                <a href={`/book/${hospital.name}`}>Book Appointment</a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}


const styles = {
  container: {
    padding: "2rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    border: "1px solid #CCC",
    borderRadius: "4px",
  },
  select: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1.5rem",
    border: "1px solid #CCC",
    borderRadius: "4px",
  },
  map: {
    height: "400px",
    width: "100%",
    marginBottom: "2rem",
    flexGrow: 1,
  },
  hospitalCards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "1rem",
  },
  card: {
    flex: "1 1 calc(33.333% - 1rem)", 
    padding: "1rem",
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "280px", 
    maxWidth: "100%",
  },
  "@media (max-width: 768px)": {
    card: {
      flex: "1 1 calc(50% - 1rem)", 
    },
  },
  "@media (max-width: 480px)": {
    card: {
      flex: "1 1 100%", 
    },
  },
};
