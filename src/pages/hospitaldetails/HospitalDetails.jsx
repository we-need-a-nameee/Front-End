import React from 'react';
import './hospitaldetails.css';  // Make sure this path is correct
import hero from "../../assets/hero.svg";
const cardData = [
  {
    id: 1,
    imageUrl: "Hospitals/Smouha international Hospital.png",
    title: "Smouha International Hospital",
    phone: "15012",
    icu: "Yes",
    rating: "3.6",
    mapLink:
      "https://www.google.com/maps/place/Smouha+International+Hospital/@31.2090002,29.9323084,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c5912f15aa27:0xbad5156d8dc6016c!8m2!3d31.2089956!4d29.9348833!16s%2Fg%2F11hzpk747m?entry=ttu",
  },
  {
    id: 2,
    imageUrl: "Hospitals/Andalusia.jpg",
    title: "Andalusia Smouha Hospital",
    phone: "034197000",
    icu: "Yes",
    rating: "3.3",
    mapLink:
      "https://www.google.com/maps/place/Andalusia+Smouha+Hospital/@31.2164425,29.9394651,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c4922a140703:0x8476f62bb5008c82!8m2!3d31.2164379!4d29.94204!16s%2Fg%2F12hpzrf17?entry=ttu",
  },
  {
    id: 3,
    imageUrl: "Hospitals/ICC.png",
    title: "ICC",
    phone: "034207320",
    icu: "Yes",
    rating: "3.6",
    mapLink:
      "https://www.google.com/maps/place/ICC/@31.217244,29.942162,15z/data=!4m6!3m5!1s0x14f5c49232aebf89:0xbf0edcbda7dc9d13!8m2!3d31.217244!4d29.942162!16s%2Fg%2F1tf136n3?entry=ttu",
  },
  {
    id: 4,
    imageUrl: "Hospitals/royal-alexandria-hospital-foundation-logo.png",
    title: "Royal Hospital",
    phone: "03 5223066",
    icu: "Yes",
    rating: "3.7",
    mapLink:
      "https://www.google.com/maps?sca_esv=e3ff2cacd83f1ace&lqi=CiHZhdiz2KrYtNmB2YrYp9iqINin2LPZg9mG2K_YsdmK2KlI65K8i-mAgIAIWikQABgAGAEiIdmF2LPYqti02YHZitin2Kog2KfYs9mD2YbYr9ix2YrYqZIBCGhvc3BpdGFsmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5QTm5GbFZWcG5FQUWqAWoKCC9tLzBocG5yEAEqFCIQ2YXYs9iq2LTZgdmK2KfYqig2Mh8QASIb2OiVYmt-KyRif-tK4CgmP1Pyx9G9uK83HrCEMiUQAiIh2YXYs9iq2LTZgdmK2KfYqiDYp9iz2YPZhtiv2LHZitip&vet=12ahUKEwig9P3Uv8-HAxW_RKQEHQicCsMQ8UF6BAgZEFM..i&lei=zj6pZqDVMr-JkdUPiLiqmAw&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KTEc4zrqxPUUMXwEEyVkGyXD&daddr=17+Abd+El-Qader+Ragab+Basha,+Abu+an+Nawatir,+Sidi+Gaber,+Alexandria+Governorate+21648",
  },
  {
    id: 5,
    imageUrl: "Hospitals/city.png",
    title: "City Hospital",
    phone: "01020404947",
    icu: "Yes",
    rating: "3.1",
    mapLink:
      "https://www.google.com/maps/place/City+Hospital/@31.2472137,29.9724841,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5dbdec0712375:0xd947089851632667!8m2!3d31.2472137!4d29.975059!16s%2Fg%2F11fmc09xn_?entry=ttu",
  },
  {
    id: 6,
    imageUrl: "Hospitals/middleeast.jpg",
    title: "Middle East Hospital",
    phone: "034299505 - 01143337011 - 01143337022",
    icu: "Yes",
    rating: "3.1",
    mapLink:
      "https://www.google.com/maps?sca_esv=e3ff2cacd83f1ace&lqi=CiHZhdiz2KrYtNmB2YrYp9iqINin2LPZg9mG2K_YsdmK2KlI5-T9yOWAgIAIWikQABgAGAEiIdmF2LPYqti02YHZitin2Kog2KfYs9mD2YbYr9ix2YrYqZIBEHByaXZhdGVfaG9zcGl0YWyqAWoKCC9tLzBocG5yEAEqFCIQ2YXYs9iq2LTZgdmK2KfYqig2Mh8QASIb2OiVYmt-KyRif-tK4CgmP1Pyx9G9uK83HrCEMiUQAiIh2YXYs9iq2LTZgdmK2KfYqiDYp9iz2YPZhtiv2LHZitip&vet=12ahUKEwig9P3Uv8-HAxW_RKQEHQicCsMQ8UF6BAgZEFM..i&lei=zj6pZqDVMr-JkdUPiLiqmAw&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KQ8NjEKQxPUUMeWccFpkxLav&daddr=25+Mohammed+Fawzi+Moaz,+Smouha,+Ezbet+Saad,+Sidi+Gabir,+Qesm,+Alexandria+Governorate",
  },
  {
    id: 7,
    imageUrl: "Hospitals/mabara.jpg",
    title: "Mabaret El Asafra",
    phone: "03 5551612",
    icu: "Yes",
    rating: "3.3",
    mapLink:
      "https://www.google.com/maps?sca_esv=e3ff2cacd83f1ace&lqi=ChnZhdio2LHYqSDYp9mE2LnYtdin2YHYsdipSNWw4rncrYCACForEAAQARgAGAEiGdmF2KjYsdipINin2YTYudi12KfZgdix2KkqBggCEAAQAZIBCGhvc3BpdGFsmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5FYmpkMlVucDNSUkFCqgFCEAEyHxABIhvax_9AelRHPPzuh6oD_UvLkVvZzOF8y4O2PycyHRACIhnZhdio2LHYqSDYp9mE2LnYtdin2YHYsdip&phdesc=mCDZIkFVzkU&vet=12ahUKEwibppfcxc-HAxVVRaQEHe9lIB4Q8UF6BAgFEFM..i&lei=KEWpZpvyINWKkdUP78uB8QE&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KRGrbZwtxfUUMY9A9hQQzzn8&daddr=Malak+Hefny+St%D8%8C+Al+Asafra+Station,+Alexandria+Governorate+5451101",
  },
  {
    id: 8,
    imageUrl: "Hospitals/louran.png",
    title: "Loran Hospital",
    phone: "01015000606",
    icu: "Yes",
    rating: "3.4",
    mapLink:
      "https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D9%84%D9%88%D8%B1%D8%A7%D9%86+Loran+Hospital/@31.229393,29.935485,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5d7957ed7217d:0xb8d6f0a589d070c1!8m2!3d31.229393!4d29.938059!16s%2Fg%2F11c52rbv9w?entry=ttu",
  },
  {
    id: 9,
    imageUrl: "Hospitals/miry.png",
    title: "Alexandria University Main Hospital",
    phone: "033901800",
    icu: "Yes",
    rating: "3.5",
    mapLink: "https://www.google.com/maps/place/Alexandria+University+Main+Hospital+-+Al+Miri/@31.2021715,29.9037767,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c38c35b3db57:0xc9af05b34dbe02f9!8m2!3d31.2021669!4d29.9063516!16s%2Fg%2F11by_zq329?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 10,
    imageUrl: "Hospitals/alhayah.jpg",
    title: "Al Hayah Hospital",
    phone: "034207722",
    icu: "Yes",
    rating: "3.1",
    mapLink: "https://www.google.com/maps?q=31.2162424,29.9427084"
  },
  {
    id: 11,
    imageUrl: hero, // Example image URL
    title: "Al Salama Hospital",
    phone: "033928500",
    icu: "Yes",
    rating: "3.5",
    mapLink: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D9%87+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87%E2%80%AD/@31.2019488,29.8897068,14z/data=!4m10!1m2!2m1!1z2YXYs9iq2LTZgdmJINin2YTYs9mE2KfZhdipINin2YTYp9iz2YPZhtiv2LHZitip!3m6!1s0x14f5c38600bc6cf3:0x3d6d6b0a3dafa139!8m2!3d31.2019488!4d29.9103062!15sCjDZhdiz2KrYtNmB2Ykg2KfZhNiz2YTYp9mF2Kkg2KfZhNin2LPZg9mG2K_YsdmK2KlaMiIw2YXYs9iq2LTZgdmJINin2YTYs9mE2KfZhdipINin2YTYp9iz2YPZhtiv2LHZitipkgEIaG9zcGl0YWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlVhalJMV1hkQlJSQULgAQA!16s%2Fg%2F11qn6y5jxz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D9%87+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87%E2%80%AD/@31.2019534,29.9077313,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c38600bc6cf3:0x3d6d6b0a3dafa139!8m2!3d31.2019488!4d29.9103062!16s%2Fg%2F11qn6y5jxz?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 12,
    imageUrl: "Hospitals/german.png",
    title: "German Hospital",
    phone: "033910800",
    icu: "Yes",
    rating: "3.6",
    mapLink: "https://www.google.com/maps/place/German+Hospital,+Alexandria/@31.2370966,29.9527182,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c4d8c789c207:0xde8bc113155073cb!8m2!3d31.2370921!4d29.9575891!16s%2Fg%2F1tgmmr5k?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 13,
    imageUrl: "Hospitals/victoria.png",
    title: "Victoria Hospital",
    phone: "033926666",
    icu: "Yes",
    rating: "3.6",
    mapLink: "https://www.google.com/maps/place/Victoria+Hospital/@31.2439005,29.9795079,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5dace3b76d26b:0x7b052bbce0c4afbd!8m2!3d31.2438959!4d29.9820828!16s%2Fg%2F1tdkzxnj?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:14,
    imageUrl: "Hospitals/takla.jpg",
    title: "Al Anba Takla Hospital",
    phone: "03 5916257",
    icu: "Yes",
    rating: "4.4",
    mapLink: "https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%A7%D9%86%D8%A8%D8%A7+%D8%AA%D9%83%D9%84%D8%A7+%D8%A7%D9%84%D8%AA%D8%AE%D8%B5%D8%B5%D9%89%E2%80%AD/@31.2107796,29.9178522,15z/data=!4m10!1m2!2m1!1sSt.+Takla+hospital!3m6!1s0x14f5c38145f2e53d:0xb6d191aecca68a2c!8m2!3d31.2107796!4d29.9266069!15sChJTdC4gVGFrbGEgaG9zcGl0YWxaEyIRc3QgdGFrbGEgaG9zcGl0YWySARBwcml2YXRlX2hvc3BpdGFsmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJLT0ZBdFRETkJSUkFC4AEA!16s%2Fg%2F1tgpdhg0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:15,
    imageUrl: "Hospitals/agial.jpg",
    title: "Agial Hospital",
    phone: "03 5234235",
    icu: "Yes",
    rating: "4.3",
    mapLink: "https://www.google.com/maps/place/Agial+Hospital/@31.2300032,29.9492896,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c4e7e5d4eebf:0x6c007f81c3efd0e9!8m2!3d31.2300032!4d29.9492896!16s%2Fg%2F1tdt35bb?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:16,
    imageUrl: "Hospitals/romany.jpg",
    title: "El Romany Hospital",
    phone: "03 4203846",
    icu: "Yes",
    rating: "3.6",
    mapLink: "https://www.google.com/maps/place/Romany+Specialized+Hospital/@31.1984164,29.9298652,17z/data=!4m10!1m2!2m1!1sel+romany+hospital!3m6!1s0x14f5c37ecbe52f23:0xada073bf702c929a!8m2!3d31.1984164!4d29.9320539!15sChJlbCByb21hbnkgaG9zcGl0YWxaFCISZWwgcm9tYW55IGhvc3BpdGFskgEIaG9zcGl0YWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkRiRFZUZG5SQlJSQULgAQA!16s%2Fg%2F11c1njmv2m?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:17,
    imageUrl: "Hospitals/marmorkos.png",
    title: "Marmorkos Hospital",
    phone: "03 5552741",
    icu: "Yes",
    rating: "3.6",
    mapLink: "https://www.google.com/maps/place/Mar+Morcos+Hospital/@31.2638221,29.9921165,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5daa383670905:0xeb1d660ceb333466!8m2!3d31.2638221!4d29.9921165!16s%2Fg%2F1vl5d3jv?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:18,
    imageUrl: "Hospitals/icare.jpg",
    title: "I-Care Hospital",
    phone: "010 17600700",
    icu: "Yes",
    rating: "3.5",
    mapLink: "https://www.google.com/maps/place/iCare+Hospital/@31.2097454,29.9552477,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c4bb75da3b35:0xfd1cff4d55efe4ed!8m2!3d31.2097408!4d29.9578226!16s%2Fg%2F11b7ln87fg?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id:19,
    imageUrl: "Hospitals/elite.jpg",
    title: "Elite Hospital",
    phone: "01551188760 - 15461",
    icu: "Yes",
    rating: "4.6",
    mapLink: "https://www.google.com/maps/place/Elite+Hospital/@31.1716993,29.9409605,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c310e1d19295:0xc973dcd1396e7e2c!8m2!3d31.1716947!4d29.9435354!16s%2Fg%2F11c2090xx7?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
  },
];
const getStarRating = (rating) => {
  // Convert rating to a number and round down to get full stars
  const fullStars = Math.floor(rating);
  
  // Determine if there's a half star needed
  const halfStar = rating % 1 >= 0.5;
  
  // Build the star string
  let stars = '⭐'.repeat(fullStars);
  
  if (halfStar) {
    stars += '⭐️'; // Adding the half star
  } 
  
  // Ensure the total stars do not exceed 5 (maximum rating)
  stars = stars.substring(0, 5);
  
  return stars;
};

const HospitalDetails = () => {
  return (
    <div className="container py-14">
      <div className="row max-w-7xl mx-auto">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={card.imageUrl}
                className="card-img-top w-full"
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="text-dark text-xl font-medium mb-2">{card.title}</h5>
                <p className="card-text mb-2">
                  <strong className='text-pr'>Phone:</strong> {card.phone}
                </p>
                <p className="card-text mb-2">
                  <strong className='text-pr'>ICU:</strong> {card.icu}
                </p>
                <p className="card-text mb-2">
                  <strong className='text-pr'>Rating:</strong>
                  <span className="rating">{getStarRating(card.rating)}</span>
                </p>
                <a
                  href={card.mapLink}
                  className="button2 text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalDetails;