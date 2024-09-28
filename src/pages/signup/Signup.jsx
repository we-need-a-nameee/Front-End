import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    bloodType: "",
    medicalHistory: "",
    allergies: "",
    currentMedications: "",
    priorSurgeries: "",
    hasInsurance: false,
    insuranceProvider: "",
    insurancePhoto: null,
    promoCode: "",
    agreeToTerms: false,
    patientPhoto: null,
  });

  const [patientPhotoPreview, setPatientPhotoPreview] = useState("");
  const [insurancePhotoPreview, setInsurancePhotoPreview] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  // Load stored data when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    if (type === "file") {
      const file = files[0];
      if (name === "patientPhoto") {
        setPatientPhotoPreview(URL.createObjectURL(file));
      } else if (name === "insurancePhoto") {
        setInsurancePhotoPreview(URL.createObjectURL(file));
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions to sign up.");
      return;
    }

    // Store user data in localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Redirect to login page
    navigate("/login"); // Navigate to login page

    // You can add additional form submission logic here, e.g., API call
    console.log("Form submitted:", formData);
  };

  // Handle Google Sign-In success
  const handleGoogleSuccess = (response) => {
    const { email, name } = response.profileObj;
    setFormData((prevData) => ({
      ...prevData,
      email,
      name,
    }));

    // Update localStorage with Google login data
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...formData,
        email,
        name,
      })
    );
  };

  // Handle Google Sign-In failure
  const handleGoogleFailure = (response) => {
    console.error("Google Sign-In Error:", response);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-20">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <div className="card-body p-5">
          <h2 className="card-title text-center mb-4">Sign Up</h2>

          {/* Google Sign-In */}
          <div className="d-grid gap-2 mb-4">
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual client ID
              buttonText="Sign up with Google"
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              cookiePolicy={"single_host_origin"}
              className="btn btn-outline-danger"
            />
          </div>

          <hr className="my-4" />

          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="birthdate" className="form-label">
                  Birthdate
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="gender" className="form-labe">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="bloodType" className="form-label">
                  Blood Type
                </label>
                <select
                  className="form-select"
                  id="bloodType"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>

            {/* Patient Photo */}
            <div className="mb-3">
              <label htmlFor="patientPhoto" className="form-label">
                Upload Patient Photo
              </label>
              <input
                type="file"
                className="form-control"
                id="patientPhoto"
                name="patientPhoto"
                onChange={handleChange}
                accept="image/*"
              />
              {patientPhotoPreview && (
                <div className="mt-3">
                  <img
                    src={patientPhotoPreview}
                    alt="Patient"
                    className="img-thumbnail"
                  />
                </div>
              )}
            </div>

            {/* Patient History */}
            <div className="mb-3">
              <label htmlFor="medicalHistory" className="form-label">
                Medical History
              </label>
              <textarea
                className="form-control"
                id="medicalHistory"
                name="medicalHistory"
                rows="3"
                value={formData.medicalHistory}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="allergies" className="form-label">
                Allergies
              </label>
              <textarea
                className="form-control"
                id="allergies"
                name="allergies"
                rows="2"
                value={formData.allergies}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currentMedications" className="form-label">
                Current Medications
              </label>
              <textarea
                className="form-control"
                id="currentMedications"
                name="currentMedications"
                rows="2"
                value={formData.currentMedications}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="priorSurgeries" className="form-label">
                Prior Surgeries
              </label>
              <textarea
                className="form-control"
                id="priorSurgeries"
                name="priorSurgeries"
                rows="2"
                value={formData.priorSurgeries}
                onChange={handleChange}
              />
            </div>

            {/* Health Insurance */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="hasInsurance"
                name="hasInsurance"
                checked={formData.hasInsurance}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="hasInsurance">
                Do you have health insurance?
              </label>
            </div>
            {formData.hasInsurance && (
              <>
                <div className="mb-3">
                  <label htmlFor="insuranceProvider" className="form-label">
                    Insurance Provider
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="insuranceProvider"
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="insurancePhoto" className="form-label">
                    Upload Insurance Card Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="insurancePhoto"
                    name="insurancePhoto"
                    onChange={handleChange}
                    accept="image/*"
                  />
                  {insurancePhotoPreview && (
                    <div className="mt-3">
                      <img
                        src={insurancePhotoPreview}
                        alt="Insurance Card"
                        className="img-thumbnail"
                      />
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Promo Code */}
            <div className="mb-3">
              <label htmlFor="promoCode" className="form-label">
                Promo Code
              </label>
              <input
                type="text"
                className="form-control"
                id="promoCode"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleChange}
                placeholder="Enter promo code if you have one"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="agreeToTerms">
                I agree to the terms and conditions
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
