import React from 'react'

const Order = ({ order }) => {
  if (!order || !order.shippingInformation) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold">No order found</h2>
        <p>Please complete your checkout to view order confirmation.</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Thank you for your order!</h2>
      <p className="mb-6">Your order has been placed successfully. You will receive an email confirmation shortly.</p>

      <div className="bg-gray-100 p-6 rounded-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <p className="mb-2">Order Number: <span className="font-medium">{order.orderNumber}</span></p>

        <div className="mb-4">
          <h4 className="font-semibold">Shipping Information</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Products Ordered</h4>
          {order.products.map((product, index) => (
            <div key={index} className="flex justify-between border-b py-2">
              <span>{product.name} x {product.quantity}</span>
              <span>₹{product.price * product.quantity}</span>
            </div>
          ))}
        </div>

        <div className="text-lg font-bold flex justify-between mt-4">
          <span>Total Price:</span>
          <span>₹{order.totalPrice}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Order Tracking
        </button>
        <button className="border px-4 py-2 rounded hover:bg-gray-200 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Order;
