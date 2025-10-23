import Layout from "../components/Layout";
export default function Contact(){
  return (
    <Layout>
      <section className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="h2">Contact Us</h1>
            <p className="subtle mt-2">For wholesale, collaborations or queries.</p>
            <ul className="mt-4 space-y-2">
              <li>Email: hello@aliceartisanal.com</li>
              <li>Phone: +91-90000 00000</li>
              <li>Amazon Store: <a className="text-brand underline" target="_blank" rel="noreferrer" href="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&product=B0FMNXH6KN&me=A7LB0BWELQTV3">Browse all products</a></li>
            </ul>
            <div className="mt-6">
              <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="btn btn-solid">Chat on WhatsApp</a>
            </div>
          </div>
          <iframe className="w-full h-72 rounded-2xl border" src="https://maps.google.com/maps?q=Gwalior%2C%20Madhya%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </section>
    </Layout>
  )
}
