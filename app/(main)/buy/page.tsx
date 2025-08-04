"use client";

import React, { useState } from "react";
import Image from "next/image";

const basePrice = 19990;

export default function HyundaiCustomizer() {
  const [selectedEnginePrice, setSelectedEnginePrice] = useState(0);
  const [selectedRimPrice, setSelectedRimPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedRim, setSelectedRim] = useState<string | null>(null);

  const totalPrice = basePrice + selectedEnginePrice + selectedRimPrice;

  const engineOptions = [
    { name: "Jump MT", price: 0 },
    { name: "Jump AMT", price: 1399 },
    { name: "Style", price: 2199 },
    { name: "Elite", price: 2999 },
  ];

  const colorOptions = [
    { name: "White", code: "#ffffff" },
    { name: "Blue", code: "#adc4db" },
    { name: "Red", code: "#b90e0a" },
    { name: "Silver", code: "#cccccc" },
    { name: "Black", code: "#333333" },
  ];

  const rimOptions = [
    {
      name: "Standard",
      price: 0,
      img: "https://images.unsplash.com/photo-1617818493719-bca78b7d6f2f",
    },
    {
      name: "Sport",
      price: 499,
      img: "https://images.unsplash.com/photo-1589307000275-6524be1ab3c6",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <nav className="flex justify-between items-center py-4">
        <div className="text-lg font-bold">Hyundai Custom</div>
        <ul className="flex gap-4">
          <li><a href="#">Models</a></li>
          <li><a href="#">Build</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <main>
        <h2 className="text-2xl font-bold">Build Your Hyundai</h2>
        <p className="mb-4">Customize your dream car and get an instant price</p>

        <figure className="mb-4">
          <img
            src="https://images.unsplash.com/photo-1617529403273-53e25ba37b43"
            alt="Hyundai car"
            className="w-full h-auto"
          />
          <figcaption>
            <a
              href="https://unsplash.com/photos/gray-hyundai-car-in-front-of-building-0IuP3qz1T7M"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image via Unsplash
            </a>
          </figcaption>
        </figure>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Choose Engine and Hardware</h3>
          <div className="grid gap-2">
            {engineOptions.map(({ name, price }) => (
              <button
                key={name}
                onClick={() => setSelectedEnginePrice(price)}
                className="w-full border py-2 px-4 rounded hover:bg-gray-100"
              >
                {name} {price > 0 && `(+$${price})`}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Select Exterior Color</h3>
          <div className="flex gap-2 items-center">
            {colorOptions.map(({ name, code }) => (
              <span
                key={name}
                onClick={() => setSelectedColor(name)}
                style={{ backgroundColor: code }}
                className={`color-swatch ${selectedColor === name ? "selected" : ""}`}
              />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Choose Rims</h3>
          <div className="flex gap-4">
            {rimOptions.map(({ name, price, img }) => (
              <div
                key={name}
                onClick={() => {
                  setSelectedRim(name);
                  setSelectedRimPrice(price);
                }}
                className={`rim-option ${selectedRim === name ? "selected" : ""}`}
              >
                <img src={img} alt={`${name} Rim`} className="w-16 h-16 rounded" />
                <p>{name} {price > 0 && `(+$${price})`}</p>
              </div>
            ))}
          </div>
        </section>

        <div id="price-display" className="text-2xl font-bold mt-6">
          Total Price: ${totalPrice.toLocaleString()}
        </div>
      </main>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Stay Updated</h2>
        <p>Subscribe for Hyundai news and offers</p>
        <form className="grid gap-4 max-w-md mt-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="First name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </form>
      </section>

      <footer className="mt-12 text-sm">
        <a href="#" className="mr-4">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </footer>

      <style jsx>{`
        .color-swatch {
          width: 30px;
          height: 30px;
          display: inline-block;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid transparent;
        }
        .color-swatch.selected {
          border-color: #000;
        }
        .rim-option img {
          border: 2px solid transparent;
        }
        .rim-option.selected img {
          border-color: #000;
        }
      `}</style>
    </div>
  );
}