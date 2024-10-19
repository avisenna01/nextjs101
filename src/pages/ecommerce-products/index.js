import { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const productsData = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop",
    price: 999.99,
    image: "/laptop.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest Android smartphone",
    price: 699.99,
    image: "/smartphone.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-canceling headphones",
    price: 199.99,
    image: "/headphones.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Stylish and functional smartwatch",
    price: 249.99,
    image: "/smartwatch.jpg",
  },
  {
    id: 5,
    name: "Tablet",
    description: "Portable tablet for work and play",
    price: 499.99,
    image: "/tablet.jpg",
  },
  {
    id: 6,
    name: "Camera",
    description: "Professional DSLR camera",
    price: 1199.99,
    image: "/camera.jpg",
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simplified Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800">Our Products</h1>
          <div>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Controls */}
        <div className="mb-6 flex flex-col sm:flex-row sm:justify-between items-center">
          {/* Search Bar */}
          <div className="relative w-full max-w-lg mb-4 sm:mb-0">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 transition"
            />
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center">
            <select className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
            <FiChevronDown className="ml-2 text-gray-400" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </p>
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message for No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-500">
              No products found. Try a different search term.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 E-commerce Site. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
