import React, { useEffect } from "react";
import hero1 from "../../assets/hero2.svg";
import hero2 from "../../assets/hero.svg";
import hero4 from "../../assets/hero7.svg";
import avatarm from "../../assets/avatarm.svg";
import avatarf from "../../assets/avatarf.svg";
import "../../assets/circlescatterhaikei.svg";
import "../../assets/blob-scene-haikei.svg";
import "../../assets/blob-scene-haikei2.svg";
import homeCSS from "./homepage.module.css";
import { Link } from "react-router-dom";
import { AppleCardsCarouselDemo } from "../../components/appleCardscarouseldemo/AppleCardsCarouselDemo";

export default function HomePage() {
  useEffect(() => {
    window.addEventListener("scroll", counter);
    testmonialsFunc();
    return () => {
      window.removeEventListener("scroll", counter);
    };
  }, []);
  function counter() {
    const windowScroll = window.scrollY;
    const counterSec = document.getElementById("countersec");
    const counterSecTop = counterSec.offsetTop;
    if (windowScroll > counterSecTop - 300) {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = Number(counter.dataset.target);
        let currValue = Number(counter.innerText);
        const intervalVar = setInterval(() => {
          if (currValue < target) {
            counter.innerText = ++currValue;
          } else {
            clearInterval(intervalVar);
          }
        }, 10);
      });
    }
  }
  function readMore() {
    console.log('first')
  }
  function testmonialsFunc() {
    const testmonialstext = document.getElementById("testmonialstext");
    const testmonialstextHeight = testmonialstext.clientHeight;
    const tetsmonialstextCon = testmonialstext.scrollHeight;
    console.log(testmonialstextHeight, tetsmonialstextCon);
    if (testmonialstextHeight < tetsmonialstextCon) {
      testmonialstext.innerHTML =
        testmonialstext.innerText.split("").slice(0, 150).join("") + "...";
    }
  }
  
  const features = [
    {
      icon: "fas fa-map-marked-alt",
      title: "Hospital Locator",
      desc: "Find nearby hospitals quickly and easily using our interactive map and advanced search filters. Whether you're looking for a specific specialization, rating, or insurance compatibility, our locator helps you find the best fit for your needs.",
      deg: "3deg",
    },
    {
      icon: "fas fa-calendar-check",
      title: "Appointment Booking",
      desc: "Book appointments with top-rated doctors at your convenience. Our platform allows you to view real-time availability, choose preferred dates, and receive instant confirmation. Manage all your bookings in one place, making healthcare more accessible.",
      deg: "-3deg",
    },
    {
      icon: "fas fa-phone-volume",
      title: "Telemedicine Services",
      desc: "Access healthcare from the comfort of your home with our secure telemedicine services. Schedule video consultations, chat with healthcare providers, and get prescriptions delivered directly to your door. It's healthcare on your terms.",
      deg: "3deg",
    },
    {
      icon: "fas fa-hospital-user",
      title: "Patient Reviews",
      desc: "Make informed decisions with the help of our comprehensive patient review system. Read genuine feedback from other patients, share your own experiences, and help improve the quality of care by choosing the best healthcare providers.",
      deg: "-3deg",
    },
  ];
  const numbers = [
    {
      num: "0",
      title: "Hospitals",
      bg: "bg-c1",
      toNum: "150",
      icon: "fas fa-hospital",
    },
    {
      num: "0",
      title: "Doctors",
      bg: "bg-c2",
      toNum: "200",
      icon: "fas fa-user-md",
    },
    {
      num: "0",
      title: "Patients",
      bg: "bg-c3",
      toNum: "300",
      icon: "fas fa-users",
    },
    {
      num: "0",
      title: "Others",
      bg: "bg-c4",
      toNum: "88",
      icon: "fas fa-user-friends",
    },
  ];
  return (
    <>
      <main>
        <div className=" xl:h-[100vh] max-w-[90rem] mx-auto p-2 flex flex-col xl:flex-row justify-between items-center">
          <div
            className={`${homeCSS.herocontent} py-3 h-full xl:w-1/2 flex flex-col justify-center  `}
          >
            <h3 className="italicfont text-dark text-lg font-normal underline mb-2 capitalize">
              Your Health, Our Priority
            </h3>
            <h1 className="text-pr mb-5 text-6xl font-bold capitalize">
              <p>Find Care Fast,</p>
              <p>Discover Hospitals, Book Instantly.</p>
              <p className="text-dark text-2xl mt-2 font-medium">
                Anytime, Anywhere.
              </p>
              <p className="font-light w-3/4 text-sm text-dark mt-2">
                Embrace a world of comprehensive healthcare where your
                well-being takes center stage. At Meca, we're dedicated to
                providing you with personalized and compassionate medical
                services. Whether you're looking for a hospital, booking an
                appointment, or seeking telemedicine services, we're here to
                help you every step of the way.
              </p>
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
          <div className=" h-full">
            <img
              src={hero1}
              className={`${homeCSS.heroimg} w-full block`}
              alt=""
            />
          </div>
        </div>
      </main>
      <section className="bg-gradient-to-l from-gr to-white py-20">
        <h2 className="italicfont font-medium text-pr text-xl underline text-center mx-auto">
          Our Key Features
        </h2>
        <p className="text-center text-dark  text-4xl mb-5 mx-auto max-w-3xl">
          We Serve In Different
          <span className="font-bold ml-1"> Areas For Our Patients</span>
        </p>
        <div className={`${homeCSS.featuers} max-w-[90rem] mx-auto row`}>
          {features.map((feature, index) => {
            return (
              <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                <div
                  className={`rotate-[${feature.deg}] hover:rotate-0 transition-all rounded-2xl h-[420px] p-3 flex flex-col justify-around items-center text-center`}
                >
                  <i class={`${feature.icon} block text-pr text-7xl`}></i>
                  <h3 className="font-medium text-lg text-dark">
                    {feature.title}
                  </h3>
                  <p>{feature.desc}</p>
                  <Link
                    to="/userprofile"
                    className="button2 shadow-none text-light"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section class={`${homeCSS.about_us_section} py-5`}>
        <div className="max-w-[90rem] mx-auto p-2 flex justify-between items-center">
          <div class="flex flex-col justify-between items-center md:flex-row">
            <div class="w-full md:w-1/2">
              <h2 className="italicfont font-medium text-pr text-xl underline">
                About Us
              </h2>
              <p class="text-dark text-4xl mb-3">
                Who <span className="font-bold">We Are</span> & What We
                <span className="font-bold"> Stand For</span>
              </p>
              <p className="font-light mb-3">
                At <span className="italicfont text-pr">WellNessWay</span>, we
                are committed to providing you with the best healthcare services
                available. Our mission is to connect patients with top
                healthcare providers and make quality medical care accessible
                and convenient for everyone.
              </p>
              <h3 class="text-pr font-medium text-xl mb-2">
                <i class="fa-solid fa-list-check"></i> Our Mission
              </h3>
              <p className="font-light mb-3">
                To revolutionize the way people access healthcare by offering
                innovative, user-friendly solutions for finding, booking, and
                receiving medical care.
              </p>
              <h3 class="text-pr font-medium text-xl mb-2">
                <i class="fa-solid fa-glasses"></i> Our Vision
              </h3>
              <p className="font-light mb-3">
                To be the leading platform for healthcare access, known for
                trust, reliability, and exceptional user experience.
              </p>
              <h3 class="text-pr font-medium text-xl mb-2">
                <i class="fas fa-shield-alt"></i> Our Values
              </h3>
              <ul className="font-light mb-3 pl-5">
                <li>
                  <i class="fa-solid fa-circle mr-1 text-[8px]"></i>
                  Compassion: We care deeply about our users and their health.
                </li>
                <li>
                  <i class="fa-solid fa-circle mr-1 text-[8px]"></i>
                  Innovation: We continuously strive to improve our platform and
                  services.
                </li>
                <li>
                  <i class="fa-solid fa-circle mr-1 text-[8px]"></i> Integrity:
                  We operate with honesty and transparency.
                </li>
                <li>
                  <i class="fa-solid fa-circle mr-1 text-[8px]"></i>
                  Excellence: We aim for the highest standards in everything we
                  do.
                </li>
              </ul>
              <Link to="about" class="button2 text-light">
                Meet Our Team
              </Link>
            </div>
            <div class="w-full md:w-1/2">
              <img src={hero2} alt="Our Team" />
            </div>
          </div>
        </div>
      </section>
      <section id="countersec" className="bg-gradient-to-r from-gr to-white">
        <div className="py-[100px] max-w-[90rem] mx-auto row flex justify-between items-center">
          {numbers.map((number, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div
                  className={`flex justify-center items-center space-x-5 mb-2 ${number.bg} h-[150px] rounded-md`}
                >
                  <i
                    className={`block w-[70px] h-[70px] rounded-md leading-[70px] text-center text-pr text-4xl hover:bg-pr hover:text-light transition-all ${number.icon}`}
                  ></i>
                  <div>
                    <h2
                      data-target={number.toNum}
                      className="counter text-dark text-3xl font-bold"
                    >
                      {number.num}
                    </h2>
                    <p className="text-pr">{number.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={`${homeCSS.blogs_section}`}>
        <div className="max-w-[90rem] mx-auto row">
          <div className="py-10 col-lg-6 col-12">
            <img src={hero4} alt="" />
          </div>
          <div className="col-lg-6 col-12">
            <AppleCardsCarouselDemo />
          </div>
        </div>
      </section>

      <section className={`${homeCSS.feedback_section} py-16`}>
        <h2 className="italicfont text-center font-medium text-pr text-xl underline">
          Testmonials
        </h2>
        <p class="text-dark text-center font-bold text-4xl mb-5">
          What clients <span className="font-normal">say about us</span>
        </p>
        <div className="max-w-[90rem] mx-auto row gap-y-2">
          <div className="col-md-6 col-12">
            <div className="bg-white hover:shadow-2xl hover:scale-105 transition-all p-3 rounded-xl flex justify-start items-center">
              <img src={avatarm} alt="user" className="w-[10%] block mr-2" />
              <div className="w-[90%] p-3">
                <h4 className="text-xl font-medium text-pr mb-3">@Omar</h4>
                <p
                  id="testmonialstext"
                  className={`${homeCSS.testmonials} pl-9`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis eaque similique id officia velit, ducimus voluptatum
                  assumenda? Maxime molestiae consequuntur quo praesentium
                  incidunt quis quasi ducimus sed. Aut esse magni repudiandae,
                  earum amet inventore, ex, mollitia repellat fuga in nulla
                  libero quia quidem! Velit iusto, quo ullam incidunt fuga
                  sapiente!`
                  
                </p><button
                  id="readmore"
                    class="bg-transparent border-none text-pr pl-9"
                    onClick={readMore}
                  >
                    Read More
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
