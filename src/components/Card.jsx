import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description1, description2, link }) => {
  return (
    <Link to={link} className="max-w-sm h-m w-full">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
        <img src={image} alt={title} className="w-150 h-50 object-cover" />
        <div className="p-4">
          <h3 className="text-5xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-2xl overflow-hidden">{description1}</p>
          <p className="text-gray-600 text-2xl overflow-hidden">{description2}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
