import React from 'react'
import { Hero,ImageTextSection,Card,PlacesCards,ContactUs } from "../components/PageComponents1";
import banner from "../assets/umrah/about2.jpg";
const packagesData = [
    {
      image: "/src/assets/umrah/umrahstd.jpg",
      title: "Umrah Package – Standard",
      description: "7-day stay, 3-star hotel, guided ziyarah, transportation included.",
    },
    {
      image: "/src/assets/umrah/umrahpre.webp",
      title: "Umrah Package – Premium",
      description: "10-day stay, 5-star hotel near Haram, VIP services, and meals.",
    },
    {
      image: "/src/assets/hajj1/hajjstd.jpg",
      title: "Hajj Package – Economy",
      description: "Economical Hajj with group guidance, 14 days, shared rooms.",
    },
    {
      image: "/src/assets/hajj1/hajjpre.jpg",
      title: "Hajj Package – Deluxe",
      description: "Luxury accommodation, private transport, scholar-led journey.",
    },
  ];
  
// Filter data
const umrahPackages = packagesData.filter(pkg => pkg.title.toLowerCase().includes("umrah"));
const hajjPackages = packagesData.filter(pkg => pkg.title.toLowerCase().includes("hajj"));

 function Aboutus() {
  return (
    <>
      <Hero
        title="Reconnect with Your Faith, Let Us Guide You"
        description="Begin your sacred journey with confidence, comfort, and care."
        backgroundImage={banner}
      />

      <ImageTextSection
        title="About Us"
        description="At Next Stop: Haramain, we believe every pilgrimage should be spiritually fulfilling and stress-free. 
        We provide personalized Umrah and Hajj packages designed to cater to your spiritual and travel needs. 
        Our mission is to simplify your journey so you can focus on your faith."
        colorScheme="alt"
      />

      <div className="bg-gray-100 py-12 px-4 md:px-12 text-center">
        <h2 className="text-6xl font-bold mb-8">Our Vision & Mission</h2>
        <div className="flex md:flex justify-center gap-6">
          <Card
            title="Our Vision"
            description="To be the leading provider of spiritually enriching, hassle-free journeys to Makkah and Madinah."
            link="#"
          />
          <Card
            title="Our Mission"
            description="To offer personalized pilgrimage packages with a focus on customer satisfaction, safety, and a transformative spiritual experience."
            link="#"
          />
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4 md:px-12 flex flex-col items-center space-y-12">
        <div className="text-center w-full max-w-7xl">
          <PlacesCards places={umrahPackages} title="Umrah Packages" />
        </div>
        <div className="text-center w-full max-w-7xl">
          <PlacesCards places={hajjPackages} title="Hajj Packages" />
        </div>
      </div>
      {window.scrollTo(0, 0)}

      <ContactUs />
    </>
  );
}
export default Aboutus
