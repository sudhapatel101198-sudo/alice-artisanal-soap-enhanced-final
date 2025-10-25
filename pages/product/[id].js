import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../data/products.json";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the product from soaps or bases
  const product =
    data.soaps.find((item) => item.id === parseInt(id)) ||
    data.bases.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Product Not Found</h1>
          <Link href="/shop" className="text-green-700 hover:underline mt-4 inline-block">
            ← Back to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-10 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Product Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-snug">{product.name}</h1>

            {/* Product Tag */}
            <div className="mt-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-md uppercase">
              {product.tag || "Handmade"}
            </div>

            {/* Product Description */}
            <p className="text-gray-700 mt-4 leading-relaxed text-base">
              {product.description ||
                product.blurb ||
                "This handmade soap is crafted with love and enriched with natural botanicals to rejuvenate your skin."}
            </p>

            {/* Price */}
            <div className="mt-5">
              {product.mrp && (
                <span className="text-sm text-gray-400 line-through mr-2">
                  MRP: ₹{product.mrp}
                </span>
              )}
              <span className="text-3xl font-semibold text-green-700">₹{product.price}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Amazon Button */}
            <a
              href={product.amazon}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-all"
            >
              Amazon
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/919000000000?text=${encodeURIComponent(
                `Hi Hellomart! I'm interested in ${product.name} (₹${product.price}).`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center border border-green-700 text-green-700 py-3 rounded-lg font-medium hover:bg-green-50 transition-all"
            >
              WhatsApp
            </a>
          </div>

          {/* Back Link */}
          <div className="mt-8">
            <Link
              href="/shop"
              className="text-sm text-gray-500 hover:text-green-700 transition-all"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </section>

      {/* You May Also Like Section */}
      <section className="container py-12 border-t mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8">You May Also Like</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.soaps
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((related) => (
              <Link key={related.id} href={`/product/${related.id}`}>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border hover:shadow-md transition-all cursor-pointer">
                  <Image
                    src={related.image}
                    alt={related.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-zinc-800 text-sm line-clamp-2">
                      {related.name}
                    </h3>
                    <span className="text-green-700 font-semibold text-sm">
                      ₹{related.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </Layout>
  );
}
