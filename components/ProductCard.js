import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-zinc-100 hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <Link href={`/product/${item.id}`} className="block relative">
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
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-zinc-800">{item.name}</h3>
          <p className="text-sm text-zinc-600 mt-1">{item.blurb}</p>

          {/* Pricing */}
          <div className="mt-3">
            {item.mrp && (
              <span className="text-sm text-zinc-400 line-through mr-2">
                MRP: ₹{item.mrp}
              </span>
            )}
            <span className="text-lg font-bold text-green-700">
              Rs. {item.price}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          {/* Amazon Button */}
          <a
            href={item.amazon}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-green-700 text-white py-2 rounded-lg font-medium text-sm hover:bg-green-800 transition-colors"
          >
            Amazon
          </a>

          {/* WhatsApp Button with updated number */}
          <a
            href={`https://wa.me/917441199199?text=${encodeURIComponent(
              `Hi Alice! I want to know more about "${item.name}" priced at ₹${item.price}.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center border border-green-700 text-green-700 py-2 rounded-lg font-medium text-sm hover:bg-green-50 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
