import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector(state => state.product.products);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const newProduct = products.find(p => p.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  const handleAddToCart = () => {
    console.log('Added to cart:', { ...product, quantity });
    // You can dispatch an action here to update the Redux cart state
  };

  if (!product) {
    return <div className="p-8 text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto bg-white shadow rounded-lg m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg object-cover" />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-2">₹{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description || 'No description available.'}</p>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value) || 1)}
              className="w-24 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Ask a Question */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ask a Question</h2>
        <textarea
          rows="4"
          placeholder="Write your question here..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={() => console.log('Question:', question)}
          className="mt-4 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          Submit Question
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
