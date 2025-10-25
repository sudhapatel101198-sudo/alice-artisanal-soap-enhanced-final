import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../data/products.json";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // find the product from soaps or bases
  const product =
    data.soaps.find((item) => item.id === parseInt(id)) ||
    data.bases.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-semibold">Product Not Found</h1>
          <Link
            href="/shop"
            className="text-green-700 hover:underline mt-4 inline-block"
          >
            ← Back to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-10 grid md:grid-cols-2 gap-10 items-start">
        {/* Left - Product Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right - Product Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.name}
          </h1>
          <p className="text-gray-600 mt-3 leading-relaxed">
            {product.blurb || "This handmade product is crafted with care."}
          </p>

          <div className="mt-4">
            {product.mrp && (
              <span className="text-gray-400 line-through text-sm mr-2">
                MRP: ₹{product.mrp}
              </span>
            )}
            <span className="text-2xl font-bold text-green-700">
              ₹{product.price}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={product.amazon}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Amazon
            </a>

            <a
              href={`https://wa.me/919000000000?text=${encodeURIComponent(
                `Hi Hellomart! I'm interested in ${product.name} (₹${product.price}).`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center border border-green-700 text-green-700 py-3 rounded-lg font-medium hover:bg-green-50 transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Back to Shop */}
          <div className="mt-6">
            <Link
              href="/shop"
              className="text-sm text-gray-500 hover:text-green-700 transition"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
