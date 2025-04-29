//updated 

import React, { useState, useRef, useEffect } from "react";
import { HeroSection } from "../components/PageComponents1.jsx";
import hajjBanner from "../assets/hajj1/kaaba.jpg";
import ihram from "../assets/hajj/ihram.jpg";
import prohibited from "../assets/hajj/prohibited_act.png";
import arrival_makkah from "../assets/hajj/arrival_makkah.webp";
import safa_marwa from "../assets/hajj/safa_marwa.jpg";
import traveling_mina from "../assets/hajj/travelling_Mina.webp";
import arafat from "../assets/hajj/arafat.jpg";
import muzdalifah from "../assets/hajj/muzdalifah.jpeg";
import al_jamarat from "../assets/hajj/al_jamarat.jpeg";
import shaving from "../assets/hajj/shaving_head.jpeg";
import main_tawaf from "../assets/hajj/main_tawaf.jpg";
import al_wada from "../assets/hajj/al_wada.jpeg";

const hajjSteps = [
  { title: "Step 1: Preparation and Intention (Niyyah)", image: hajjBanner, content: ["Before setting off, pilgrims should ensure they meet all financial, physical, and legal requirements for Hajj.", "It is advised to seek forgiveness, pay off debts, and reconcile with others before embarking on the journey.", "Pilgrims must intend niyyah to perform Hajj sincerely for Allah."] },
  { title: "Step 2: Ihram", image: ihram, content: ["Ihram is a sacred state of purity that begins at designated Miqat points.", "Men wear two white, unstitched clothes; women wear modest attire.", "Talbiyah is recited:", "Labbayk Allahumma labbayk..."] },
  { title: "Step 3: Prohibited Acts In Ihram", image: prohibited, content: ["Avoid shaving, cutting nails, perfume, marital relations, and conflict."] },
  { title: "Step 4: Arrival in Makkah and Tawaf", image: arrival_makkah, content: ["Perform Tawaf al-Qudum around the Kaaba.", "Offer two Rak’ahs of prayer near Maqam Ibrahim."] },
  { title: "Step 5: Sa’i", image: safa_marwa, content: ["Walk seven times between Safa and Marwah, recalling Hajar's devotion."] },
  { title: "Step 6: Travel to Mina", image: traveling_mina, content: ["Stay in tents in Mina for prayer and reflection."] },
  { title: "Step 7: Day of Arafat", image: arafat, content: ["Stand in Arafat, seek forgiveness and listen to the Khutbah."] },
  { title: "Step 8: Muzdalifah", image: muzdalifah, content: ["Collect pebbles and sleep under the stars."] },
  { title: "Step 9: Stoning", image: al_jamarat, content: ["Throw pebbles at the pillars representing Satan."] },
  { title: "Step 10: Shaving", image: shaving, content: ["Men shave heads; women cut a small portion of hair."] },
  { title: "Step 11: Tawaf al-Ifadah", image: main_tawaf, content: ["Perform Tawaf and Sa’i to complete major rites."] },
  { title: "Step 12: Farewell Tawaf", image: al_wada, content: ["Perform Tawaf al-Wada before departing Makkah."] }
];

const HajjPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedCard(null);
      }
    };

    if (selectedCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCard]);

  return (
    <div>
      <HeroSection
        title="Hajj – The Journey of a Lifetime"
        subtitle="Experience the sacred pilgrimage to the House of Allah"
        backgroundImage={hajjBanner}
      />

      <div className="text-center bg-amber-50 py-10 px-6">
        <h2 className="text-3xl font-bold text-amber-900 mb-4 inline-block bg-yellow-300 px-6 py-2 rounded shadow">
          Step-by-Step Journey of Hajj
        </h2>
        <p className="text-lg text-coolGray-700 max-w-3xl mx-auto mt-4">
          Explore the sacred journey of Hajj through this visual guide. Each card below represents a meaningful step that every pilgrim undertakes, from the intention to the farewell. Click on any step to learn more.
        </p>
      </div>

      <div className="bg-gray-100 py-10 px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button
            onClick={() => setStartIndex((prev) => (prev - 1 + hajjSteps.length) % hajjSteps.length)}
            className="text-4xl text-amber-700 hover:text-amber-900 transition duration-300"
          >
            ←
          </button>

          <div className="flex flex-wrap justify-center gap-6">
            {[0, 1, 2].map((offset) => {
              const step = hajjSteps[(startIndex + offset) % hajjSteps.length];
              return (
                <div
                  key={offset}
                  className="bg-white rounded-xl shadow-lg w-72 h-96 cursor-pointer hover:scale-105 transition duration-300"
                  onClick={() => setSelectedCard(step)}
                >
                  <img src={step.image} alt={step.title} className="w-full h-48 object-cover rounded-t-xl" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                  </div>
                  {window.scrollTo(0, 0)}

                </div>
                
              );
            })}
          </div>

          <button
            onClick={() => setStartIndex((prev) => (prev + 1) % hajjSteps.length)}
            className="text-4xl text-amber-700 hover:text-amber-900 transition duration-300"
          >
            →
          </button>
        </div>
      </div>

      <div className="text-center bg-amber-50 py-10 px-6">
        <h2 className="text-3xl font-bold text-amber-900 mb-4 inline-block bg-yellow-300 px-6 py-2 rounded shadow">
          Final Thoughts
        </h2>
        <p className="text-lg text-coolGray-700 max-w-3xl mx-auto mt-4">
          Hajj is a deeply spiritual journey requiring patience, endurance, and sincerity. Completing Hajj with devotion results in immense rewards, including the forgiveness of all past sins. May Allah accept the Hajj of all pilgrims in 2025. Ameen!
        </p>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-6 md:p-10 relative"
          >
            <button
              className="absolute top-4 right-6 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelectedCard(null)}
            >
              ×
            </button>

            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-64 md:h-[30rem] object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">{selectedCard.title}</h2>

            {Array.isArray(selectedCard.content) ? (
              <ul className="list-disc pl-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                {selectedCard.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {selectedCard.content}
              </p>
            )}

            <div className="mt-10 flex justify-between">
              <button
                className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-2 px-4 md:px-6 rounded shadow"
                onClick={() => {
                  const currentIndex = hajjSteps.findIndex(step => step.title === selectedCard.title);
                  const prevIndex = (currentIndex - 1 + hajjSteps.length) % hajjSteps.length;
                  setSelectedCard(hajjSteps[prevIndex]);
                }}
              >
                ← Previous
              </button>
              <button
                className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-2 px-4 md:px-6 rounded shadow"
                onClick={() => {
                  const currentIndex = hajjSteps.findIndex(step => step.title === selectedCard.title);
                  const nextIndex = (currentIndex + 1) % hajjSteps.length;
                  setSelectedCard(hajjSteps[nextIndex]);
                }}
              >
                Next →
              </button>
            </div>
            
          </div>
        </div>
        
      )}
    </div>
  );
};

export default HajjPage;
