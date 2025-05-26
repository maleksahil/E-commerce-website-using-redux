import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../assets/images/Empty cart illustration.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal"
import {removeFromCart,increaseQuantity, decreaseQuantity} from "../redux/cartSlice"
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0012");
  const [isModelOpen, setIsModelOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  return (
    <div className="p-6">
      {cart.products.length > 0 ? (
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">SHOPPING CART</h3>
          <div className="border-t border-gray-300">
            <div className="hidden md:grid grid-cols-5 gap-4 py-4 font-semibold text-gray-600 text-sm border-b border-gray-300">
              <p className="col-span-2">PRODUCTS</p>
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>SUBTOTAL</p>
            </div>

            <div className="space-y-6">
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b border-gray-200 pb-4"
                >
                  <div className="flex items-center col-span-2 gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-medium">{product.name}</h3>
                  </div>
                  <p className="text-gray-700">${product.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                     onClick={()=>dispatch(decreaseQuantity(product.id))}
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={()=>dispatch(increaseQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">
                      ${(product.quantity * product.price).toFixed(2)}
                    </p>
                    <button className="text-red-600 hover:text-red-800 ml-4" onClick={()=> dispatch(removeFromCart(product.id))}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto space-y-6">
              <h3 className="text-xl font-bold border-b pb-2">CART TOTAL</h3>

              <div className="flex justify-between text-gray-700">
                <span className="font-medium">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="space-y-2 text-gray-700">
                <div className="font-medium">Shipping:</div>
                <div className="flex justify-between">
                  <p>Shipping to:</p>
                  <span>{address}</span>
                </div>
                <button onClick={()=> setIsModelOpen(true)} className="text-blue-600 hover:underline text-sm">

                  Change address
                </button>
              </div>

              <div className="flex justify-between text-gray-700 font-semibold border-t pt-2">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              onClick={()=>navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
  <h2 className="text-lg font-bold mb-4">Change Address</h2>
  <input
    type="text"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    className="w-full p-2 border rounded mb-4"
  />
  <button
    onClick={() => setIsModelOpen(false)}
    className="bg-blue-600 text-white px-4 py-2 rounded"
  >
    Save
  </button>
</Modal>


          {/* Optional: Add total summary section here */}
          <div className="mt-6 text-right">
            <h4 className="text-xl font-semibold">
              Total: $
              {cart.products
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </h4>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh]">
          <img
            src={image}
            className="h-96 object-contain"
            alt="Empty cart illustration"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
