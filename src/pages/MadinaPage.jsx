import React from 'react';
import { HeroSection, ImageTextSection, PlacesCards } from '../components/PageComponents';
import madinaBg from "../assets/madina/madina.jpg";
import madinaHBg from "../assets/madina/history.jpg";
import door from "../assets/madina/masjid-al-nabawi.jpg";
import uhud from "../assets/madina/uhud.jpg";
import noor from "../assets/makkah/noor.jpg";
import quba from "../assets/madina/quba.jpg";

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
          description={`
Before the advent of Islam, Madinah was known as Yathrib. It was an oasis city inhabited by several Arab tribes, notably the Aws and Khazraj, along with Jewish tribes like Banu Qurayza, Banu Nadir, and Banu Qaynuqa. The city had a well-developed agricultural system, with date palm plantations and water wells, and was known for its prosperity. However, internal conflicts and tribal wars often disrupted peace in the region.

A major turning point in Madinah’s history occurred in 622 CE, when Prophet Muhammad ﷺ migrated from Makkah to Yathrib in an event known as the Hijrah. This migration marks the beginning of the Islamic calendar. The people of Yathrib, especially from the Aws and Khazraj tribes, welcomed the Prophet and accepted Islam. After his arrival, the city became known as Madīnat an-Nabī (The City of the Prophet), and later simply Madinah.

In Madinah, Prophet Muhammad ﷺ established the foundations of the first Islamic state. He built Al-Masjid an-Nabawi (The Prophet’s Mosque), which became the religious and political center of the growing Muslim community. One of the Prophet's key achievements was the drafting of the Constitution of Madinah, a formal agreement that united Muslims, Jews, and other communities under a common legal and social framework. This document is considered one of the earliest examples of a pluralistic society with mutual rights and responsibilities.

During the Prophet’s lifetime in Madinah, several significant battles took place, including the Battle of Badr (624 CE), the Battle of Uhud (625 CE), and the Battle of the Trench (627 CE). These battles were critical in defending the Muslim community and strengthening its position in the Arabian Peninsula.

After the Prophet's passing in 632 CE, he was buried in his home adjacent to Al-Masjid an-Nabawi. This spot became one of the holiest sites in Islam. The city remained the capital of the Islamic Caliphate during the rule of the Rightly Guided Caliphs, including Abu Bakr, Umar, Uthman, and Ali. Though the political center of Islam eventually shifted to other cities like Damascus and Baghdad, Madinah retained its spiritual and religious importance.

Throughout Islamic history, Madinah has been a center of Islamic scholarship, home to many great scholars, narrators of hadith, and jurists. In the modern era, under the Kingdom of Saudi Arabia, the city has seen significant development, including major expansions of the Prophet’s Mosque to accommodate millions of pilgrims annually, especially during Hajj and Umrah.

Today, Madinah stands not only as a historical landmark but as a vibrant symbol of Islamic unity, peace, and devotion.
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
              image: noor,
              description: "The site where the Qibla (direction of prayer) was divinely changed from Jerusalem to Makkah during the Prophet's time.",
            },
            {
              title: "Masjid E Quba (Quba Mosque)",
              image: quba,
              description: "The first mosque built in Islam, located in the outskirts of Madinah. It was established by the Prophet Muhammad during his migration from Mecca to Medina.",
            },
            {
              title: "Jannat al-Baqī (Cemetery of Baqi)",
              image: noor,
              description: "The cemetery adjacent to the Prophet's Mosque, where many of the Prophet's family and companions are buried.",
            },
            {
              title: "Masjid al-Jummah (Friday Mosque)",
              image: noor,
              description: "Site where the Prophet ﷺ led his first Friday prayer after migrating to Madinah.",
            },
            {
              title:"Masjid al-Ghamama",
              image: noor,
              description: "Site where Prophet Muhammad ﷺ performed Eid prayers and offered Salat al-Istisqa (prayer for rain).",
            },
            {
              title:"Masjid Abu Bakr",
              image: noor,
              description: "Associated with Abu Bakr as-Siddiq (RA), who used to lead Eid and regular prayers there",
            },
            {
              title:"Masjid Ali bin Abi Talib",
              image: noor,
              description: "Attributed to Caliph Ali (RA), the fourth Caliph of Islam. Highlights the leadership and legacy of Ahl al-Bayt (the Prophet’s family).",
            },
            {
              title:"Masjid Umar bin al-Khattab ",
              image: noor,
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
          ]}
        />
  
  
      </div>
    );
};

export default MadinaPage;
