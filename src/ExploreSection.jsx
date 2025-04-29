import React from "react";
import Card from "./components/Card";
import makkahImg from "./assets/makkah/masjid_al_jharam-nightview2.jpg";
import madinaImg from "./assets/madina.jpeg";


const ExploreSection = () => {
  return (
<section className="py-12 px-4 md:px-12 bg-gray-50" id="explore">
  <h2 className="text-5xl font-bold text-center mb-10">Explore Holy Places</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">

    <div id="makkah">
      <Card 
        image={makkahImg}
        title="Makkah"
        description1="The sacred city of Makkah,"
        description2="home to the Kaaba and Masjid al-Haram."
        link={"/makkah"}
      />
    </div>

    <div id="madina">
      <Card 
        image={madinaImg}
        title="Madina"
        description1="City of the Prophet (PBUH), home to"
        description2="Masjid al-Nabawi and rich Islamic history"
        link={"/madina"}
      />
    </div>

  </div>
</section>

  );
};

export default ExploreSection;
