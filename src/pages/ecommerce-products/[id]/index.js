import { useRouter } from "next/router";

const ProductDescription = () => {
  const router = useRouter();
  const { id } = router.query;

  // Sample data, replace with actual data fetching logic
  const productData = {
    title: "Sample Product",
    price: 29.99,
    description:
      "This is a great product that solves many problems. It is designed to be user-friendly and effective.",
    image: "/sample-product.jpg", // Placeholder for product image
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800">Product Details</h1>
          <div>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="flex-1 mb-4 md:mb-0">
              <img
                src={productData.image}
                alt={productData.title}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 md:ml-6">
              <h2 className="text-3xl font-bold text-gray-800">
                {productData.title}
              </h2>
              <p className="text-xl font-semibold text-blue-600 mt-2">
                ${productData.price}
              </p>
              <p className="text-gray-600 mt-4">{productData.description}</p>

              {/* Add to Cart Button */}
              <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section (optional) */}
        <section className="py-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            Related Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="/related-product1.jpg"
                alt="Related Product 1"
                className="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold mt-2">Related Product 1</h4>
              <p className="text-blue-600">$19.99</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="/related-product2.jpg"
                alt="Related Product 2"
                className="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold mt-2">Related Product 2</h4>
              <p className="text-blue-600">$24.99</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="/related-product3.jpg"
                alt="Related Product 3"
                className="w-full h-auto rounded-lg"
              />
              <h4 className="text-lg font-semibold mt-2">Related Product 3</h4>
              <p className="text-blue-600">$29.99</p>
            </div>
          </div>
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
};

export default ProductDescription;
