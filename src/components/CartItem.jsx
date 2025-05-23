import React from "react";

const CartItem = ({ image, name, size, price }) => {
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img src={image} alt="product" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-xs text-gray-700">{size}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white">
              -
            </span>
            <input
              className="h-8 w-12 border pl-5 border-gray-200 bg-gray-100 text-xs outline-none"
              type="number"
              value="2"
              min="1"
              readOnly
            />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-white">
              +
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{price}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto  max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
        {/* Cart Items */}
        <div className="rounded-lg md:w-2/3 overflow-y-auto h-screen">
          <CartItem
            image="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            name="Nike Air Max 2019"
            size="36EU - 4US"
            price="259.000 ₭"
          />
          <CartItem
            image="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1131&q=80"
            name="Nike Air Max 2019"
            size="36EU - 4US"
            price="259.000 ₭"
          />
          <CartItem
            image="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1131&q=80"
            name="Nike Air Max 2019"
            size="36EU - 4US"
            price="259.000 ₭"
          />
          <CartItem
            image="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1131&q=80"
            name="Nike Air Max 2019"
            size="36EU - 4US"
            price="259.000 ₭"
          />
          <CartItem
            image="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1131&q=80"
            name="Nike Air Max 2019"
            size="36EU - 4US"
            price="259.000 ₭"
          />
        </div>

        {/* Subtotal Section */}
        <div className="mt-6 h-full rounded-lg border border-gray-200 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4 text-gray-200" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-2 font-medium text-white hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
