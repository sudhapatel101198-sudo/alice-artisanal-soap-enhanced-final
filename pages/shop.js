import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import data from "../data/products.json";

export default function Shop(){
  const soaps = data.soaps;
  const bases = data.bases;
  return (
    <Layout>
      <section className="section bg-white">
        <div className="container">
          <h1 className="h2">All Soaps</h1>
          <p className="subtle mt-2">Buy on Amazon or ping us on WhatsApp.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {soaps.map(item => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
      <section id="bases" className="section bg-brand-beige">
        <div className="container">
          <h2 className="h2">All Soap Bases</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {bases.map(item => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </Layout>
  )
}
