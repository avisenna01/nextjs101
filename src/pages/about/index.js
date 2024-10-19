export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
          <div>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative">
          <div
            className="bg-cover bg-center h-64"
            style={{ backgroundImage: "url(/hero-about.jpg)" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-center items-center h-full text-white relative z-10">
              <h2 className="text-4xl font-bold">Our Journey</h2>
              <p className="text-lg mt-2">Driven by passion and innovation.</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12">
          <h3 className="text-2xl font-bold text-center mb-6">Our Story</h3>
          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="mb-4">
              We started our journey in 2020 with a vision to provide top-notch
              products that blend innovation with quality. Our founders, with
              years of experience in the tech industry, saw a gap in the market
              for reliable, affordable technology solutions.
            </p>
            <p>
              Our team is dedicated to transforming ideas into reality, always
              striving to exceed customer expectations. Today, we are proud to
              serve thousands of customers around the globe.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md text-center p-6 transition transform hover:scale-105">
              <img
                src="/team1.jpg"
                alt="John Doe"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-gray-600">CEO</p>
              <p className="mt-2 text-gray-500">
                A visionary leader dedicated to driving innovation and growth.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md text-center p-6 transition transform hover:scale-105">
              <img
                src="/team2.jpg"
                alt="Jane Smith"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">Jane Smith</h4>
              <p className="text-gray-600">CTO</p>
              <p className="mt-2 text-gray-500">
                Passionate about technology and committed to excellence.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md text-center p-6 transition transform hover:scale-105">
              <img
                src="/team3.jpg"
                alt="Emily Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">Emily Johnson</h4>
              <p className="text-gray-600">Marketing Director</p>
              <p className="mt-2 text-gray-500">
                Expert in crafting stories that resonate with audiences.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-12">
          <h3 className="text-2xl font-bold text-center mb-6">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11H7v-2h2v2zm2-2H9V7h2v2z" />
                </svg>
              </div>
              <p>
                ✔️ Customer First: Our customers are our priority in everything
                we do.
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11H7v-2h2v2zm2-2H9V7h2v2z" />
                </svg>
              </div>
              <p>
                ✔️ Integrity: We uphold the highest standards of integrity in
                all of our actions.
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11H7v-2h2v2zm2-2H9V7h2v2z" />
                </svg>
              </div>
              <p>
                ✔️ Innovation: We encourage creativity and innovation to enhance
                our products.
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full p-4 mr-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11H7v-2h2v2zm2-2H9V7h2v2z" />
                </svg>
              </div>
              <p>
                ✔️ Teamwork: We work together to achieve our goals and support
                one another.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="max-w-3xl mx-auto">
            <blockquote className="bg-white p-6 rounded-lg shadow-md text-gray-700">
              <p className="italic">
                “This company transformed our business with their innovative
                solutions. Highly recommend!”
              </p>
              <footer className="mt-4 text-gray-600">- Alex Johnson</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md text-gray-700 mt-4">
              <p className="italic">
                “Fantastic products and even better customer service. A rare
                find!”
              </p>
              <footer className="mt-4 text-gray-600">- Sarah Brown</footer>
            </blockquote>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Us on Our Journey!</h3>
          <p className="text-gray-700 mb-6">
            Explore our products and become a part of our community.
          </p>
          <a
            href="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Shop Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 E-commerce Site. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
