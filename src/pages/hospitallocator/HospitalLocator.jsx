import React, { useState, useEffect } from "react";
import "./hospitallocator.css";
import hero1 from "../../assets/loc.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from 'react-router-dom';

const initialHospitals = [
  {
    id: 1,
    title: "Doctor Medical Center",
    lat: 30.0475,
    lng: 31.2357,
    icuAvailability: 3,
    services: [],
    link: "https://healtheg.com/ar/Item/1047/الطبيب-ميديكال-سنتر",
    address: "3, Doctor St., Cairo-New Cairo",
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contactInfo: "0226161840 - +20226175241",
    phone: "0226161840",
    email: "contact@doctor.com",
    description: "A leading medical center providing various healthcare services.",
    mapLink: "https://www.google.com/maps?q=Doctor+Medical+Center"
  },
  {
    id: 2,
    title: "Psychological Clinic - Dr. Manal Al-Daghar",
    lat: 30.0995671,
    lng: 31.3178072,
    icuAvailability: 0,
    services: [],
    link: "https://healtheg.com/ar/Item/1161/العيادة-النفسية---د-منال-الدغار",
    address: "25 Andalus St., Alexandria-Abrahamic",
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contactInfo: "035905175 - 01006313619",
    phone: "035905175",
    email: "manal.daghar@clinic.com",
    description: "Specializing in psychological health and therapy.",
    mapLink: "https://www.google.com/maps?q=Psychological+Clinic"
  },
  {
    id: 3,
    title: "Eye Consultant Center",
    link: "https://healtheg.com/ar/Item/1667/المركز-الاستشارى-للعيون",
    address: "Neighboring, New Eastern Al-Salihiya",
    icuAvailability: "N/A",
    services: [],
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contactInfo: "0553200061 - 0553203161",
    phone: "0553200061",
    email: "info@eyecenter.com",
    description: "Expert eye care and consultations.",
    mapLink: "https://www.google.com/maps?q=Eye+Consultant+Center",
    lat: 11.42494275,
    lng: 124.8479050919301,
  },
];

export default function HospitalLocator() {
  const [hospitals, setHospitals] = useState(initialHospitals);
  const [filterLocation, setFilterLocation] = useState("");
  const [filterService, setFilterService] = useState("");
  const [userLocation, setUserLocation] = useState([30.0444, 31.2357]);
  const [activeTabs, setActiveTabs] = useState(Array(hospitals.length).fill('details'));
  const navigate = useNavigate();

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

  const filteredHospitals = hospitals.filter(hospital => 
    hospital.title.toLowerCase().includes(filterLocation.toLowerCase()) &&
    (filterService === "" || hospital.services.includes(filterService))
  );

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

  const handleBookingClick = () => {
    alert("Booking functionality is not implemented yet.");
  };

  return (
    <>
      <MainSecComp
        className="relative w-full h-96 md:h-auto md:max-h-screen overflow-hidden"
        hero={hero1}
        heading={`<p>Find Your Nearest Hospital,</p><p>Book with Ease.</p>`}
      />


      <div className="container mt-4">
        <h1>Search for Hospitals</h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by hospital name"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />

        <select
          className="form-select mb-3"
          value={filterService}
          onChange={(e) => setFilterService(e.target.value)}
        >
          <option value="">All Services</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Emergency">Emergency</option>
          <option value="Surgery">Surgery</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>

        {/* Move the MapContainer above the cards */}
        <div style={{ height: "600px" }}>
          <MapContainer center={userLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={userLocation} icon={userIcon}>
              <Popup>Your Location</Popup>
            </Marker>
            {hospitals.map((hospital) => (
              <Marker key={hospital.id} position={[hospital.lat, hospital.lng]} icon={customIcon}>
                <Popup>{hospital.title}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="container py-4">
          <div className="row">
            {filteredHospitals.length > 0 ? (
              filteredHospitals.map((hospital, index) => (
                <div key={hospital.id} className="col-md-4 mb-4">
                  <div className="card text-center">
                    <img
                      src={hospital.photo}
                      className="card-img-top"
                      alt={hospital.title}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="card-header">
                      <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTabs[index] === 'details' ? 'active' : ''}`}
                            onClick={() => setActiveTabs(prev => prev.map((tab, i) => (i === index ? 'details' : tab)))}
                          >
                            Details
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTabs[index] === 'contact' ? 'active' : ''}`}
                            onClick={() => setActiveTabs(prev => prev.map((tab, i) => (i === index ? 'contact' : tab)))}
                          >
                            Contact Info
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link ${activeTabs[index] === 'book' ? 'active' : ''}`}
                            onClick={() => setActiveTabs(prev => prev.map((tab, i) => (i === index ? 'book' : tab)))}
                          >
                            Book Now
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      {activeTabs[index] === 'details' && (
                        <>
                          <h5 className="card-title">{hospital.title}</h5>
                          <p className="card-text">{hospital.description}</p>
                          <Link to={hospital.link} target="_blank" className="btn btn-primary">More Details</Link>
                        </>
                      )}
                      {activeTabs[index] === 'contact' && (
                        <>
                          <h5 className="card-title">Contact Info</h5>
                          <p className="card-text">Phone: {hospital.phone}</p>
                          <p className="card-text">Email: {hospital.email}</p>
                        </>
                      )}
                      {activeTabs[index] === 'book' && (
                        <button onClick={handleBookingClick} className="btn btn-danger">Book Now</button>
                      )}
                    </div>
                    <div className="card-footer text-muted">
                      ICU Availability: {hospital.icuAvailability > 0 ? `${hospital.icuAvailability} beds` : "Not Available"}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No hospitals found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
