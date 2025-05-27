import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  })

  const cart = useSelector(state => state.cart)

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 nt-8">

      {/* billing */}
        <div className="md:w-2/3">
          <div>
            <div onClick={() => setBillingToggle(!billingToggle)}>
              <h3>Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label>Name</label>
                <input type="text" />
              </div>
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label>Email</label>
                <input type="email" />
              </div>
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label>Phone</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
      </div>

      {/* shipping */}
      <div className="md:w-2/3">
        <div>
          <div onClick={() => setShippingToggle(!shippingToggle)}>
            <h3>Billing Information</h3>
            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
            <div>
              <label>Address</label>
              <input type="text" onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}/>
            </div>
          </div>
          <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
            <div>
              <label>City</label>
              <input type="email" name="city" onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}/>
            </div>
          </div>
          <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
            <div>
              <label>Zip Code</label>
              <input type="text" name="zip" onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}/>
            </div>
          </div>
        </div>
      </div>

      {/* payment  method*/}
       <div className="md:w-2/3">
        <div>
          <div onClick={() => setPaymentToggle(!paymentToggle)}>
            <h3>Payment Method</h3>
            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
            <div>
              <input type="radio" name="payment" checked = {paymentMethod === "cod"} onChange={()=>setPaymentMethod("cod")} />
              <label>Cash on Delivery</label>
            </div>
          </div>
          <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
            <div>
              <input type="radio" name="payment" checked = {paymentMethod === "dc"} onChange={()=>setPaymentMethod("dc")} />
              <label>Debit card</label>
            </div>
          </div>
           {paymentMethod == 'dc' && (
            <div>
                <h3>Debit Card Information</h3>
                <div>
                    <label htmlFor="">Card Number</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="">Card Holder Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Expire Date</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">CVV</label>
                        <input type="text"/>
                    </div>
                </div>
            </div>
           )}


           <div>
            <h3>order Summery</h3>
            <div>
                {cart.products.map(product =>(
                    <div key={product.id}>
                        <div>
                            <img src={product.image} alt=""/>
                            <div>
                                <h4>{product.name}</h4>
                                <p>
                                    &{product.price} x {product.quantity}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div>
                    <span>Total Price:</span>
                    <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <button>Place order</button>
           </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
