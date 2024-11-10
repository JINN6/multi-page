import React from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-900 text-white py-16 text-center min-h-screen flex flex-col justify-center">
        <h1 className="text-red-500 text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          Welcome to <span className="text-red-500 font-semibold">TechParts</span>, your one-stop shop for all things PC spare parts!
          We specialize in providing high-quality components for building and upgrading your computer. Whether you're a gamer,
          a professional, or just someone looking to enhance their setup, we have the right parts for you.
        </p>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          Our mission is to offer reliable, durable, and affordable PC parts with fast delivery and excellent customer service.
          We believe in giving our customers the tools to create their ideal computer system with ease and efficiency.
        </p>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Explore our wide selection of <span className="text-red-500 font-semibold">processors</span>,
          <span className="text-red-500 font-semibold">graphics cards</span>, <span className="text-red-500 font-semibold">motherboards</span>, and much more.
          Whatever your PC needs, we’ve got you covered!
        </p>
      </section>
    </div>
  );
};

export default About;
