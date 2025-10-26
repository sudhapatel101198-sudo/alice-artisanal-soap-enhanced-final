import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* ---------------- HEADER ---------------- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto py-4 flex items-center justify-between px-4 md:px-0">
          {/* Hellomart Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-hellomart.png"
              alt="Hellomart"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link className="hover:text-green-700 transition" href="/">
              Home
            </Link>
            <Link className="hover:text-green-700 transition" href="/shop">
              Shop
            </Link>
            <Link className="hover:text-green-700 transition" href="/about">
              About
            </Link>
            <Link className="hover:text-green-700 transition" href="/gallery">
              Gallery
            </Link>
            <Link className="hover:text-green-700 transition" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1">{children}</main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t bg-gray-50 mt-10">
        <div className="container mx-auto py-10 px-4 md:px-0 grid md:grid-cols-3 gap-8 text-sm">
          {/* Brand */}
          <div>
            <img
              src="/logo-hellomart.png"
              alt="Hellomart Logo"
              className="h-10 w-auto mb-3"
            />
            <p className="text-gray-600">
              Premium handcrafted soaps & bases — inspired by nature, made with
              love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold mb-2 text-gray-700">Quick Links</div>
            <ul className="space-y-1 text-gray-600">
              <li>
                <Link className="hover:text-green-700" href="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-700" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-700" href="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold mb-2 text-gray-700">Contact</div>
            <ul className="space-y-1 text-gray-600">
              <li>Email: hellomart.ecommerce@gmail.com</li>
              <li>Whatsapp: +91-74411 99199 </li>
              <li>Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 pb-6 border-t pt-4">
          © {new Date().getFullYear()} Hellomart. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
