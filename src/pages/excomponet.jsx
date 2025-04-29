import React, { useState } from "react";

const ExpandableCard = ({ place }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300 w-full max-w-sm"
        onClick={() => setExpanded(true)}
      >
        <img src={place.image} alt={place.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
          <p className="text-gray-600 text-sm">{place.shortDescription}</p>
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative bg-white w-[90%] md:w-[70%] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-3 py-1 rounded"
              onClick={() => setExpanded(false)}
            >
              ← Back
            </button>

            <img src={place?.heroImage} alt={place.title} className="rounded-lg mb-6 w-full object-cover max-h-80" />
            <h2 className="text-3xl font-bold mb-4">{place.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{place.fullDescription1}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{place.fullDescription2}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{place.fullDescription3}</p>

            {place.gallery?.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {place.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${place.title} ${idx + 1}`}
                      className="rounded-lg object-cover w-full h-40 hover:scale-105 transition-transform"
                    />
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

export default ExpandableCard;
