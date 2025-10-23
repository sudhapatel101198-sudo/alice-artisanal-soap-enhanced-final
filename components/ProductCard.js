import Image from "next/image";

export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-zinc-200 hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Product Image */}
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={400}
          className="w-full h-60 object-cover"
        />
        <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-[10px] font-semibold px-2.5 py-0.5 rounded-md uppercase tracking-wide shadow-sm">
          {item.tag || "Handmade"}
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        {/* Product Info */}
        <div>
          <h3 className="text-base font-semibold text-zinc-800 leading-snug min-h-[48px]">
            {item.name}
          </h3>
          <p className="text-xs text-zinc-600 mt-1 min-h-[32px]">
            {item.blurb}
          </p>

          {/* Price */}
          <div className="mt-2">
            {item.mrp && (
              <span className="text-xs text-zinc-400 line-through mr-2">
                MRP: ₹{item.mrp}
              </span>
            )}
            <span className="text-base font-bold text-green-700">
              Rs. {item.price}
            </span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-3 flex flex-row gap-2 justify-between">
          <a
            href={item.amazon}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-green-700 text-white py-1.5 text-sm rounded-md font-medium hover:bg-green-800 hover:scale-[1.03] transition-all duration-300"
          >
            Amazon
          </a>
          <a
            href={`https://wa.me/919000000000?text=${encodeURIComponent(
              `Hi Alice! I want ${item.name} (Rs. ${item.price}).`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center border border-green-700 text-green-700 py-1.5 text-sm rounded-md font-medium hover:bg-green-50 hover:scale-[1.03] transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
