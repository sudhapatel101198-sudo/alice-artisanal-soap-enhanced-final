import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import data from "../data/products.json";

const BANNERS = [
  {
    img: "/banners/banner-green-tea.jpg",
  },
  {
    img: "/banners/banner-saffron.jpg",
  },
  {
    img: "/banners/banner-charcoal.jpg",
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    // Change banner every 6 seconds (no fade effect)
    const t = setInterval(() => setI((v) => (v + 1) % BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const b = BANNERS[i];

  return (
    <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
      {/* Banner image */}
      <img
        src={b.img}
        alt="Alice Artisanal Soap Banner"
        className="w-full h-full object-cover"
      />

      {/* CTA Buttons only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-wrap gap-4 z-10">
        <a
          href="/shop"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all"
        >
          Shop Now
        </a>
        <a
          href="/shop#bases"
          className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all"
        >
          Explore Soap Bases
        </a>
      </div>

      {/* Dots for slide indicator */}
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
      {/* Hero Section */}
      <section className="container pt-6">
        <HeroSlider />
      </section>

      {/* Featured Soaps */}
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

      {/* Lifestyle Banner */}
      <section className="section">
        <div className="container">
          <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden">
            <img
              src="/WhatsApp_Image_2025-10-21_at_6.30.21_PM.jpeg"
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

      {/* Featured Bases */}
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

      {/* Footer Info Strip */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl border p-6 text-center bg-gradient-to-r from-brand/10 to-brand/5 text-brand font-semibold">
            🌱 Eco-Friendly &nbsp;|&nbsp; 🧴 Cruelty-Free &nbsp;|&nbsp; 🧼 Paraben-Free &nbsp;|&nbsp; 🇮🇳 Made in India
          </div>
        </div>
      </section>
    </Layout>
  );
}
