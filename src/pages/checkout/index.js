// import { useCart } from "../context/CartContext";
// import Link from "next/link";

// const CheckoutPage = () => {
//   const { cartItems, removeFromCart, clearCart } = useCart();

//   const handleRemove = (id) => {
//     removeFromCart(id);
//   };

//   const handleCheckout = () => {
//     // Add your checkout logic here (e.g., redirect to payment gateway)
//     alert("Proceeding to payment...");
//     clearCart(); // Clear the cart after checkout (optional)
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">
//           Your cart is empty.{" "}
//           <Link href="/products">
//             <a className="text-blue-500 hover:underline">
//               Go back to products.
//             </a>
//           </Link>
//         </p>
//       ) : (
//         <div>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center mb-4"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.title}</h2>
//                   <p className="text-blue-600">${item.price}</p>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(item.id)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Total:</h2>
//             <p className="text-blue-600">
//               ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
//             </p>
//           </div>

//           <button
//             onClick={handleCheckout}
//             className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//           >
//             Proceed to Payment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;
