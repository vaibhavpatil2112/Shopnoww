import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[90%] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            1. The Journey of a Product: From Concept to Shelf
          </span>{" "}
          <br></br>
          Explore the process of how products are chosen for your store. Discuss
          sourcing, quality checks, and the story behind some unique items.
          Highlight what makes them special.
        </h1>
        <h1 className="max-w-[90%] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            2. Sustainable Shopping: Our Commitment to the Planet
          </span>{" "}
          <br></br>
          Share your store's sustainability practices, such as eco-friendly
          packaging, sustainable sourcing, and partnerships with green brands.
          Include tips for customers on how they can shop sustainably.
        </h1>
        <h1 className="max-w-[90%] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            3. Style Guide: How to Choose the Perfect Outfit for Every Occasion
          </span>{" "}
          <br></br>
          Provide styling tips for different occasions (e.g., weddings, casual
          outings, work events) using products from your store. Include fashion
          trends and how your products fit into those trends.
        </h1>
        <h1 className="max-w-[90%] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            4. Behind the Scenes: Meet the Team
          </span>{" "}
          <br></br>
          Introduce your team members with short bios and their roles. Share what
          they love about the store, their favorite products, and fun facts.
          This personal touch helps customers connect with your brand.
        </h1>
        <h1 className="max-w-[90%] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            5. Customer Spotlight: Real Stories from Our Community
          </span>{" "}
          <br></br>
          Feature testimonials or stories from satisfied customers who share how
          your products have enhanced their lives. Include photos if possible to
          create a more engaging narrative.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
