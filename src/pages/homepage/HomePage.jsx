import React from "react";
import hero1 from "../../assets/hero2.svg";
import homeCSS from "./homepage.module.css";
import { Link } from "react-router-dom";
import {
  UilMapPinAlt,
  UilClockTen,
  UilAmbulance,
} from "@iconscout/react-unicons";
export default function HomePage() {
  return (
    <>
      <main className="h-[100vh] relative max-w-7xl mx-auto p-2 flex justify-between items-center">
        <div
          className={`${homeCSS.herocontent} h-full w-1/2 flex flex-col justify-center  `}
        >
          <h3 className="italicfont text-dark text-lg font-normal underline mb-2 capitalize">
            Your Health, Our Priority
          </h3>
          <h1 className="text-pr mb-5 text-4xl font-bold capitalize">
            <p>Find Care Fast,</p>
            <p>Discover Hospitals, Book Instantly.</p>
            <p className="text-dark text-2xl font-medium">Anytime, Anywhere.</p>
          </h1>
          <div className="flex w-full justify-start space-x-4">
            <Link to="hospitallocator" className="button2 text-light">
              Find a Hospital
            </Link>
            <Link to="appointmentbooking" className="button1">
              Book an Appointment
            </Link>
          </div>
        </div>
        <img src={hero1} className={`${homeCSS.heroimg} w-1/2 block`} alt="" />
        <UilMapPinAlt
          size={100}
          className="absolute top-[10%] left-[49%] text-pr text-5xl"
        />
        <UilClockTen
          size={100}
          className="absolute top-[2%] left-[70%] text-pr text-5xl"
        />
        <UilAmbulance
          size={100}
          className="absolute top-[10%] left-[90%] text-pr text-5xl"
        />
      </main>

      <section className="bg-gradient-to-l from-gr to-white py-20">
        <h2 className="italicfont text-dark font-medium mb-5 text-3xl text-center mx-auto">
          Our Key Features
        </h2>
        <div className={`${homeCSS.featuers} max-w-7xl mx-auto row`}>
          <div className="col-xl-3 col-lg-3 col-md-5 col-12">
            <div className="rotate-[3deg] hover:rotate-0 transition-all rounded-2xl h-[420px] p-3 flex flex-col justify-around items-center text-center">
              <i class="fas fa-map-marked-alt block text-pr text-7xl"></i>
              <h3 className="font-medium text-lg text-dark">
                Hospital Locator
              </h3>
              <p>
                Find nearby hospitals quickly and easily using our interactive
                map and advanced search filters. Whether you're looking for a
                specific specialization, rating, or insurance compatibility, our
                locator helps you find the best fit for your needs.
              </p>
              <Link
                to="/hospitallocator"
                className="button2 shadow-none text-light"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-12 ">
            <div className="rotate-[-3deg] hover:rotate-0 transition-all rounded-2xl h-[420px] p-3 flex flex-col justify-around items-center text-center">
              <i class="fas fa-calendar-check block text-pr text-7xl"></i>
              <h3 className="font-medium text-lg text-dark">
                Appointment Booking
              </h3>
              <p>
                Book appointments with top-rated doctors at your convenience.
                Our platform allows you to view real-time availability, choose
                preferred dates, and receive instant confirmation. Manage all
                your bookings in one place, making healthcare more accessible.
              </p>
              <Link
                to="/appointmentbooking"
                className="button2 shadow-none text-light"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-12">
            <div className="rotate-[3deg] hover:rotate-0 transition-all rounded-2xl h-[420px] p-3 flex flex-col justify-around items-center text-center">
              <i class="fas fa-phone-volume block text-pr text-7xl"></i>
              <h3 className="font-medium text-lg text-dark">
                Telemedicine Services
              </h3>
              <p>
                Access healthcare from the comfort of your home with our secure
                telemedicine services. Schedule video consultations, chat with
                healthcare providers, and get prescriptions delivered directly
                to your door. It's healthcare on your terms.
              </p>
              <Link
                to="/telemedicine"
                className="button2 shadow-none text-light"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-5 col-12">
            <div className="rotate-[-3deg] hover:rotate-0 transition-all rounded-2xl h-[420px] p-3 flex flex-col justify-around items-center text-center">
              <i class="fas fa-hospital-user block text-pr text-7xl"></i>
              <h3 className="font-medium text-lg text-dark">Patient Reviews</h3>
              <p>
                Make informed decisions with the help of our comprehensive
                patient review system. Read genuine feedback from other
                patients, share your own experiences, and help improve the
                quality of care by choosing the best healthcare providers.
              </p>
              <Link
                to="/userprofile"
                className="button2 shadow-none text-light"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
