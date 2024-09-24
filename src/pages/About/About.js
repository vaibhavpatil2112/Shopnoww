import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[900px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            SHOPNOOW
          </span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <h1 className="max-w-[900px] text-base text-lightText mb-2">
          Welcome to SHOPNOOW At SHOPNOOW, we believe that shopping should be
          more than just a transaction; it should be an experience. Founded in
          [2001], our mission is to provide you with a curated selection of
          high-quality products that enhance your lifestyle, all while ensuring
          a seamless and enjoyable shopping experience.
        </h1>
        
        <h1 className="max-w-[900px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            Our Mission
          </span>{" "}
          Our mission is simple: to bring joy and convenience to your shopping
          journey. We aim to connect you with products that inspire, empower,
          and meet your everyday needs. Whether you’re searching for the latest
          fashion trends, unique home decor, or cutting-edge technology, we’re
          here to help you find exactly what you’re looking for.
        </h1>
        <h1 className="max-w-[900px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            Our Values
          </span>{" "}
          Quality: We prioritize quality over quantity. Each product in our
          store is carefully selected to ensure that it meets our high standards
          for durability, functionality, and style. Customer-Centric Approach:
          Our customers are at the heart of everything we do. We strive to
          provide exceptional service, listening to your feedback and
          continuously improving our offerings to better serve you.
          Sustainability: We are committed to minimizing our environmental
          impact. We work with suppliers who share our values and focus on
          eco-friendly practices. From packaging to product sourcing,
          sustainability is woven into our business model. Community: We believe
          in giving back. A portion of our profits is dedicated to supporting
          local charities and community initiatives. By shopping with us, you’re
          helping to make a difference.
        </h1>
        <h1 className="max-w-[900px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            Join Our Community
          </span>{" "}
          We invite you to explore our online store and discover the amazing
          products we offer. Sign up for our newsletter to receive exclusive
          discounts, updates on new arrivals, and insights into upcoming sales.
          Connect with us on social media to join our community of fellow
          shoppers who share a passion for quality and style.
        </h1>
        <h1 className="max-w-[900px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            Thank You for Choosing SHOPNOOW
          </span>{" "}
          We appreciate your support and trust in us as your go-to shopping
          destination. Your satisfaction is our top priority, and we are
          committed to providing you with the best products and experiences.
          Thank you for being a part of the SHOPNOOW family
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

export default About;
