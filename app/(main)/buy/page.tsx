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
      <main>
        <h2 className="text-2xl font-bold">Build Your Hyundai</h2>
        <p className="mb-4">Customize your dream car and get an instant price</p>

        <figure className="mb-4">

          <figcaption>
            <a
              href="https://unsplash.com/photos/gray-hyundai-car-in-front-of-building-0IuP3qz1T7M"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </figcaption>
        </figure>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Choose Engine and Hardware</h3>
          <div className="grid">
            <div className="col">
              {engineOptions.map(({ name, price }) => (
                <button
                  key={name}
                  onClick={() => setSelectedEnginePrice(price)}
                  className="h-6rem w-15rem m-2 bg-white border-blue-900 border-round hover:bg-gray-100">
                  {name} {price > 0 && `(+$${price})`}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-6">
          <img
            src="https://www.hyundai.com/content/dam/hyundai/template_en/en/images/find-a-car/pip/i10-2021/exterior/exterior%20color/i10-ac3-design-exterior-color-12-pc.jpg"
            alt="Hyundai car"
            className="w-8 h-auto"
          />
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
        <div>
          <button type="button" className="cursor-pointer bg-blue-900 text-white border-round mt-6 w-8rem h-3rem font-bold">
            Continue
          </button>

        </div>
      </main>





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