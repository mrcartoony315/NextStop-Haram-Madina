import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="max-w-sm h-m w-full">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
