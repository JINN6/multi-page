import React from 'react';
import Navbar from '@/components/Navbar';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-red-500">Shop Our Products</h1>
          <p className="text-gray-300 text-lg">Browse our exclusive selection of high-performance gaming PCs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-6">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-xl">
            <div className="w-full h-56 sm:h-64 md:h-72">
              <img
                src="pc1.webp"
                alt="Gaming PC 1"
                className="w-full h-full object-cover transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Gaming PC 1</h3>
              <p className="text-lg text-red-500">$999</p>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-xl">
            <div className="w-full h-56 sm:h-64 md:h-72">
              <img
                src="pc5.webp"
                alt="Gaming PC 2"
                className="w-full h-full object-cover transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Gaming PC 2</h3>
              <p className="text-lg text-red-500">$1200</p>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-xl">
            <div className="w-full h-56 sm:h-64 md:h-72">
              <img
                src="pc6.webp"
                alt="Gaming PC 3"
                className="w-full h-full object-cover transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Gaming PC 3</h3>
              <p className="text-lg text-red-500">$1500</p>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-xl">
            <div className="w-full h-56 sm:h-64 md:h-72">
              <img
                src="pc7.webp"
                alt="Gaming PC 4"
                className="w-full h-full object-cover transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Gaming PC 4</h3>
              <p className="text-lg text-red-500">$1800</p>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-xl">
            <div className="w-full h-56 sm:h-64 md:h-72">
              <img
                src="pc8.jpg"
                alt="Gaming PC 5"
                className="w-full h-full object-cover transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Gaming PC 5</h3>
              <p className="text-lg text-red-500">$2000</p>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:bg-red-500 hover:shadow-xl">
            <div className="w-full h-56 sm:h-64 md:h-72">
              <img
                src="pc9.jpg"
                alt="Gaming PC 6"
                className="w-full h-full object-cover transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Gaming PC 6</h3>
              <p className="text-lg text-red-500">$2200</p>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
