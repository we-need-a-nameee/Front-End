import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutus.css"; // Make sure to create this CSS file for custom styles

export default function AboutUs() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold">About Us</h1>
        <p className="lead">Your trusted partner in healthcare.</p>
      </div>

      {/* Our Mission */}
      <div className="row mb-4">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card border-primary shadow-sm mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Our Mission</h4>
            </div>
            <div className="card-body">
              <p>
                At MediConnect, we are dedicated to revolutionizing the way you
                access healthcare services. Our mission is to make finding and
                managing healthcare as seamless and stress-free as possible,
                putting your wellness at the forefront of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="row mb-4">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card border-success shadow-sm mb-4">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Our Vision</h4>
            </div>
            <div className="card-body">
              <p>
                We envision a world where everyone has easy access to
                high-quality healthcare, no matter where they are. By
                integrating advanced technology with compassionate care, we
                strive to enhance the healthcare experience for individuals and
                families everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="row mb-4">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card border-info shadow-sm mb-4">
            <div className="card-header bg-info text-white">
              <h4 className="mb-0">Our Services</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <strong>Hospital Locator:</strong> Quickly find nearby
                  hospitals tailored to your specific needs, from specialization
                  and ratings to insurance compatibility.
                </li>
                <li>
                  <strong>Appointment Booking:</strong> Effortlessly schedule
                  appointments with top-rated doctors, view real-time
                  availability, and receive instant confirmations.
                </li>
                <li>
                  <strong>Telemedicine Services:</strong> Enjoy the convenience
                  of virtual consultations, chat with healthcare providers, and
                  have prescriptions delivered to your door.
                </li>
                <li>
                  <strong>Patient Reviews:</strong> Read and contribute to
                  reviews that help guide others in their healthcare decisions,
                  ensuring a transparent and informed choice.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="row mb-4">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card border-secondary shadow-sm mb-4">
            <div className="card-header bg-secondary text-white">
              <h4 className="mb-0">Get in Touch</h4>
            </div>
            <div className="card-body">
              <p>
                We value your feedback and are here to support you. For any
                inquiries or assistance, please contact us through our{" "}
                <a href="#contact" className="text-primary">
                  Contact Page
                </a>
                . Follow us on social media to stay updated with the latest news
                and updates.
              </p>
              <p>
                <strong>Join Us on This Journey</strong>
                <br />
                Together, we can make healthcare more accessible and effective.
                Explore MediConnect and discover how we can support your health
                and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Become a Sponsor */}
      <div className="row mb-4">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card border-danger shadow-sm mb-4">
            <div className="card-header bg-danger text-white">
              <h4 className="mb-0">Become a Sponsor</h4>
            </div>
            <div className="card-body">
              <p>
                We invite organizations and individuals to support our mission
                of improving healthcare accessibility and quality. Sponsoring
                MediConnect provides a unique opportunity to align your brand
                with a forward-thinking platform dedicated to wellness and
                innovation.
              </p>
              <p>As a sponsor, you can benefit from:</p>
              <ul className="list-unstyled">
                <li>
                  <strong>Increased Visibility:</strong> Gain exposure through
                  our website and promotional materials.
                </li>
                <li>
                  <strong>Brand Alignment:</strong> Associate your brand with a
                  trusted resource in healthcare.
                </li>
                <li>
                  <strong>Community Impact:</strong> Contribute to the
                  enhancement of healthcare services and patient experiences.
                </li>
              </ul>
              <p>
                If you are interested in becoming a sponsor or would like more
                information about sponsorship opportunities, please{" "}
                <a href="#contact" className="text-primary">
                  contact us
                </a>
                . We look forward to partnering with you to make a positive
                impact in the healthcare community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Future */}
      <div className="row mb-4">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="card border-dark shadow-sm mb-4">
            <div className="card-header bg-dark text-light">
              <h4 className="mb-0">Our Future</h4>
            </div>
            <div className="card-body">
              <p>
                We’re just getting started! At MediConnect, our vision extends
                beyond our current services. In the coming years, we plan to
                expand our platform to include:
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>Additional Branches:</strong> Opening new locations to
                  provide localized support and services.
                </li>
                <li>
                  <strong>Enhanced Features:</strong> Integrating cutting-edge
                  technologies for an even better user experience.
                </li>
                <li>
                  <strong>Partnerships:</strong> Collaborating with more
                  healthcare providers and specialists to broaden our network.
                </li>
                <li>
                  <strong>Community Engagement:</strong> Hosting events and
                  forums to connect with and support our users.
                </li>
              </ul>
              <p>
                Stay tuned for more updates as we continue to grow and evolve.
                We are excited about the future and look forward to making a
                meaningful impact on the healthcare landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
