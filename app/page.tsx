import React from 'react';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lag2Launch</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#shop" className="hover:text-gray-400">Shop</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center p-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Custom JDM Gear & Merch</h2>
          <p className="mb-6 text-lg">
            Bringing the best Japanese car culture merchandise straight to your garage.
          </p>
          <a
            href="#shop"
            className="bg-white text-purple-700 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/car-hero.png"
            alt="JDM Car"
            className="w-80 h-auto rounded shadow-lg"
          />
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="p-12 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Card */}
          <div className="bg-white rounded shadow p-4 text-center">
            <img src="/product1.png" alt="Product 1" className="mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">JDM Hoodie</h4>
            <p className="mb-4">£35.00</p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
              Buy Now
            </button>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <img src="/product2.png" alt="Product 2" className="mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Sticker Pack</h4>
            <p className="mb-4">£10.00</p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
              Buy Now
            </button>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <img src="/product3.png" alt="Product 3" className="mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">JDM Hat</h4>
            <p className="mb-4">£20.00</p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-12 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">About Lag2Launch</h3>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          Lag2Launch is all about celebrating Japanese car culture. From hoodies to stickers, 
          we create merchandise that every car enthusiast will love. Our goal is to bring 
          the community together and share the passion for JDM cars.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
        <p className="text-center mb-6 text-gray-700">
          Questions, suggestions, or custom requests? Reach out to us at: <br />
          <a href="mailto:info@lag2launch.com" className="text-purple-700 underline">
            info@lag2launch.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        © 2025 Lag2Launch. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
const products = [
  {
    id: 1,
    name: "Custom Evo 8 Poster",
    price: 20,
    image: "/poster1.jpg",
  },
  {
    id: 2,
    name: "Lag2Launch T-Shirt",
    price: 25,
    image: "/shirt1.jpg",
  },
];
<div className="grid grid-cols-2 gap-4">
  {products.map((product) => (
    <div key={product.id} className="border p-4">
      <img src={product.image} alt={product.name} className="mb-2"/>
      <h3 className="font-bold">{product.name}</h3>
      <p>${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Buy Now
      </button>
    </div>
  ))}
</div>
