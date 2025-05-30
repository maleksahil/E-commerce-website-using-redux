import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  });

  const cart = useSelector(state => state.cart);
  const navigate = useNavigate()

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber : "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    }

    localStorage.setItem("orderData", JSON.stringify(newOrder));
  
    setOrder(newOrder)
    navigate('/order-confirmation')
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-screen">
      <h3 className="text-3xl font-bold mb-8 text-gray-800">Checkout</h3>

      <div className="flex flex-col gap-8">
        {/* Billing Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <div
            onClick={() => setBillingToggle(!billingToggle)}
            className="flex justify-between items-center cursor-pointer mb-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">Billing Information</h3>
            {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {billingToggle && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">Name</label>
                <input type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input type="email" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-600 mb-1">Phone</label>
                <input type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          )}
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <div
            onClick={() => setShippingToggle(!shippingToggle)}
            className="flex justify-between items-center cursor-pointer mb-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">Shipping Information</h3>
            {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {shippingToggle && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">City</label>
                <input
                  type="text"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Zip Code</label>
                <input
                  type="text"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                />
              </div>
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg shadow p-6">
          <div
            onClick={() => setPaymentToggle(!paymentToggle)}
            className="flex justify-between items-center cursor-pointer mb-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">Payment Method</h3>
            {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {paymentToggle && (
            <>
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <span>Debit Card</span>
                </label>
              </div>

              {paymentMethod === "dc" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 mb-1">Card Number</label>
                    <input type="text" className="w-full border rounded px-4 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Card Holder Name</label>
                    <input type="text" className="w-full border rounded px-4 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Expire Date</label>
                    <input type="text" className="w-full border rounded px-4 py-2" />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">CVV</label>
                    <input type="text" className="w-full border rounded px-4 py-2" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Order Summary</h3>
          <div className="divide-y divide-gray-200">
            {cart.products.map(product => (
              <div key={product.id} className="flex items-center py-4 space-x-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover border rounded" />
                <div>
                  <h4 className="font-medium text-gray-800">{product.name}</h4>
                  <p className="text-sm text-gray-600">
                    ₹{product.price} × {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6 text-lg font-semibold text-gray-800">
            <span>Total:</span>
            <span>₹{cart.totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={handleOrder} className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
