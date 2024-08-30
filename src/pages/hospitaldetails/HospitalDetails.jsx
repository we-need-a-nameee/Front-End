import React from 'react';
import './hospitaldetails.css';  // Make sure this path is correct

const cardData = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'Smouha International Hospital',
    phone: '15012',
    icu: 'Yes',
    rating: '3.6',
    mapLink: 'https://www.google.com/maps/place/Smouha+International+Hospital/@31.2090002,29.9323084,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c5912f15aa27:0xbad5156d8dc6016c!8m2!3d31.2089956!4d29.9348833!16s%2Fg%2F11hzpk747m?entry=ttu'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'Andalusia Smouha Hospital',
    phone: '034197000',
    icu: 'Yes',
    rating: '3.3',
    mapLink: 'https://www.google.com/maps/place/Andalusia+Smouha+Hospital/@31.2164425,29.9394651,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c4922a140703:0x8476f62bb5008c82!8m2!3d31.2164379!4d29.94204!16s%2Fg%2F12hpzrf17?entry=ttu'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'ICC',
    phone: '034207320',
    icu: 'Yes',
    rating: '3.6',
    mapLink: 'https://www.google.com/maps/place/ICC/@31.217244,29.942162,15z/data=!4m6!3m5!1s0x14f5c49232aebf89:0xbf0edcbda7dc9d13!8m2!3d31.217244!4d29.942162!16s%2Fg%2F1tf136n3?entry=ttu'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'Royal Hospital',
    phone: '03 5223066',
    icu: 'Yes',
    rating: '3.7',
    mapLink: 'https://www.google.com/maps?sca_esv=e3ff2cacd83f1ace&lqi=CiHZhdiz2KrYtNmB2YrYp9iqINin2LPZg9mG2K_YsdmK2KlI65K8i-mAgIAIWikQABgAGAEiIdmF2LPYqti02YHZitin2Kog2KfYs9mD2YbYr9ix2YrYqZIBCGhvc3BpdGFsmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5QTm5GbFZWcG5FQUWqAWoKCC9tLzBocG5yEAEqFCIQ2YXYs9iq2LTZgdmK2KfYqig2Mh8QASIb2OiVYmt-KyRif-tK4CgmP1Pyx9G9uK83HrCEMiUQAiIh2YXYs9iq2LTZgdmK2KfYqiDYp9iz2YPZhtiv2LHZitip&vet=12ahUKEwig9P3Uv8-HAxW_RKQEHQicCsMQ8UF6BAgZEFM..i&lei=zj6pZqDVMr-JkdUPiLiqmAw&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KTEc4zrqxPUUMXwEEyVkGyXD&daddr=17+Abd+El-Qader+Ragab+Basha,+Abu+an+Nawatir,+Sidi+Gaber,+Alexandria+Governorate+21648'
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'City Hospital',
    phone: '01020404947',
    icu: 'Yes',
    rating: '3.1',
    mapLink: 'https://www.google.com/maps/place/City+Hospital/@31.2472137,29.9724841,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5dbdec0712375:0xd947089851632667!8m2!3d31.2472137!4d29.975059!16s%2Fg%2F11fmc09xn_?entry=ttu'
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'Middle East Hospital',
    phone: '03 4299505',
    icu: 'Yes',
    rating: '3.1',
    mapLink: 'https://www.google.com/maps?sca_esv=e3ff2cacd83f1ace&lqi=CiHZhdiz2KrYtNmB2YrYp9iqINin2LPZg9mG2K_YsdmK2KlI5-T9yOWAgIAIWikQABgAGAEiIdmF2LPYqti02YHZitin2Kog2KfYs9mD2YbYr9ix2YrYqZIBEHByaXZhdGVfaG9zcGl0YWyqAWoKCC9tLzBocG5yEAEqFCIQ2YXYs9iq2LTZgdmK2KfYqig2Mh8QASIb2OiVYmt-KyRif-tK4CgmP1Pyx9G9uK83HrCEMiUQAiIh2YXYs9iq2LTZgdmK2KfYqiDYp9iz2YPZhtiv2LHZitip&vet=12ahUKEwig9P3Uv8-HAxW_RKQEHQicCsMQ8UF6BAgZEFM..i&lei=zj6pZqDVMr-JkdUPiLiqmAw&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KQ8NjEKQxPUUMeWccFpkxLav&daddr=25+Mohammed+Fawzi+Moaz,+Smouha,+Ezbet+Saad,+Sidi+Gabir,+Qesm,+Alexandria+Governorate'
  },
  {
    id: 7,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'Mabaret El Asafra',
    phone: '03 5551612',
    icu: 'Yes',
    rating: '3.3',
    mapLink: 'https://www.google.com/maps?sca_esv=e3ff2cacd83f1ace&lqi=ChnZhdio2LHYqSDYp9mE2LnYtdin2YHYsdipSNWw4rncrYCACForEAAQARgAGAEiGdmF2KjYsdipINin2YTYudi12KfZgdix2KkqBggCEAAQAZIBCGhvc3BpdGFsmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5FYmpkMlVucDNSUkFCqgFCEAEyHxABIhvax_9AelRHPPzuh6oD_UvLkVvZzOF8y4O2PycyHRACIhnZhdio2LHYqSDYp9mE2LnYtdin2YHYsdip&phdesc=mCDZIkFVzkU&vet=12ahUKEwibppfcxc-HAxVVRaQEHe9lIB4Q8UF6BAgFEFM..i&lei=KEWpZpvyINWKkdUP78uB8QE&cs=1&um=1&ie=UTF-8&fb=1&gl=eg&sa=X&geocode=KRGrbZwtxfUUMY9A9hQQzzn8&daddr=Malak+Hefny+St%D8%8C+Al+Asafra+Station,+Alexandria+Governorate+5451101'
  },
  {
    id: 8,
    imageUrl: 'https://picsum.photos/200',  // Example image URL
    title: 'Loran Hospital',
    phone: '01015000606',
    icu: 'Yes',
    rating: '3.4',
    mapLink: 'https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D9%84%D9%88%D8%B1%D8%A7%D9%86+Loran+Hospital/@31.229393,29.935485,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5d7957ed7217d:0xb8d6f0a589d070c1!8m2!3d31.229393!4d29.938059!16s%2Fg%2F11c52rbv9w?entry=ttu'
  }
];// و هكذا يا مارينا 😂
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
                className="card-img-top"
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
