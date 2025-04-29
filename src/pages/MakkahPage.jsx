import React from "react";
import { HeroSection,ImageTextSection,PlacesCards, ModalPlaceCard } from "../components/PageComponents1";
import Makkahplaces from "../pages/rp";
import makkahBg from "../assets/makkah/makkahbg.jpg";
import makkahg from "../assets/makkah/oldmakkah.webp";
import clocktower from "../assets/makkah/clock_tower.jpg";
import door from "../assets/makkah/door.jpeg";
import arafat from "../assets/makkah/arafat.jpg";
import noor from "../assets/makkah/noor.jpg";
import hira from "../assets/makkah/ghar_e_hira.jpg";
import thawr from "../assets/makkah/ghar_al_thawr.webp";
import aisha from "../assets/makkah/masjid_e-aisha.jpeg";
import albaya from "../assets/makkah/albaya.jpg";
import hudaibiyah from "../assets/makkah/hudebiya_Mosque.jpeg";
import aisharajhi from "../assets/makkah/aisha_al_rajhi.jpg";
import nimra from "../assets/makkah/Masjid-Nimrah.webp";
import mu from "../assets/makkah/Jannat_al-Mu'alla.jpg";
import mina from "../assets/makkah/mina_tent.jpg";
import muz from "../assets/makkah/muzdalifah.jpeg";
import bridge from "../assets/makkah/jamarat_al_Bridge.jpg";
// import kaabaImg from "../assets/makkah/kaaba.jpeg";




const MakkahPage = () => {
  return (
    <div>
      <HeroSection
        title="Welcome to Makkah!"
        subtitle="The sacred heart of Islam, home to the Kaaba"
        backgroundImage={makkahBg}
      />

      <ImageTextSection
        
        description="Makkah, often referred to as Mecca in the Western world, holds unparalleled significance in the Islamic faith, being the most sacred city for Muslims worldwide. It is the birthplace of the Prophet Muhammad, the final messenger in Islam, and is home to the Kaaba, the cubic structure that is the focal point of Masjid al-Haram, the largest and holiest mosque in the world. The Kaaba, an ancient structure believed to have been built by Prophet Ibrahim (Abraham) and his son Prophet Ismail (Ishmael), stands as the direction (Qibla) towards which all Muslims face during their five daily prayers. Makkah is also the site of the annual Hajj pilgrimage, one of the five pillars of Islam. Every year, millions of Muslims from across the globe converge on this sacred city to fulfill their religious duty. This pilgrimage, performed at least once in a lifetime by every Muslim who is physically and financially able, involves various rites and rituals that symbolize the unity of the Muslim Ummah (community) and their submission to the will of Allah (God). Additionally, Makkah plays a critical role in the lives of Muslims year-round, as it remains a center of worship and spiritual reflection, with the Umrah pilgrimage being performed at any time outside of the specific days of Hajj."
        reverse={false}
        colorScheme="default" 
      />

      <ImageTextSection
        
        title="History of Makkah"
        image={makkahg}
        description={`Makkah’s history dates back to ancient times, originally settled by the Jurhum tribe.
Prophet Ibrahim built the Kaaba as a place of worship.
Makkah grew into a major trade hub.
Before Islam, various tribes worshipped their idols at Kaaba.
Prophet Muhammad received the first revelation at 40.
For 13 years, Prophet Muhammad faced opposition in Makkah.`}
        colorScheme="alt"
      />



      <ImageTextSection
        image={clocktower}
        title="Cultural and Spiritual Influence"
        description={`Makkah’s influence extends globally as the heart of Islamic culture and spirituality.

The teachings of Islam from Makkah have shaped the lives, thoughts, and worship of millions of Muslims.

Makkah holds unmatched reverence as the birthplace of Islam and the home of the Kaaba.

Makkah inspires Islamic art, architecture, and calligraphy, deeply influencing religious aesthetics.

With its pilgrimages, architecture, and religious activities, Makkah stands as a powerful symbol of faith, unity, and submission to Allah.`}
        reverse={true}
      />
  {window.scrollTo(0, 0)}


      {/* <PlacesCards
        title="Places to Visit in Makkah"
        description="Makkah is not only a spiritual center but also a city rich in history and culture. Here are some must-visit places in Makkah:"
        places={[
          {
            title: "Masjid al-Haram",
            image: door,
            description: "The largest mosque in the world, surrounding the Kaaba.",
          },
          {
            title: "Mount Arafat",
            image: arafat,
            description: "A significant site during Hajj, known for its spiritual importance.",
          },
          {
            title: "Jabal al-Nour",
            image: noor,
            description: "The mountain where the Prophet Muhammad received his first revelation.",
          },
          {
            title: " Ghar-e-Hira (Cave of Hira) – The Light of Revelation",
            image: hira,
            description: "Ghar-e-Hira is a small cave located in Jabal al-Noor (Mountain of Light) near Makkah. It holds great significance in Islam as the place where Prophet Muhammad ﷺ received the first revelation from Angel Jibreel (Gabriel). The first verses of the Qur'an, Surah Al-‘Alaq, were revealed here, marking the beginning of prophethood. "

          },
          {
            title: " Ghar al-Thawr (Cave of Thawr)",
            image: thawr,
            description: "This cave sheltered the Prophet ﷺ and Abu Bakr (RA) during their Hijrah (migration) from Makkah to Madinah. A powerful symbol of trust in Allah’s protection and strategic wisdom.",
          },
          {
            title: "Masjid Aisha (RA)t",
            image: aisha,
            description: "Located in Taneem, this mosque is a Miqat (station for Ihram) for pilgrims. It’s named after Aisha (RA), the beloved wife of the Prophet ﷺ, and is a serene spot for prayer and preparation for Umrah.",
          },
          {
            title: "Bay’ah Mosque (Mosque of Allegiance)",
            image: albaya,
            description: "BBuilt where the companions pledged allegiance to the Prophet ﷺ, this mosque commemorates the unity and loyalty of the early Muslims.",
          },
          {
            title: " Hudaibiyah Mosque",
            image: hudaibiyah,
            description: "Site of the Treaty of Hudaibiyah, a pivotal moment in Islamic history. This mosque reflects the wisdom and diplomacy of the Prophet ﷺ",
          },
          {
            title: " Aisha Al Rajhi Mosque ",
            image: aisharajhi,
            description: "Its beautiful minarets and massive prayer area welcome thousands of worshippers daily, offering a modern place of devotion in the holy city.",
          },
          {
            title: "Nimra Mosque",
            image: nimra,
            description: "Located in Arafat, this mosque holds major importance during Hajj, especially for the Khutbah of Arafah. It’s a key gathering point during this sacred ritual. "

          },
          {
            title: "Jannat al-Mu'alla",
            image: mu,
            description: "The ancient cemetery where many of the Prophet’s ﷺ relatives and companions are buried. A deeply spiritual site of reflection and prayer.",
          },
          {
            title: " Mina (City of Tent) ",
            image: mina,
            description: "Known as the City of Tents, Mina comes alive during Hajj as millions of pilgrims stay here for rituals like the Stoning of the Devil.",
          },
          {
            title: "Muzdalifah",
            image: muz,
            description: "A serene valley where pilgrims rest under the open sky after Arafat, collecting pebbles for the stoning ritual. It's a time of peace and prayer. "

          },
          {
            title: " Rami al-Jamarat (Jamarat Bridge)",
            image: bridge,
            description: "This monumental site marks the symbolic act of defiance against Shaytan, where pilgrims cast stones at three pillars representing evil",
          }
          
        ]}
      /> */}

 {/* newcode */}

    {/* <section className="py-12 px-4 md:px-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">Places to Visit in Makkah</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <ModalPlaceCard
              image={makkahg}
              title="Maqam Ibrahim"
              subtitle="The stone associated with Prophet Ibrahim (AS)."
              content={
                <>
                  <p>
                    Maqam Ibrahim is the stone on which Prophet Ibrahim (AS) stood while building the Kaaba.
                    It bears his footprint and is enclosed in a crystal dome near the Kaaba.
                  </p>
                  <p>
                    Pilgrims offer two rakats of Salah behind this spot after completing the Tawaf.
                  </p>
                </>
              }
              gallery={[
                { src: makkahg, name: "Maqam Close-Up" },
                { src: makkahg, name: "Zamzam Well" },
              ]}
            />
    
            <ModalPlaceCard
              image={makkahg}
              title="Zamzam Well"
              subtitle="The blessed well that quenched Ismail’s thirst."
              content={
                <>
                  <p>
                    The Zamzam Well is a sacred water source within Masjid al-Haram. It was revealed to Hajar (AS) when she searched for water for baby Ismail.
                  </p>
                  <p>
                    Drinking Zamzam is considered Sunnah and has spiritual significance for Muslims worldwide.
                  </p>
                </>
              }
            />
          </div>
        </section> */}
    
    <Makkahplaces/>



    </div>
  );
};

export default MakkahPage;



