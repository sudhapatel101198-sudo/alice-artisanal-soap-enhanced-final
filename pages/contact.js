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
          <iframe className="w-full h-72 rounded-2xl border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15084.734295590457!2d72.8776556!3d19.0760905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630eb1e2b63%3A0x2a29a9c9a09c7f5e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698756781234!5m2!1sen!2sin"></iframe>
        </div>
      </section>
    </Layout>
  )
}
