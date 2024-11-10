"use client";
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      anchorPlacement: 'top-center',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-900 to-red-900 text-white min-h-screen flex items-center">
        <Head>
          <title>Best Computer Store</title>
          <meta name="description" content="Shop the best gaming PCs in Pakistan." />
        </Head>

        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">

          <div
            className="flex-1 text-center md:text-left space-y-6"
            data-aos="fade-right"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-gray-200">Best</span> <br />
              <span className="text-red-500">Computer Store</span> <br />
              <span className="text-gray-200">In Pakistan</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300" data-aos="fade-up">
              Shop the latest gaming PCs from one of the best computer stores in Pakistan at reasonable prices.
            </p>
            <div className="flex justify-center md:justify-start space-x-4" data-aos="fade-up">
              <button className="bg-red-600 px-4 sm:px-6 py-2 sm:py-3 text-white rounded-full font-semibold hover:bg-red-700 transition">
                Shop Prebuilds
              </button>
              <button className="border-2 border-red-600 px-4 sm:px-6 py-2 sm:py-3 text-red-600 rounded-full font-semibold hover:bg-red-600 hover:text-white transition">
                Shop Custom PCs
              </button>
            </div>
          </div>


          <div
            className="flex-1 max-w-full sm:max-w-md mx-auto mt-8 md:mt-0"
            data-aos="zoom-in"
          >
            <img
              src="pccc.png"
              alt="Gaming PC"
              className="w-full rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
