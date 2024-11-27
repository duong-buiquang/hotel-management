import React, { useState } from 'react';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 p-6">
      {/* Payment Method Section */}
      <div className="w-full md:w-2/3 bg-white shadow-md p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div>
          {/* Credit or Debit Card */}
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="form-radio text-green-500"
              />
              <span>Credit or Debit Card</span>
            </label>
            {paymentMethod === 'card' && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border rounded-md p-2"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Expire Date (MM/YY)"
                    className="w-1/2 border rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="CVC/CVV"
                    className="w-1/2 border rounded-md p-2"
                  />
                </div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500"
                  />
                  <span>Save this card</span>
                </label>
                <div className="flex space-x-4">
                  <button className="bg-gray-200 px-4 py-2 rounded-md">
                    Cancel
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Use This Card
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Other Payment Methods */}
          {['PayPal', 'Google Pay', 'Apple Pay'].map(method => (
            <div key={method} className="mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="form-radio text-green-500"
                />
                <span>{method}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="w-full md:w-1/3 bg-white shadow-md p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2">
          {[
            { name: 'Gaming Headphone', price: '75,00 €' },
            { name: 'Super Laptop', price: '98,86 €' },
            { name: 'Apple Watch 8', price: '267,50 €' },
            { name: 'iPhone 12 Pro Max', price: '291,07 €' },
            { name: 'Headphone Master', price: '226,20 €' }
          ].map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Items (5):</span>
            <span>€365,24</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping & Handling:</span>
            <span>€2,50</span>
          </div>
          <div className="flex justify-between">
            <span>Before Tax:</span>
            <span>€367,74</span>
          </div>
          <div className="flex justify-between">
            <span>Tax Collected (20%):</span>
            <span>€73,54</span>
          </div>
        </div>
        <div className="mt-4 border-t pt-4 flex justify-between text-lg font-semibold">
          <span>Order Total:</span>
          <span>€504,77</span>
        </div>
        <button className="w-full bg-green-500 text-white mt-4 py-2 rounded-md">
          Place Order
        </button>
      </div>
    </div>
  );
}
