import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Hero from "../Hero/Hero"; // Adjusted based on your directory structure

const Contact = () => {
  return (
    <>
      {/* Hero slider section */}
      <Hero />

      {/* Contact section */}
      <div className="py-16 px-4 bg-gray-50 dark:bg-slate-900 dark:text-white duration-200">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have questions or need help? Reach out to us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-md transition-all duration-200"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Sports Street, Fitness City, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-primary text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-primary text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    support@sportsshop.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
