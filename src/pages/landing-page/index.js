import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce Landing Page</title>
        <meta
          name="description"
          content="The best online store for your needs"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="text-2xl font-bold text-gray-800">E-commerce</div>
              <div>
                <a href="#" className="text-gray-600 hover:text-gray-900 mx-4">
                  Home
                </a>
                <a
                  href="#products"
                  className="text-gray-600 hover:text-gray-900 mx-4"
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 mx-4"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 mx-4"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen text-white"
          style={{ backgroundImage: "url(/hero-image.jpg)" }}
        >
          <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-lg mb-8">
              Discover the best products at unbeatable prices
            </p>
            <a
              href="#products"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                Why Shop With Us?
              </h2>
              <p className="text-gray-600">
                We provide the best products and customer service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow rounded">
                <h3 className="text-xl font-bold mb-2">
                  High Quality Products
                </h3>
                <p className="text-gray-600">
                  We offer a wide variety of top-notch products to meet all your
                  needs.
                </p>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">
                  Get your orders delivered fast and on time every time.
                </p>
              </div>
              <div className="p-6 bg-white shadow rounded">
                <h3 className="text-xl font-bold mb-2">
                  24/7 Customer Support
                </h3>
                <p className="text-gray-600">
                  Our friendly support team is available to assist you at all
                  times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                Featured Products
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Dummy Product Cards */}
              {Array(6)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="bg-white p-6 shadow rounded">
                    <img
                      src="/product-image.jpg"
                      alt="Product"
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Product {idx + 1}
                    </h3>
                    <p className="text-gray-600">$29.99</p>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      View Details
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 E-commerce Site. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
