import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ item }) {
  return (
    <Link href={`/product/${item.id}`} passHref>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-zinc-100 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between">
        {/* Product Image */}
        <div className="relative">
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={400}
            className="w-full h-60 object-cover"
          />
          <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide">
            {item.tag || "Handmade"}
          </span>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col justify-between flex-1">
          {/* Name */}
          <h3 className="text-lg font-semibold text-zinc-800 line-clamp-2 h-12">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-600 mt-1 line-clamp-2 min-h-[36px]">
            {item.blurb}
          </p>

          {/* Price Section */}
          <div className="mt-3">
            {item.mrp && (
              <span className="text-sm text-zinc-400 line-through mr-2">
                MRP: ₹{item.mrp}
              </span>
            )}
            <span className="text-lg font-bold text-green-700">
              ₹{item.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            {/* Amazon Button */}
            <a
              href={item.amazon}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()} // prevent navigation when clicking button
            >
              Amazon
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/917441199199?text=${encodeURIComponent(
                `Hi Hellomart! I'm interested in ${item.name} (₹${item.price}).`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center border border-green-700 text-green-700 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors text-sm"
              onClick={(e) => e.stopPropagation()} // prevent navigation when clicking button
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}