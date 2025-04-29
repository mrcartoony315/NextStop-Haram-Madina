import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, FormLabel, TextField, TextareaAutosize } from "@mui/material";
// import { HiOutlineMail } from "react-icons/hi"; // Icon for email

//homepage card
export const Card = ({ image, title, description, link,minHeight = "min-h-[250px]" }) => {
  return (
    <Link to={link} className="max-w-lg w-full ">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-4xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-2xl">{description}</p>
        </div>
      </div>
    </Link>
  );
};
//hero without scroll


export const Hero = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section
      className="bg-cover bg-center min-h-[70vh] md:min-h-[80vh] flex relative  h-500items-end justify-center  text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-opacity-50 p-6 md:p-8 rounded-xl m-4 max-w-xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg mb-6">{description}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="bg-yellow-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-md font-semibold hover:bg-black transition duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};




 //herosection   
export const HeroSection = ({ title, subtitle, backgroundImage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
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
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-3xl text-center px-4 transition-all duration-100 ease-out"
        style={{
          transform: `translate(-50%, ${translateY}px)`,
          opacity,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-3xl">{subtitle}</p>
      </div>
    </div>
  );
};

//section for displaying an image and text side by side
export const ImageTextSection = ({
  image = null,
  title = null,
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
    <div className={`px-6 py-10 ${bgColor}`}>
      {title && (
        <h2
          className={`text-6xl text-center font-bold mb-6 ${
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
          <div className="md:w-1/5 h-full">
            <img
              src={image}
              alt={title || "Image"}
              className="w-full object-cover rounded-xl shadow-md max-h-[500px]"
            />
          </div>
        )}

<div className={`flex-1 ${image ? "md:w-3/5" : ""} h-full flex items-center text-4xl`}>
  <div className="leading-relaxed text-left ml-15">
    {Array.isArray(description) ? (
      <ul className={`${textColor} list-none list-inside text-3xl space-y-4`}>
        {description.map((point, index) => (
          <li key={index}>
            {point}
          </li>
        ))}
      </ul>
    ) : typeof description === 'string' ? (
      <ul className={`${textColor} list-none list-inside text-3xl space-y-4`}>
        {description.split('\n').map((point, index) => (
          <li key={index}>
            {point}
          </li>
        ))}
      </ul>
    ) : (
      <p className={`${textColor} text-3xl`}>
        No valid description provided.
      </p>
    )}
  </div>
</div>
{window.scrollTo(0, 0)}

      </div>
    </div>
  );
};

//related places cards 
export const PlacesCards = ({ title, places }) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {places.map((place, index) => (
          <Card
            key={index}
            image={place.image}
            title={place.title}
            description={place.description}
            link={place.link || "#"}
          />
        ))}
      </div>
    </div>
  );
};

//newcode
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
        <img src={image} alt={title} className="w-full h-48 overflow-hidden object-cover" />
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
            className="bg-white w-[max] md:w-[70%] h-[90vh] rounded-xl overflow-y-auto relative"
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
// Contact Us Form




export const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        <form action="#" method="POST">
          {/* Name field */}
          <div className="mb-6">
            <FormLabel htmlFor="name" className="mb-2 block text-gray-800">
              Your Name
            </FormLabel>
            <TextField
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Phone number field */}
          <div className="mb-6">
            <FormLabel htmlFor="phone" className="mb-2 block text-gray-800">
              Phone Number
            </FormLabel>
            <TextField
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              type="tel"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Email field */}
          <div className="mb-6">
            <FormLabel htmlFor="email" className="mb-2 block text-gray-800">
              Your Email
            </FormLabel>
            <TextField
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Message field */}
          <div className="mb-6">
            <FormLabel htmlFor="message" className="mb-2 block text-gray-800">
              Your Message
            </FormLabel>
            <TextareaAutosize
              id="message"
              name="message"
              placeholder="Your message..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
          >
            Send Message
          </Button>
        </form>


      </div>
    </div>
  );
};