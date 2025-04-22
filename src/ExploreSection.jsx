import React from "react";
import Card from "./components/Card";
import makkahImg from "./assets/makkah/masjid_al_jharam-nightview2.jpg";
import madinaImg from "./assets/madina.jpeg";


const ExploreSection = () => {
  return (
<section className="py-12 px-4 md:px-12 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">Explore Holy Places</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">

    <div id="makkah">
      <Card 
        image={makkahImg}
        title="Makkah"
        description="The sacred city of Makkah, home to the Kaaba and Masjid al-Haram."
      />
    </div>

    <div id="madina">
      <Card 
        image={madinaImg}
        title="Madina"
        description="City of the Prophet (PBUH), home to Masjid al-Nabawi and rich Islamic history."
      />
    </div>

  </div>
</section>

  );
};

export default ExploreSection;
