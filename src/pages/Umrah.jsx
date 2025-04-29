import React, { useState } from "react";
import { HeroSection, ImageTextSection } from "../components/PageComponents1";
import makkahBg from "../assets/makkah/masjid_al_jharam-nightview.jpg";
import meccaUmrah from "../assets/umrah/mecca-umrah.webp";
// import al_wada from "../assets/hajj/al_wada.jpeg";

const umrahSteps = [
  {
    title: "Ihram & Niyyah",
    image: meccaUmrah,
    content: [
      "Enter the state of Ihram before reaching the Miqat.",
      "Make a sincere intention to perform Umrah.",
      "Men wear unstitched white garments, women wear modest dress."
    ]
  },
  {
    title: "Tawaf",
    image: meccaUmrah,
    content: [
      "Perform 7 circuits around the Kaaba starting from the Black Stone.",
      "Ensure you remain in a state of Wudu (ablution)."
    ]
  },
  {
    title: "Pray at Maqam Ibrahim",
    image: meccaUmrah,
    content: [
      "Offer 2 Rak’ahs behind Maqam Ibrahim.",
      "Drink Zamzam water after prayer."
    ]
  },
  {
    title: "Sa’i between Safa & Marwah",
    image: meccaUmrah,
    content: [
      "Walk 7 times between the hills of Safa and Marwah.",
      "Begin at Safa and end at Marwah, remembering Hajar’s devotion."
    ]
  },
  {
    title: "Halq or Taqsir",
    image: meccaUmrah,
    content: [
      "Men shave their heads (Halq) or shorten their hair (Taqsir).",
      "Women cut a small portion of their hair.",
      "This marks the end of Umrah."
    ]
  },
  // Additional 4 steps added
  {
    title: "Arrival at Masjid al-Haram",
    image: meccaUmrah,
    content: [
      "Arrive at the Masjid al-Haram and stand in awe of the Kaaba.",
      "Make Du'a for peace and blessings during your stay."
    ]
  },
  {
    title: "Dua at the Kaaba",
    image: meccaUmrah,
    content: [
      "Stand near the Kaaba and make personal supplications (Dua).",
      "It is recommended to pray for yourself, family, and the Ummah."
    ]
  },
  {
    title: "Drinking Zamzam Water",
    image: meccaUmrah,
    content: [
      "Drink Zamzam water after performing Tawaf and Sa'i.",
      "It is a sacred and blessed drink, providing spiritual nourishment."
    ]
  },
  {
    title: "Visit to Medina (Optional)",
    image: meccaUmrah,
    content: [
      "A visit to the Prophet’s Mosque (Masjid an-Nabawi) is optional but highly recommended.",
      "Offer prayers and seek blessings at the tomb of Prophet Muhammad (PBUH)."
    ]
  }
];

const Umrah = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const cardsPerPage = 3;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = umrahSteps.slice(startIndex, endIndex);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (startIndex + cardsPerPage < umrahSteps.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handleCardClick = (step) => {
    setSelectedCard(step);
  };

  return (
    <>
      <HeroSection
        title="Welcome to Umrah!"
        subtitle="The sacred heart of Islam, home to the Kaaba"
        backgroundImage={makkahBg}
      />
      <main className="container mx-auto px-4">
        <ImageTextSection
          description={
            <>
              <p>
                Umrah is a sacred journey that holds immense significance in the hearts of all Muslims. It is a beloved Sunnah that offers a unique opportunity to refresh one’s faith and cleanse one’s soul.
              </p>
              <p className="my-1">
                In summary, the rituals of Umrah include the following steps:
              </p>
              <ul className="list-disc list-inside my-1">
                <li>Entering the state of Ihram from the Miqat.</li>
                <li>Performing Tawaf around the Ka’aba.</li>
                <li>Offering prayer at Maqam Ibrahim and drinking Zamzam.</li>
                <li>Performing Sa’i between Safa and Marwah.</li>
                <li>Shaving or trimming the hair to exit Ihram.</li>
              </ul>
            </>
          }
          reverse={false}
          colorScheme="default"
        />

        {/* Umrah Steps Section with Navigation */}
        <section className="py-12 px-4 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">Steps of Umrah</h2>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <button
              className="text-4xl text-amber-700 hover:text-amber-900 transition duration-300"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              ⬅ 
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCards.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg cursor-pointer hover:scale-105 transition duration-300"
                  onClick={() => handleCardClick(step)}
                >
                  <img src={step.image} alt={step.title} className="w-full h-60 object-cover rounded-t-xl" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="text-4xl text-amber-700 hover:text-amber-900 transition duration-300"
              onClick={handleNext}
              disabled={endIndex >= umrahSteps.length}
            >
              ➡
            </button>
          </div>
        </section>
      </main>

      {/* Modal Popup with Details */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-6 sm:p-10 relative"
            onClick={(e) => e.stopPropagation()}
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
              className="w-full max-w-md h-auto object-cover rounded-md mb-6 mx-auto"
            />

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">{selectedCard.title}</h2>

            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {selectedCard.content.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <div className="flex justify-between mt-8 max-w-2xl mx-auto">
              <button
                className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                onClick={() => {
                  const currentIndex = umrahSteps.findIndex(step => step.title === selectedCard.title);
                  const prevIndex = (currentIndex - 1 + umrahSteps.length) % umrahSteps.length;
                  setSelectedCard(umrahSteps[prevIndex]);
                }}
                disabled={umrahSteps.findIndex(step => step.title === selectedCard.title) === 0}
              >
                ⬅ Previous
              </button>

              <button
                className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                onClick={() => {
                  const currentIndex = umrahSteps.findIndex(step => step.title === selectedCard.title);
                  const nextIndex = (currentIndex + 1) % umrahSteps.length;
                  setSelectedCard(umrahSteps[nextIndex]);
                }}
                disabled={umrahSteps.findIndex(step => step.title === selectedCard.title) === umrahSteps.length - 1}
              >
                Next ➡
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Umrah;
