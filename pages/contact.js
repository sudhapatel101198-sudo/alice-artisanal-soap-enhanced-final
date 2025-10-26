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
              <li>Email: hellomart.ecommerce@gmail.com</li>
              <li>Whatsapp: +91-74411 99199</li>
              <li>Amazon Store: <a className="text-brand underline" target="_blank" rel="noreferrer" href="https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&product=B0FMNXH6KN&me=A7LB0BWELQTV3">Browse all products</a></li>
            </ul>
            <div className="mt-6">
              <a href="https://wa.me/917441199199" target="_blank" rel="noreferrer" className="btn btn-solid">Chat on WhatsApp</a>
            </div>
          </div>
          <iframe className="w-full h-72 rounded-2xl border" src="https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0825555,72.8789412,11z/data=!3m1!4b1!4m6!3m5!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d18.9581934!4d72.8320729!16zL20vMDR2bXA?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"></iframe>
        </div>
      </section>
    </Layout>
  )
}
