import React from 'react';
import img from '../Images/background/bg.jpg';

const About = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Title & Intro */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At ShopMe, we are committed to offering premium sports gear and equipment to athletes and fitness enthusiasts alike. Our mission is simple: to provide high-quality products that enhance performance and help you reach your fitness goals, whether you're training for a professional event or simply maintaining a healthy lifestyle.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid sm:grid-cols-2 gap-10 mb-16">
          {/* Mission Section */}
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <img
              src={img}
              alt="Our Mission"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Our mission is to offer top-quality, durable sports equipment designed to elevate performance at all levels. We strive to provide products that inspire athletes to push their boundaries and pursue excellence in their respective sports. With a wide range of sports gear from renowned brands, we are your go-to destination for everything you need to enhance your training and play.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
              <li>Delivering premium sports gear to athletes of all levels.</li>
              <li>Ensuring our customers have the tools to succeed in their fitness journey.</li>
              <li>Providing exceptional customer service with personalized recommendations.</li>
            </ul>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our History</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Founded in 2015, ShopMe started with a vision to bring high-quality sports equipment to the local community. What began as a small sports gear shop has now expanded to an online store serving athletes worldwide. Over the years, we’ve built a strong reputation for providing the best products, whether it’s fitness equipment, sportswear, or accessories, and have become a trusted name among athletes and fitness enthusiasts.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Integrity</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                We believe in maintaining transparency, honesty, and strong ethical practices in all our business operations.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Passion</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                Passion for sports and fitness drives everything we do. We are dedicated to inspiring and empowering athletes of all levels.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Customer Commitment</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                We focus on delivering exceptional service and personalized care to each and every customer to ensure satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our vision is to become a global leader in sports equipment, known for our innovation, quality, and dedication to athletes. We aim to empower individuals worldwide by providing the highest quality gear that enables them to perform at their best and achieve their athletic goals.
          </p>
        </div>

        {/* Contact Call-to-Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have questions or need personalized recommendations? Our team is here to assist you. Don't hesitate to reach out!
          </p>
          <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
