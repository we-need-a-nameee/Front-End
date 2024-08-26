import React from "react";
import { Link } from "react-router-dom";
import fotterCSS from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="bd-footer bg-c1 py-4 py-md-5">
      <div className="container py-4 py-md-5 px-4 px-md-3 text-light">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <Link
              to="/home"
              className={`${fotterCSS.logo} bg-gradient-to-r from-c2 via-c2 to-light text-transparent bg-clip-text text-4xl font-medium tracking-wide`}
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
            >
              WellNessWay
            </Link>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">
                Designed and built with all the care in the world for your
                mental wellness.
              </li>
              <li className="mb-2">
                All content is licensed under{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="license noopener"
                >
                  CC BY 3.0
                </a>
                .
              </li>
              <li className="mb-2">Currently v1.0.0.</li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5 className="text-lg font-medium mb-2 text-c3">Quick Links</h5>
            <ul className="list-unstyled text-sm font-light">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="text-lg font-medium mb-2 text-c3">Resources</h5>
            <ul className="list-unstyled text-sm font-light">
              <li className="mb-2">
                <a href="/guides">Guides</a>
              </li>
              <li className="mb-2">
                <a href="/faq">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/support">Support</a>
              </li>
              <li className="mb-2">
                <a href="/terms">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="text-lg font-medium mb-2 text-c3">Connect</h5>
            <ul className="list-unstyled text-sm font-light">
              <li className="mb-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook text-c3 text-xl mr-1"></i>{" "}
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-c3 text-xl mr-1"></i>{" "}
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-c3 text-xl mr-1"></i>{" "}
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin text-c3 text-xl mr-1"></i>{" "}
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5 className="text-lg font-medium mb-2 text-c3">Community</h5>
            <ul className="list-unstyled text-sm font-light">
              <li className="mb-2">
                <a href="/forum">Forum</a>
              </li>
              <li className="mb-2">
                <a href="/events">Events</a>
              </li>
              <li className="mb-2">
                <a href="/partners">Partners</a>
              </li>
              <li className="mb-2">
                <a href="/careers">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/volunteer">Volunteer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
