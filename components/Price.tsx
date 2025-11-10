"use client";

import React, { useState, useMemo } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  // ✅ Tính total bằng useMemo để tối ưu
  const total = useMemo(() => {
    return quantity * (options ? price + options[selected].additionalPrice : price);
  }, [quantity, selected, options, price]);

  // ✅ Giả sử sau này bạn cần dùng id để thêm vào giỏ hàng
  const handleAddToCart = () => {
    console.log(`Added to cart: id=${id}, total=$${total}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>

      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-24 p-2 ring-1 ring-orange-400 rounded-md transition-all"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "orange",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-orange-500 rounded-md">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="px-2 text-orange-500 hover:text-orange-700 transition"
            >
              {"<"}
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              className="px-2 text-orange-500 hover:text-orange-700 transition"
            >
              {">"}
            </button>
          </div>
        </div>

        {/* CART BUTTON */}
        <button
          onClick={handleAddToCart}
          className="uppercase w-56 bg-orange-500 text-white p-3 ring-1 ring-orange-500 rounded-md hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
