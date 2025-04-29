import React from 'react';
import { HeroSection, ImageTextSection, PlacesCards } from '../components/PageComponents1';
import madinaBg from "../assets/madina/madina.jpg";
import MadinaPlaces from './rp2';
import madinaHBg from "../assets/madina/history.jpg";
import door from "../assets/madina/masjid-al-nabawi.jpg";
import uhud from "../assets/madina/uhud.jpg";
import noor from "../assets/makkah/noor.jpg";
import quba from "../assets/madina/quba.jpg";
import qiblatain from "../assets/madina/qiblatain.jpg"
import baqi from "../assets/madina/baqi.jpg";
import jummah from "../assets/madina/jummah.jpg";
import ghamama from "../assets/madina/ghamamah.jpg";
import abu from "../assets/madina/Masjid_Abu_Bakr.jpg";
import omar from "../assets/madina/omar.jpg";
import { Link } from 'react-router-dom';

const MadinaPage = () => {
  return (
  <div>
        <HeroSection
          title="Welcome to Madina!"
          subtitle="The sacred heart of Islam, The Prophet's City (مدينة النبي)"
          backgroundImage={madinaBg}
        />
  
        <ImageTextSection
          
          description="Madinah, officially known as al-Madinah al-Munawwarah (Arabic: المدينة المنورة, meaning The Enlightened City), is the capital of Medina Province in western Saudi Arabia. It is one of the most sacred and historically significant cities in Islam, second only to Makkah. Before the arrival of Islam, it was known as Yathrib, a name still mentioned in the Quran. With a population of over 1.4 million as of 2022, Madinah is a spiritual, cultural, and religious center. It covers 589 km², consisting of urban areas, valleys, mountains, and farmlands. About 58% of the population are Saudi nationals, while the rest are foreign residents. The city is most renowned for Al-Masjid an-Nabawi (The Prophet’s Mosque), built by Prophet Muhammad in 622 CE. It is the location of his burial site, and Muslims from around the world visit it during a pilgrimage called Ziyarat. Although not mandatory like Hajj, Ziyarat holds great spiritual significance.Madinah played a vital role in the early spread of Islam and is often regarded as the cradle of Islamic civilization, serving as the Prophet's base for religious, social, and political leadership."
          reverse={false}
          colorScheme="default" 
        />
  
        <ImageTextSection
          
          title="History of Madina"
          image={madinaHBg}
          description={`Before Islam, Madinah was called Yathrib, inhabited by Arab tribes (Aws, Khazraj) and Jewish tribes (Banu Qurayza, Banu Nadir, Banu Qaynuqa), with a strong agricultural economy but internal conflicts.  
In 622 CE, Prophet Muhammad ﷺ migrated to Yathrib (Hijrah), where the people welcomed him and embraced Islam.  
Yathrib was renamed Madinat an-Nabī ("City of the Prophet") after Prophet Muhammad ﷺ’s arrival.  
In Madinah, the Prophet ﷺ founded the first Islamic state and built Al-Masjid an-Nabawi, the center of the Muslim community.  
Important battles (Badr, Uhud, Trench) took place, and after the Prophet’s death in 632 CE, Madinah became and remains a major spiritual center.`}
          colorScheme="alt"
        />
  
  {window.scrollTo(0, 0)}
        {/* <PlacesCards
          title="Places to Visit in Madina"
          description="Makkah is not only a spiritual center but also a city rich in history and culture. Here are some must-visit places in Makkah:"
          places={[
            {
              title: `Al-Masjid an-Nabawi(Prophet's Mosque)`,
              image: door,
              description: "Madina is esteemed as the second holiest city in Islam, after the blessed Makkah City",
            },
            {
              title: "Jabal E Uhud (Mount Uhud)",
              image: uhud,
              description: "A Symbol of Faith and Sacrifice",
            },
            {
              title: "Masjid E Qiblatain (Mosque of Two Qiblas)",
              image: qiblatain,
              description: "The site where the Qibla (direction of prayer) was divinely changed from Jerusalem to Makkah during the Prophet's time.",
            },
            {
              title: "Masjid E Quba (Quba Mosque)",
              image: quba,
              description: "The first mosque built in Islam, located in the outskirts of Madinah. It was established by the Prophet Muhammad during his migration from Mecca to Medina.",
            },
            {
              title: "Jannat al-Baqī (Cemetery of Baqi)",
              image: baqi,
              description: "The cemetery adjacent to the Prophet's Mosque, where many of the Prophet's family and companions are buried.",
            },
            {
              title: "Masjid al-Jummah (Friday Mosque)",
              image: jummah,
              description: "Site where the Prophet ﷺ led his first Friday prayer after migrating to Madinah.",
            },
            {
              title:"Masjid al-Ghamama",
              image: ghamama,
              description: "Site where Prophet Muhammad ﷺ performed Eid prayers and offered Salat al-Istisqa (prayer for rain).",
            },
            {
              title:"Masjid Abu Bakr",
              image: abu,
              description: "Associated with Abu Bakr as-Siddiq (RA), who used to lead Eid and regular prayers there",
            },
            {
              title:"Masjid Ali bin Abi Talib",
              image: noor,
              description: "Attributed to Caliph Ali (RA), the fourth Caliph of Islam. Highlights the leadership and legacy of Ahl al-Bayt (the Prophet’s family).",
            },
            {
              title:"Masjid Umar bin al-Khattab ",
              image: omar,
              description: "Named after the second Caliph, Umar ibn al-Khattab (RA). Reflects his administrative reforms and contributions to Islam",
            },
            {
              title:"Masjid Uthman bin Affan",
              image: noor,
              description: "Named after the third Caliph, Uthman ibn Affan (RA).",
            },
            {
              title:"Masjid al-Ijabah",
              image: noor,
              description: "Place where Prophet Muhammad ﷺ’s three specific prayers were accepted by Allah. Known for the special du'as made and accepted there.",
            },
            {
              title:"Masjid Bani Haram",
              image: noor,
              description: "A place where Prophet Muhammad ﷺ stayed and prayed during the digging of the Trench. Linked to the Battle of the Trench (Khandaq), showing the unity and struggle of Muslims.",
            },
            {
              title:"Masjid Fath (Victory Mosque) – on Mount Salaa",
              image: noor,
              description: "Associated with the Battle of the Trench and the prayers made for victory. A symbol of divine support and victory through prayer and strategy.",
            },
          ]} */}
        {/* /> */}
          <MadinaPlaces />
      </div>
    );
};

export default MadinaPage;
