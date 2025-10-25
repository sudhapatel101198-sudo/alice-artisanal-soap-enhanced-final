import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import data from "../data/products.json";

const BANNERS = [
  { img: "/banners/banner-green-tea.jpg" },
  { img: "/banners/banner-saffron.jpg" },
  { img: "/banners/banner-charcoal.jpg" },
];

function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const b = BANNERS[i];

  return (
    <div className="relative w-full h-[230px] sm:h-[320px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-3xl shadow-lg">
      {/* Banner Image */}
      <img
        src={b.img}
        alt="Alice Artisanal Soap Banner"
        className="w-full h-full object-cover"
      />

      {/* CTA Buttons */}
      <div className="absolute left-6 bottom-6 flex flex-col sm:flex-row gap-3 z-10">
        <a
          href="/shop"
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base shadow-md transition-all"
        >
          Shop Now
        </a>
        <a
          href="/shop#bases"
          className="border border-white text-white hover:bg-white/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all"
        >
          Explore Soap Bases
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-4 bottom-4 flex gap-2 z-20">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border transition-all ${
              i === idx ? "bg-white border-white scale-110" : "border-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const soaps = data.soaps.slice(0, 8);
  const bases = data.bases.slice(0, 8);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="container pt-4 sm:pt-6">
        <HeroSlider />
      </section>

      {/* FEATURED SOAPS */}
      <section className="section bg-brand-beige">
        <div className="container">
          <h2 className="h2 text-center mb-6 sm:mb-8 text-lg sm:text-2xl font-semibold">
            Featured Soaps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {soaps.map((it) => (
              <ProductCard key={it.id} item={it} />
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section className="section">
        <div className="container">
          <div className="relative h-[200px] sm:h-[250px] md:h-[320px] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/WhatsApp_Image_2025-10-21_at_6.30.21_PM.jpeg"
              alt="Nature’s Purity. Alice’s Craft."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-white text-xl sm:text-2xl md:text-3xl font-serif text-center px-2">
                Nature’s Purity. Alice’s Craft.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BASES */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="h2 text-center mb-6 sm:mb-8 text-lg sm:text-2xl font-semibold">
            Featured Soap Bases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bases.map((it) => (
              <ProductCard key={it.id} item={it} />
            ))}
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border p-4 sm:p-6 text-center bg-gradient-to-r from-brand/10 to-brand/5 text-brand font-semibold text-sm sm:text-base">
            🌱 Eco-Friendly &nbsp;|&nbsp; 🧴 Cruelty-Free &nbsp;|&nbsp; 🧼 Paraben-Free &nbsp;|&nbsp; 🇮🇳 Made in India
          </div>
        </div>
      </section>
    </Layout>
  );
}
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import data from "../data/products.json";

// 🧼 Banner Images
const BANNERS = [
  {
    img: "/banners/banner-green-tea.jpg",
    alt: "Alice Green Tea Handmade Soap",
  },
  {
    img: "/banners/banner-saffron.jpg",
    alt: "Alice Saffron & Turmeric Glow Soap",
  },
  {
    img: "/banners/banner-charcoal.jpg",
    alt: "Alice Charcoal & Mint Detox Soap",
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);

  // Auto-slide every 6 seconds (no fade)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const b = BANNERS[i];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-xl">
      {/* Banner Image */}
      <img
        src={b.img}
        alt={b.alt}
        className="w-full object-cover"
        style={{
          aspectRatio: "33.87 / 13.55", // exact banner ratio
          height: "auto",
        }}
      />

      {/* Slide Dots */}
      <div className="absolute right-6 bottom-6 flex gap-2 z-20">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`w-3 h-3 rounded-full border transition-all ${
              i === idx ? "bg-white border-white scale-110" : "border-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const soaps = data.soaps.slice(0, 8);
  const bases = data.bases.slice(0, 8);

  return (
    <Layout>
      {/* 🏠 Hero Section */}
      <section className="container pt-6">
        <HeroSlider />
      </section>

      {/* 🧼 Featured Soaps */}
      <section className="section bg-brand-beige">
        <div className="container">
          <h2 className="h2 text-center mb-8">Featured Soaps</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {soaps.map((it) => (
              <ProductCard key={it.id} item={it} />
            ))}
          </div>
        </div>
      </section>

      {/* 🌿 Lifestyle Banner */}
      <section className="section">
        <div className="container">
          <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden">
            <img
              src="/turmeric.jpeg"
              alt="Lifestyle"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-white text-3xl md:text-4xl font-serif text-center">
                Nature’s Purity. Alice’s Craft.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧴 Featured Soap Bases */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="h2 text-center mb-8">Featured Soap Bases</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bases.map((it) => (
              <ProductCard key={it.id} item={it} />
            ))}
          </div>
        </div>
      </section>

      {/* 🌎 Footer Info Strip */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border p-6 text-center bg-gradient-to-r from-brand/10 to-brand/5 text-brand font-semibold">
            🌱 Eco-Friendly &nbsp;|&nbsp; 🧴 Cruelty-Free &nbsp;|&nbsp; 🧼
            Paraben-Free &nbsp;|&nbsp; 🇮🇳 Made in India
          </div>
        </div>
      </section>
    </Layout>
  );
}
