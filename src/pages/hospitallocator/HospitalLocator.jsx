import React, { useState } from "react";
import "./hospitallocator.css";
import hero1 from "../../assets/loc.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MainSecComp from "../../components/mainSecComp/MainSecComp";




const initialHospitals = [
  {
    name: "Hospital A",
    lat: 30.0444,
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
];
export default function HospitalLocator() {

  const [hospitals, setHospitals] = useState(initialHospitals); // البيانات الأساسية
  const [filterLocation, setFilterLocation] = useState(""); // الفلتر للموقع
  const [filterService, setFilterService] = useState(""); // الفلتر للخدمات

  // تصفية المستشفيات حسب الفلاتر المدخلة
  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      (filterLocation === "" ||
        hospital.name.toLowerCase().includes(filterLocation.toLowerCase())) &&
      (filterService === "" || hospital.services.includes(filterService))
    );
  });


  const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png", // الرابط إلى صورة الأيقونة
    iconSize: [25, 41], // حجم الأيقونة
    iconAnchor: [12, 41], // النقطة التي تشير إلى الموقع
    popupAnchor: [0, -41], // موقع النافذة المنبثقة
  });
  return (
    <>
      

      <MainSecComp
        hero={hero1}
        heading={`<p>Find Your Nearest Hospital,</p>
              <p>Book with Ease.</p>`}
      />

      <div style={styles.container}>
        <h1>Search for Hospitals</h1>

        {/* فلتر حسب الموقع */}
        <input
          type="text"
          placeholder="Search by hospital name"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          style={styles.input}
        />

        {/* فلتر حسب نوع الخدمة */}
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

        {/* الخريطة */}
        <MapContainer center={[30.0444, 31.2357]} zoom={13} style={styles.map}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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

        {/* قائمة المستشفيات */}
        <ul style={styles.hospitalList}>
          {filteredHospitals.length === 0 ? (
            <li>No hospitals found</li>
          ) : (
            filteredHospitals.map((hospital, index) => (
              <li key={index} style={styles.hospitalItem}>
                <strong>{hospital.name}</strong> - ICU Beds:{" "}
                {hospital.icuAvailability}
                <br />
                Services: {hospital.services.join(", ")}
                <br />
                <a href={`/hospital/${hospital.name}`}>More Info</a> |{" "}
                <a href={`/book/${hospital.name}`}>Book Appointment</a>
              </li>
            ))
          )}
        </ul>
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
  },
  hospitalList: {
    listStyleType: "none",
    padding: 0,
  },
  hospitalItem: {
    marginBottom: "1.5rem",
    padding: "1rem",
    backgroundColor: "#F8F9FA",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};
