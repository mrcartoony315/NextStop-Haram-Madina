// import React from 'react';
// import makkahHero from '../assets/makkah/masjid_al_jharam-nightview2.jpg';
// import explore from '../ExploreSection'

// const Hero = () => {
// return (
//     <section className="bg-cover bg-center h-[80vh] text-white flex items-end justify-start" style={{ backgroundImage: `url(${makkahHero})` }}>
//       <div className="bg-black bg-opacity-50 p-8 rounded-xl m-4">
//         <h2 className="text-4xl font-bold mb-4">Explore the beauty and spirituality of Makkah & Madina</h2>
//         <p className="text-lg mb-6"> Your comprehensive guide to exploring Makkah and Madinah, the two
//         holiest cities in Islam.</p>
//         <a href="#sites" className="bg-yellow-600 text-whitye px-6 py-3 rounded-md font-semibold hover:bg-black">Explore Sites</a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import makkahHero from '../assets/makkah/masjid_al_jharam-nightview2.jpg';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-[80vh] flex items-end justify-start text-white"
      style={{ backgroundImage: `url(${makkahHero})` }}
    >
      <div className="bg-black/70 p-2 md:p-8 rounded-4xl m-4 max-w-5xl">
        <h2 className="md:text-4xl font-bold mb-4 leading-snug">
          Explore the beauty and spirituality of Makkah & Madina
        </h2>
        <p className="md:text-2xl mb-6 leading-relaxed">
          Your comprehensive guide to exploring Makkah and Madinah, the two holiest cities in Islam.
        </p>
        <a
          href="#sites"
          className="bg-yellow-600 text-white px-5 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:bg-yellow-700 transition"
        >
          Explore Sites
        </a>
      </div>
    </section>
  );
};

export default Hero;

