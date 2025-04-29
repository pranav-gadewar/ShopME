import React from "react";
import Img1 from "../Images/gym/gymw.jpg";
import Img2 from "../Images/football/footballw.jpg";
import Img3 from "../Images/hockey/Hockeyw.jpg";
import Img4 from "../Images/badminton/Badmintonw.jpg";
import Img5 from "../Images/basketball/Basketballw.jpg";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // To handle redirects

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Gym",
    rating: 5.0,
    color: "Fitness Essentials",
    aosDelay: "0",
    link: "/Sports",
  },
  {
    id: 2,
    img: Img2,
    title: "Football",
    rating: 4.9,
    color: "Gear for the pitch",
    aosDelay: "200",
    link: "/Sports",
  },
  {
    id: 3,
    img: Img3,
    title: "Hockey",
    rating: 4.8,
    color: "Stick, ball & more",
    aosDelay: "400",
    link: "/Sports",
  },
  {
    id: 4,
    img: Img4,
    title: "Badminton",
    rating: 4.7,
    color: "Rackets & accessories",
    aosDelay: "600",
    link: "/Sports",
  },
  {
    id: 5,
    img: Img5,
    title: "Basketball",
    rating: 4.6,
    color: "Court-ready gear",
    aosDelay: "800",
    link: "/Sports",
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Best Sports Gear for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Sports Categories
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore top categories tailored to your sport. Click to dive into Gym, Football, Hockey, and more.
          </p>
        </div>

        {/* Categories Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                onClick={() => navigate(data.link)}
                className="space-y-3 cursor-pointer hover:scale-105 transition-all"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/sports")} // Navigate to /sports on button click
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
            >
              View All Sports Gear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
