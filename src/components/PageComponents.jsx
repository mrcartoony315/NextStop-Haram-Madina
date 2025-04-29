import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
//herosection
export const HeroSection = ({ title, subtitle, backgroundImage }) => {
 const [scrollY, setScrollY] = useState(0);
 useMemo(() => {
 const handleScroll = () => {
 setScrollY(window.scrollY);
 };
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);
 const heroHeight = window.innerHeight * 0.8; // Dynamic 80vh
 const cappedScroll = Math.min(scrollY, heroHeight);
 const translateY = cappedScroll; // scroll directly controls vertical drop
 const opacity = 1 - cappedScroll / heroHeight;
 return (
 <div
 className="relative h-[80vh] bg-cover bg-center text-white overflow-hidden"
 style={{ backgroundImage: `url(${backgroundImage})` }}
 >
 <div className="absolute inset-0 bg-black/50 z-0" />
 <div
 className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-3xl text-center
px-4 transition-all duration-100 ease-out"
 style={{
 transform: `translate(-50%, ${translateY}px)`,
 opacity,
 }}
 >
 <h1 className="text-4xl md:text-7xl font-bold mb-4">{title}</h1>
 <p className="text-lg md:text-xl">{subtitle}</p>
 </div>
 </div>
 );
};
//section for displaying an image and text side by side
export const ImageTextSection = ({
 image = null,
 title = null,
 title1 = null,
 description,
 reverse = false,
 colorScheme = "default",
}) => {
 const bgColor =
 colorScheme === "alt"
 ? "bg-gray-900 text-white"
 : "bg-white text-gray-800";
 const textColor = colorScheme === "alt" ? "text-white" : "text-gray-800";
 return (
 <div className={`px-6 py-10 my-10 ${bgColor}`}>
 {title && (
 <h2
 className={`text-3xl font-bold mb-6 mt-6 ${
 image ? "text-center" : ""
 } ${textColor}`}
 >
 {title}
 </h2>
 )}
 <div
 className={`flex flex-col md:flex-row ${
 reverse ? "md:flex-row-reverse" : ""
 } items-center gap-8`}
 style={{ maxHeight: "600px" }}
 >
 {image && (
 <div className="md:w-2/5 h-full">
 <img
 src={image}
 alt={title || "Image"}
 className="w-full object-cover rounded-xl shadow-md max-h-[500px]"
 />
 </div>
 )}
 <div
 className={`flex-1 ${image ? "md:w-3/5" : ""} h-full flex items-center`}
 >
 <p
 className={`leading-relaxed text-justify ${textColor} whitespace-pre-line`}
 >
 {description}
 </p>
 </div>
 </div>
 </div>
 );
};
//👈import useNavigate
// HeroSection and ImageTextSection remain unchanged...
// Related Places Cards
export const PlacesCards = ({ places = [], title = "Related Places" }) => {
 const navigate = useNavigate(); //👈initialize navigate
 const handleCardClick = (place) => {
 if (place.title.toLowerCase() === "hajj") {
 navigate("/hajj"); //👈navigate to Hajj page
 }
 };
 return (
 <div className="bg-gray-100 py-12 px-4 md:px-12">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
 {title}
 </h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
 {places.map((place, idx) => (
 <div
 key={idx}
 onClick={() => handleCardClick(place)} //👈attach click handler
 className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform
hover:scale-105 hover:shadow-lg cursor-pointer"
 >
 {place.image && (
 <img
 src={place.image}
 alt={place.title}
 className="w-full h-48 object-cover"
 />
 )}
 <div className="p-4">
 <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
 {place.description && (
 <p className="text-gray-600 text-sm">{place.description}</p>
 )}
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
};

export const ModalPlaceCard = ({ image, title, subtitle, content, gallery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      {/* Small Card */}
      <div
        onClick={openModal}
        className="cursor-pointer max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{subtitle}</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[90%] md:w-[70%] h-[90vh] rounded-xl overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Back Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-md z-50"
            >
              ← Back
            </button>

            {/* Hero Section */}
            <div
              className="h-64 bg-cover bg-center flex items-end text-white p-6 rounded-t-xl"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="bg-black bg-opacity-60 p-4 rounded">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-sm">{subtitle}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-gray-800 text-justify space-y-4">
              {content}
            </div>

            {/* Optional Gallery */}
            {gallery?.length > 0 && (
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={img.src}
                        alt={img.name}
                        className="rounded-md w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <p className="text-white font-semibold">{img.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};