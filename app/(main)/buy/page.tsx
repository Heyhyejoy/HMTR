"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const basePrice = 19990;

export default function HyundaiCustomizer() {
  const [selectedEngine, setSelectedEngine] = useState<string | null>(null);
  const [selectedEnginePrice, setSelectedEnginePrice] = useState(0);
  const [selectedRim, setSelectedRim] = useState<string | null>(null);
  const [selectedRimPrice, setSelectedRimPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const router = useRouter();
  
  const totalPrice = basePrice + selectedEnginePrice + selectedRimPrice;

  const engineOptions = [
    { name: "Jump MT", price: 0 },
    { name: "Jump AMT", price: 1399 },
    { name: "Style", price: 2199 },
    { name: "Elite", price: 2999 },
  ];

  const colorOptions = [
    { name: "White", code: "#ffffff", img: "./layout/images/whitei10.avif" },
    { name: "Blue", code: "#adc4db", img: "./layout/images/bluei10.avif" },
    { name: "Red", code: "#b90e0a", img: "./layout/images/redi10.avif" },
    { name: "Silver", code: "#cccccc", img: "./layout/images/greyi10.avif" },
    { name: "Black", code: "#333333", img: "./layout/images/blacki10.avif" },
    { name: "Green", code: "#628477ff", img: "./layout/images/greeni10.avif" }
  ];

  const rimOptions = [
    {
      name: "15″ Alloy Wheels",
      price: 0,
      img: "https://images.unsplash.com/photo-1617818493719-bca78b7d6f2f",
    },
  ];

  const selectedImage = colorOptions.find((c) => c.name === selectedColor)?.img ?? colorOptions[0].img;

  return (
    <div className="container ml-8 px-4 py-8" style={{ fontFamily: 'noto-sans, sans-serif' }}>
      <main>
        <h2 className="text-3xl mt-6 font-bold">Build Your Hyundai</h2>
        <p className="mb-4">Customize your dream car and get an instant price</p>

        <section className="mb-6">
          <h3 className="mt-6 text-xl font-semibold mb-2">1. Choose Engine and Hardware</h3>
          <div className="flex flex-wrap gap-2" style={{ marginTop: '1.5rem' }} >
            {engineOptions.map(({ name, price }) => {
              const isSelected = selectedEngine === name;

              return (
                <button
                  key={name}
                  onClick={() => {
                    setSelectedEngine(name);
                    setSelectedEnginePrice(price);
                  }}
                  style={{
                    padding: '10px 20px',
                    border: isSelected ? '3px solid navy' : '2px solid navy',
                    backgroundColor: isSelected ? 'white' : 'navy',
                    color: isSelected ? 'navy' : 'white',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    minWidth: '12rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {name} {price > 0 && `(+$${price})`}
                </button>
              );
            })}

          </div>
        </section>

        <section className="mb-6">
          <img
            src={selectedImage}
            alt="Hyundai car"
            className="w-8 h-auto rounded-lg border"
          />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2 ">2. Select Exterior Color</h3>
          <div className="flex gap-3 items-center" style={{ marginTop: '1.5rem' }}>
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
          <div className="flex gap-4" style={{ marginTop: '1.5rem' }}>
            {rimOptions.map(({ name, price }) => {
              const isSelected = selectedRim === name;

              return (
                <button
                  key={name}
                  onClick={() => {
                    setSelectedRim(name);
                    setSelectedRimPrice(price);
                  }}
                  style={{
                    padding: '10px 20px',
                    border: isSelected ? '3px solid navy' : '2px solid navy',
                    backgroundColor: isSelected ? 'white' : 'navy',
                    color: isSelected ? 'navy' : 'white',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    minWidth: '12rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {name} {price > 0 && `(+$${price})`}
                </button>
              );
            })}

          </div>
        </section>

        <div id="price-display" className="text-2xl font-bold mt-6">
          Total Price: ${totalPrice.toLocaleString()}

          {/* 추가 금액 설명 */}
          {selectedEnginePrice > 0 && (
            <p className="text-sm mt-2 text-gray-700 font-normal">
              + Engine Upgrade: ${selectedEnginePrice}
            </p>
          )}
          {selectedRimPrice > 0 && (
            <p className="text-sm mt-1 text-gray-700 font-normal">
              + Rim Upgrade: ${selectedRimPrice}
            </p>
          )}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2rem',
          marginRight: '20%',
        }}>
          <button
            style={{
              padding: '10px 20px',
              border: '2px solid navy',
              backgroundColor: 'navy',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
            onClick={() => router.push('./login')}
          >
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
          border: 2px solid lightgray;
          transition: border-color 0.3s ease;
        }

        .color-swatch.selected {
          border-color: black; 
        }
      `}</style>
    </div>
  );
}
