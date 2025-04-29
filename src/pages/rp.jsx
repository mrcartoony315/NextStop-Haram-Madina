import React, { useEffect, useState } from "react";
import ExpandableCard from "../pages/excomponet";

const MakkahPlaces = () => { 
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/makkah.json")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch places:", err);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const root = document.documentElement;
      if (window.innerWidth < 640) {
        root.style.setProperty("--grid-cols", "1");
      } else if (window.innerWidth < 768) {
        root.style.setProperty("--grid-cols", "2");
      } else {
        root.style.setProperty("--grid-cols", "3");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (loading) {
    return <div className="text-center py-12 text-lg">Loading places...</div>;
  }

  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Places to Visit in Makkah</h2>
      <div
        className="grid gap-8 justify-items-center"
        style={{
          gridTemplateColumns: `repeat(var(--grid-cols, 1), minmax(0, 1fr))`,
        }}
      >
        {places.map((place) => (
          <ExpandableCard key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
};

export default MakkahPlaces;
