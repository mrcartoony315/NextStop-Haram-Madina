import React from "react";
import { HeroSection,ImageTextSection,PlacesCards } from "../components/PageComponents";
import makkahBg from "../assets/makkah/masjid_al_jharam-nightview.jpg";
import makkahg from "../assets/makkah/oldmakkah.webp";
// import clocktower from "../assets/makkah/clock_tower.jpg";
import door from "../assets/makkah/door.jpeg";
import arafat from "../assets/makkah/arafat.jpg";
import noor from "../assets/makkah/noor.jpg";

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
        description={`Makkah’s historical roots extend deep into ancient times, long before the rise of Islam. The city is believed to have been a settlement of the Jurhum tribe, who were descendants of the prophet Ibrahim (Abraham) and his son Ismail (Ishmael). According to Islamic tradition, it was Ibrahim who, under God's command, built the Kaaba as a place of worship dedicated to the One true God. Over time, Makkah evolved into a center of trade due to its strategic location at the crossroads of key Arabian trade routes. The city flourished as a commercial hub, and the Kaaba attracted visitors from various tribes who came to worship their own gods in the surrounding sacred area. This practice continued until the arrival of Islam in the 7th century.

      It was in Makkah that the Prophet Muhammad received his first revelation from Allah at the age of 40, marking the beginning of a transformative era not only for the city but for the entire world. For the first 13 years of his prophethood, the Prophet Muhammad preached Islam in Makkah, facing opposition and persecution from the ruling Quraysh tribe, who were opposed to his monotheistic teachings.
      `}
        colorScheme="alt"
      />



      {/* <ImageTextSection
        image={clocktower}
        title="Cultural and Spiritual Influence"
        description={`
          The influence of Makkah extends far beyond its geographical boundaries. It is the heart of Islamic culture and spirituality, and its impact can be felt in various aspects of life across the Muslim world. The teachings of Islam, as imparted by the Prophet Muhammad in Makkah, have shaped the way millions of Muslims live, think, and worship.
        The city continues to be a source of spiritual guidance for Muslims of all ages. Its status as the birthplace of Islam and the location of the Kaaba gives it an unmatched reverence. Makkah also plays a key role in the cultural exchange among Muslims, with pilgrims coming from different countries, bringing with them a diversity of languages, customs, and traditions. 
        
        This global aspect of Makkah enhances its spiritual significance, as it symbolizes the unity of the Ummah, transcending national, racial, and linguistic barriers.
        
        In addition to religious practices, Makkah influences Islamic art, architecture, and calligraphy, with numerous mosques, monuments, and religious texts inspired by its sacred heritage. 
        The constant flow of pilgrims, the architectural marvels, and the religious activities all contribute to Makkah's position as not just a city but as a profound symbol of faith, unity, and submission to Allah`}
        reverse={true}
      /> */}


      <PlacesCards
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
            image: noor,
            description: "Ghar-e-Hira is a small cave located in Jabal al-Noor (Mountain of Light) near Makkah. It holds great significance in Islam as the place where Prophet Muhammad ﷺ received the first revelation from Angel Jibreel (Gabriel). The first verses of the Qur'an, Surah Al-‘Alaq, were revealed here, marking the beginning of prophethood. "

          },
          {
            title: " Ghar al-Thawr (Cave of Thawr)",
            image: door,
            description: "This cave sheltered the Prophet ﷺ and Abu Bakr (RA) during their Hijrah (migration) from Makkah to Madinah. A powerful symbol of trust in Allah’s protection and strategic wisdom.",
          },
          {
            title: "Masjid Aisha (RA)t",
            image: arafat,
            description: "Located in Taneem, this mosque is a Miqat (station for Ihram) for pilgrims. It’s named after Aisha (RA), the beloved wife of the Prophet ﷺ, and is a serene spot for prayer and preparation for Umrah.",
          },
          {
            title: "Bay’ah Mosque (Mosque of Allegiance)",
            image: noor,
            description: "BBuilt where the companions pledged allegiance to the Prophet ﷺ, this mosque commemorates the unity and loyalty of the early Muslims.",
          },
          {
            title: " Hudaibiyah Mosque",
            image: door,
            description: "Site of the Treaty of Hudaibiyah, a pivotal moment in Islamic history. This mosque reflects the wisdom and diplomacy of the Prophet ﷺ",
          },
          {
            title: " Aisha Al Rajhi Mosque ",
            image: arafat,
            description: "Its beautiful minarets and massive prayer area welcome thousands of worshippers daily, offering a modern place of devotion in the holy city.",
          },
          {
            title: "Namra Mosque",
            image: noor,
            description: "Located in Arafat, this mosque holds major importance during Hajj, especially for the Khutbah of Arafah. It’s a key gathering point during this sacred ritual. "

          },
          {
            title: "Jannat al-Mu'alla",
            image: door,
            description: "The ancient cemetery where many of the Prophet’s ﷺ relatives and companions are buried. A deeply spiritual site of reflection and prayer.",
          },
          {
            title: " Mina (City of Tent) ",
            image: arafat,
            description: "Known as the City of Tents, Mina comes alive during Hajj as millions of pilgrims stay here for rituals like the Stoning of the Devil.",
          },
          {
            title: "Muzdalifah",
            image: noor,
            description: "A serene valley where pilgrims rest under the open sky after Arafat, collecting pebbles for the stoning ritual. It's a time of peace and prayer. "

          },
          {
            title: " Rami al-Jamarat (Jamarat Bridge)",
            image: door,
            description: "This monumental site marks the symbolic act of defiance against Shaytan, where pilgrims cast stones at three pillars representing evil",
          }
          
        ]}
      />


    </div>
  );
};

export default MakkahPage;



