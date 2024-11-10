"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';


interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-gray-900 py-8 sm:py-12 md:py-16 min-h-screen flex flex-col justify-center px-4 sm:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-red-500">Contact Us</h1>
          <p className="text-gray-300 text-base sm:text-lg">We&apos;d love to hear from you! Fill out the form below to get in touch.</p>
        </div>

        <div className="max-w-screen-sm sm:max-w-screen-md mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-base sm:text-lg font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-base sm:text-lg font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-base sm:text-lg font-semibold">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-2 w-full p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-2 sm:py-3 bg-red-500 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
